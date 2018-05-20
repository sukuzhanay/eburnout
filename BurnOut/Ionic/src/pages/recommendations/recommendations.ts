import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalProvider } from '../../providers/global/global';

import { AlertController } from 'ionic-angular';

import { QuestionR } from './../../models/questionr.model';
import { QuestionUser } from './../../models/questionuser.model';
import { AnswerR } from './../../models/answerr.model';


import { RecommendationsService } from '../../providers/database/recommendations.service';


@IonicPage()
@Component({
  selector: 'page-recommendations',
  templateUrl: 'recommendations.html',
})
export class RecommendationsPage {

	RecommendationsList: Observable<QuestionR[]>;
	Recommendations: Array<QuestionR>;

	AnswersList: Observable<AnswerR[]>;
	Answers: Array<AnswerR>;
	

	_QuestionUserList: Observable<QuestionUser[]>;

	section : string = "";
	first : boolean = true;

	section_a : string = "";
	first_a : boolean = true;

	LastSurvey;
	key_latestSurvey : string = "";
	date_latestSurvey : string = "";

	_QuestionUser : QuestionUser = {
        email: "",
    	user: "",
    	survey: "",
    	created_at: "",
    	updated_at: "",
    	questions: [],
    	answers: []
    };


    public is_permissible : boolean = true;

    
	ctrls_form: FormGroup;


    private _insert: boolean = true;
    private _question_modality: boolean = true;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _recommendationsService : RecommendationsService,
		private _global: GlobalProvider,
		private alertCtrl: AlertController,
		public formBuilder: FormBuilder,
	) {

        this.loadQuestionUser();

	}

	


	protected _before_save_is_false(){

		var pass = false;

		for (var i = 0; i < this._QuestionUser.questions.length; i++)
			if(this._QuestionUser.questions[i].checked)
				pass = true;
		
		if(!pass){

        	let alert = this.alertCtrl.create({
            	title: "Selección de Recomendación(es)",
            	message: "Debe seleccionar al menos una recomendación",
            	buttons: [
                	{
                    	text: 'OK',
                    	role: 'cancelar'
                	}
            	]
        	});
        
        	alert.present();

		}

		return pass;
	}

	protected _before_save_is_false_answer(){

		var pass = true;

		for (var i = 0; i < this._QuestionUser.answers.length; i++)
			if(!this._QuestionUser.answers[i].value.toString().trim().length)
				pass = false;
		
		if(!pass){

        	let alert = this.alertCtrl.create({
            	title: "Inclusión de Respuesta(s)",
            	message: "Debe escribir un valor de resultado en cada una de las preguntas",
            	buttons: [
                	{
                    	text: 'OK',
                    	role: 'cancelar'
                	}
            	]
        	});
        
        	alert.present();

		}

		return pass;
	}

    protected _clean(){

        this._QuestionUser = {
                    email: "",
                    user: "",
                    survey: "",
                    created_at: "",
                    updated_at: "",
                    questions: [],
                    answers: []
        };
        this.Answers = undefined;
    }

	
	protected loadQuestionUser(){

		this._QuestionUserList = !this._QuestionUserList ? this._recommendationsService.getQuestionUserList(this._global.usuario.id)
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        ) : this._QuestionUserList;

        this._QuestionUserList.forEach( item => {



            this.LastSurvey = !this.LastSurvey ? this._recommendationsService.getLastUserSurvey(this._global.usuario.id)
                .snapshotChanges()
                .map(
                    changes => {
                                return changes.map(c => ({
                                        key: c.payload.key, ...c.payload.val()
                                }))
                    }
            ) : this.LastSurvey;


            this.LastSurvey.forEach( encuesta => {


                if(encuesta.length){

                    this.is_permissible = true;

                    this.key_latestSurvey = encuesta[0]["key"];
                    this.date_latestSurvey = encuesta[0]["created_at"];

                    console.log(this.key_latestSurvey);

                    this.section = "";
                    this.first = true;

                    this.section_a = "";
                    this.first_a = true;

                    this._question_modality = true;

                    console.log('questions 2');

                    if(item.length){

                        if(item[0]["survey"] == this.key_latestSurvey){

                            this._QuestionUser = item[0];

                            var diff_dates = this._recommendationsService.diff_dates(this._QuestionUser.created_at);

                            console.log(diff_dates);

                            if( diff_dates >= this._recommendationsService.days_to_answer ){
                                this._question_modality = false
                            }else{
                                this._question_modality = true
                            }
                            this._insert = false;
                        }else{
                            this._insert = true;
                            this._clean();
                        }
                    }else{
                        this._insert = true;
                        this._clean();
                    }

                    console.log(this._QuestionUser);

                    if(this._question_modality){
                        this.loadQuestions();
                    }else{
                        this.loadAnswers();
                    }

                }else{
                    this.is_permissible = false;
                }

            });
           
        });


	}


	protected loadQuestions(){

		this.RecommendationsList = !this.RecommendationsList ? this._recommendationsService.getQuestionsList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        ) : this.RecommendationsList;

        this.RecommendationsList.forEach( item => {

        	if(this.Recommendations == undefined){
            	this.Recommendations = item;
            	if(this.Recommendations.length)
            		this.section = this.Recommendations[0]["categoria"];
            }

            // ES NUEVA
            if(!this._QuestionUser.questions.length){
            	for (var i = 0; i < this.Recommendations.length; i++) {
            		this._QuestionUser.questions.push({
            			id: this.Recommendations[i]["id"],
            			recommendation: this.Recommendations[i]["recommendation"],
            			checked: false,
            		});
            	}

            }

        });


	}


	protected loadAnswers(){

		this.AnswersList = !this.AnswersList ? this._recommendationsService.getAnswersList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        ) : this.AnswersList;

        this.AnswersList.forEach( item => {

        	if(this.Answers == undefined && item.length && this._QuestionUser.questions.length){

        		var index = 0;
        		var indice = 0;
        		this.Answers = [];
				for (var i = 0; i < this._QuestionUser.questions.length; i++) {
					if( this._QuestionUser.questions[i].checked ){
						index = parseInt( this._QuestionUser.questions[i].id ) - 1;
						this.Answers[ indice ] = item[ index ];
						indice++;
					}
				}

            	if(this.Answers.length){

            		this.Answers[ indice ] = item[ this._recommendationsService.id_first_question_forced - 1 ];
					indice++;
					this.Answers[ indice ] = item[ this._recommendationsService.id_second_question_forced - 1 ];

            		this.section_a = this.Answers[0]["categoria"];

            	}
            }

            // ES NUEVA
            if(this._QuestionUser.answers == undefined){
				this._QuestionUser.answers = [];
				var fields_form = {};

            	for (var j = 0; j < this.Answers.length; j++) {
            		this._QuestionUser.answers.push({
            			id: this.Answers[j]["id"],
            			question: this.Answers[j]["pregunta"],
            			value: "",
					});
					fields_form["field_"+this.Answers[j]["id"]] = [];
					fields_form["field_"+this.Answers[j]["id"]][0] = "";
					fields_form["field_"+this.Answers[j]["id"]][1] = Validators.compose([Validators.required]);
				}
				
				this.ctrls_form = this.formBuilder.group(fields_form);

            }

        });


	}





	public changeSection(newSection:string){
		this.section = newSection;
		return true;
	}

	public changeSection_a(newSection:string){
		this.section_a = newSection;
		return true;
	}

	

		
	public setNotFirst(){
		this.first = false;
		return true;
	}

	public setNotFirst_a(){
		this.first_a = false;
		return true;
	}

	

	public AddSelCatego(recommendation: QuestionR){

	}

	public AddSelAnswer(answer: AnswerR){

	}

	public saveRecomm(){

		if(!this._before_save_is_false()) return false;

		var title = "";
		var mge = "";

		var date = new Date();
		if( this._insert ){
			this._QuestionUser.email 		= this._global.usuario.email;
    		this._QuestionUser.user 		= this._global.usuario.id;
    		this._QuestionUser.survey 		= this.key_latestSurvey;
    		this._QuestionUser.created_at 	= date.toISOString();
    		this._recommendationsService.addQuestionUser(this._QuestionUser);

    		title = "Crear Recomendación(es)";
    		mge = "Se creó recomendación(es)";

		}else{
    		this._QuestionUser.updated_at 	= date.toISOString();
    		this._recommendationsService.updateQuestionUser(this._QuestionUser);

    		title = "Actualizar Recomendación(es)";
    		mge = "Se actualizó recomendación(es)";

		}

        let alert = this.alertCtrl.create({
            title: title,
            message: mge,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancelar'
                }
            ]
        });
        
        alert.present();

	}


	public saveAnswer(){

		if(!this._before_save_is_false_answer()) return false;

		var date = new Date();
		
    	this._QuestionUser.updated_at 	= date.toISOString();
    	this._recommendationsService.updateQuestionUser(this._QuestionUser);

        let alert = this.alertCtrl.create({
            title: "Actualizar Respuesta(s)",
            message: "Se actualizó respuesta(s)",
            buttons: [
                {
                    text: 'OK',
                    role: 'cancelar',
                    handler: () => {

                        this.navCtrl.parent.select(1);

                    }
                }
            ]
        });
        
        alert.present();

	}



}
