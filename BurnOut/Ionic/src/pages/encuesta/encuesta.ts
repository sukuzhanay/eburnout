import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { DatabaseProvider } from '../../providers/database/database';

import { Observable } from 'rxjs/Observable';


import { QuestionUser } from './../../models/questionuser.model';
import { RecommendationsService } from '../../providers/database/recommendations.service';

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  resultadoPreguntas: { ae: number, d: number, rp: number, q: string };
  indicePregunta: number;
  formulario: { mensaje: string };

    _QuestionUserList: Observable<QuestionUser[]>;


    _QuestionUser : QuestionUser = {
        email: "",
        user: "",
        survey: "",
        created_at: "",
        updated_at: "",
        questions: [],
        answers: []
    };

    LastSurvey;
    key_latestSurvey : string = "";
    date_latestSurvey : string = "";


    to_Survey = false;
    on_recommendation = false;
    in_response = false;

    diff_dates : number = 0;

    last_survey : boolean = false;

    last_qa_survey;

    constructor(
        public navCtrl: NavController,
        public global: GlobalProvider,
        public database: DatabaseProvider,
        private _recommendationsService : RecommendationsService,
        private _global: GlobalProvider,
    ) {
        
        this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
        this.indicePregunta = 0;
        this.formulario = { mensaje: '' };

        this.loadQuestionUser();

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

            this.to_Survey = false;
            this.on_recommendation = false;
            this.in_response = false;

            console.log('questions 1');
            this.last_survey = false;

            if(item.length){

                // verifica el status de la tabla recomendacion-contestación
                this._QuestionUser = item[0];

                console.log(this._QuestionUser);

                if(this._QuestionUser.answers==undefined && this._QuestionUser.questions.length){
                    this.on_recommendation = false;
                    this.in_response = true;
                    this.to_Survey = false;

                    this.diff_dates = this._recommendationsService.diff_dates(this._QuestionUser.created_at);

                    if( this.diff_dates > this._recommendationsService.days_to_answer ){
                        this.diff_dates = 0;
                    }else{
                        this.diff_dates = this._recommendationsService.days_to_answer - this.diff_dates;
                    }

                }else if(this._QuestionUser.answers.length && this._QuestionUser.questions.length){
                    this.last_survey = true;
                    this.get_LastSurvey();
                }

            }else{

                // verificamos si la ultima encuesta no esta en recomendaciones
                // 
                // SIGNIFICA QUE LA ENCUESTA ANTERIOR NO HA TENIDO RETROALIMENTACION, ENTONCES, NO PASA
                // 
                // SIGNIFICA QUE NO HA COMENZADO A LLENAR LAS RECOMENDACIONES
                this.last_survey = true;
                this.get_LastSurvey();

            }

        });


    }


    protected get_LastSurvey(){

        this.LastSurvey =  !this.LastSurvey ? this._recommendationsService.getLastUserSurvey(this._global.usuario.id)
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        ) : this.LastSurvey;


        this.LastSurvey.forEach( item => {


            if(item.length){

                if(this.last_survey){

                    this.key_latestSurvey = item[0]["key"];

                    console.log(this.key_latestSurvey);

                    this.date_latestSurvey = item[0]["created_at"];

                    //VERIFICAR SI EL ID DE LA ENCUESTA NO ESTA EN RECOMENDACIONES_RESPUESTAS,
                    // QUIERE DECIR QUE ESTA A LA ESPERA DE RECOMENDACIONES
                     
                    this._recommendationsService.getQuestionUserPerSurveyList(this.key_latestSurvey)
                        .valueChanges().subscribe(res => {

                            console.log(res);

                            if(this.last_survey){

                                if(!res.length){

                                    this.to_Survey = false;
                                    this.on_recommendation = true;
                                    this.in_response = false;

                                }else{
                                    this.to_Survey = true;
                                    this.on_recommendation = false;
                                    this.in_response = false;
                                }

                            }

                            this.last_survey = false;

                        }
                    );
                }

            }else{
                this.to_Survey = true;
                this.on_recommendation = false;
                this.in_response = false;
            }
           
        });

    }


  ionViewDidLoad() {

  }

  /* RESPUESTA DE CADA PREGUNTA */
  respuesta(idRespuesta: number) {
    if (this.indicePregunta < this.global.questions.length - 1) {
      switch (this.global.questions[this.indicePregunta].type) {
        case 'AE':
          this.resultadoPreguntas.ae += idRespuesta;
          break;
        case 'D':
          this.resultadoPreguntas.d += idRespuesta;
          break;
        case 'RP':
          this.resultadoPreguntas.rp += idRespuesta;
          break;
      }
      this.indicePregunta++;
    }
  }
  /* FIN RESPUESTA DE CADA PREGUNTA */

  /* TERMINAR ENCUESTA */
  terminar() {
    this.indicePregunta = 0;
    this.resultadoPreguntas.q = this.formulario.mensaje;
    this.global.resultadoPreguntas = this.resultadoPreguntas;
    this.global.resultadosPreguntas.push(this.global.resultadoPreguntas);
    if (this.global.resultadosPreguntas.length > 3) {
      this.global.resultadosPreguntas.shift();
    }
    this.database.guardarUltimaEncuesta(this.global.usuario.id, this.global.resultadoPreguntas);
    this.database.guardarEncuesta(this.global.usuario.id, this.global.usuario.email, this.global.resultadoPreguntas);
    this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
    this.formulario = { mensaje: '' };
    this.loadQuestionUser();
    this.navCtrl.parent.select(2);
  }
  /* TERMINAR ENCUESTA */

}
