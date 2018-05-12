import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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


    /**
     * Son los días iniciales y permisibles para empezar a contestar, antes puede escoger cualquier indicativo, 
     * luego tiene que responder
     * @type {number}
     */
    private _days_to_answer : number = 5;

    private _id_first_question_forced = 23;
    private _id_second_question_forced = 24;



    private _insert: boolean = true;
    private _question_modality: boolean = true;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _recommendationsService : RecommendationsService,
		private _global: GlobalProvider,
		private alertCtrl: AlertController
	) {


		this.loadQuestionUser();


        


	}

	protected _diff_dates(dateq : string){

		var days = 0;

		var dq = new Date(dateq);
		var b = new Date();
		var c = b.toISOString();
		var d = new Date(c);

		days = Math.round((d.getTime()-dq.getTime())/(1000*60*60*24));

		return days;
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

	


	protected loadQuestionUser(){

		this._QuestionUserList = this._recommendationsService.getQuestionUserList(this._global.usuario.id)
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

        this._QuestionUserList.forEach( item => {

        	this.section = "";
			this.first = true;

			this.section_a = "";
			this.first_a = true;

        	if(item.length){
            	this._QuestionUser = item[0];

            	var diff_dates = this._diff_dates(this._QuestionUser.created_at);

            	console.log(diff_dates);

            	if( diff_dates >= this._days_to_answer ){
            		this._question_modality = false
            	}else{
            		this._question_modality = true
            	}
            	this._insert = false;
        	}else{
        		this._insert = true;
        	}

            console.log(this._QuestionUser);

            if(this._question_modality){
            	this.loadQuestions();
            }else{
            	this.loadAnswers();
            }

            
           
        });


	}


	protected loadQuestions(){

		this.RecommendationsList = this._recommendationsService.getQuestionsList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

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
            	// LA ULTIMA ENCUESTA
            	this.get_LastSurvey();
            }

        });


	}


	protected loadAnswers(){

		this.AnswersList = this._recommendationsService.getAnswersList()
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

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

            		this.Answers[ indice ] = item[ this._id_first_question_forced - 1 ];
					indice++;
					this.Answers[ indice ] = item[ this._id_second_question_forced - 1 ];

            		this.section_a = this.Answers[0]["categoria"];

            	}
            }

            // ES NUEVA
            if(this._QuestionUser.answers == undefined){
            	this._QuestionUser.answers = [];

            	for (var j = 0; j < this.Answers.length; j++) {
            		this._QuestionUser.answers.push({
            			id: this.Answers[j]["id"],
            			question: this.Answers[j]["pregunta"],
            			value: "",
            		});
            	}

            }

        });


	}



	protected get_LastSurvey(){

		this.LastSurvey = this._recommendationsService.getLastUserSurvey(this._global.usuario.id)
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );


        this.LastSurvey.forEach( item => {

            this.key_latestSurvey = item[0]["key"];
            this.date_latestSurvey = item[0]["created_at"];
           
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
                    role: 'cancelar'
                }
            ]
        });
        
        alert.present();

	}



}
