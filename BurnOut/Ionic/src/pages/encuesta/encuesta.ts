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


    to_Survey = true;
    on_recommendation = false;
    in_response = false;

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

            if(item.length){

                // verifica el status de la tabla recomendacion-contestación
                this._QuestionUser = item[0];

                if(this._QuestionUser.answers==undefined && this._QuestionUser.questions.length){
                    this.on_recommendation = false;
                    this.in_response = true;
                    this.to_Survey = false;
                }else if(this._QuestionUser.answers.length && this._QuestionUser.questions.length){
                    this.to_Survey = true;
                    this.on_recommendation = false;
                    this.in_response = false;
                }

            }else{

                // verificamos si la ultima encuesta no esta en recomendaciones
                // 
                // SIGNIFICA QUE LA ENCUESTA ANTERIOR NO HA TENIDO RETROALIMENTACION, ENTONCES, NO PASA
                // 
                // SIGNIFICA QUE NO HA COMENZADO A LLENAR LAS RECOMENDACIONES

                this.get_LastSurvey();

                

                
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


            if(item.length){

                this.key_latestSurvey = item[0]["key"];
                this.date_latestSurvey = item[0]["created_at"];

                console.log(this.key_latestSurvey);

                //VERIFICAR SI EL ID DE LA ENCUESTA NO ESTA EN RECOMENDACIONES_RESPUESTAS,
                // QUIERE DECIR QUE ESTA A LA ESPERA DE RECOMENDACIONES
                 
                var have_recom_last = this._recommendationsService.getQuestionUserPerSurveyList(this.key_latestSurvey)
                    .valueChanges().subscribe(res => {

                        console.log(res);


                        console.log(this.to_Survey);
                        console.log(this.on_recommendation );
                        console.log(this.in_response );



                    });

                

                





                this.to_Survey = true;

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
    this.database.guardarEncuesta(this.global.usuario.id, this.global.resultadoPreguntas);
    this.resultadoPreguntas = { ae: 0, d: 0, rp: 0, q: '' };
    this.formulario = { mensaje: '' };
    this.navCtrl.parent.select(0);
  }
  /* TERMINAR ENCUESTA */

}
