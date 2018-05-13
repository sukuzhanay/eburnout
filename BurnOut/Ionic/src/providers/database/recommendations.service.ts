import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { QuestionR } from './../../models/questionr.model';
import { QuestionUser } from './../../models/questionuser.model';
import { AnswerR } from './../../models/answerr.model';


 
@Injectable()
export class RecommendationsService {
 
    private recommendationsQListRef = this.db.list<QuestionR>('question_categories/');

    private questionUserListRef = this.db.list<QuestionUser>('question_answer_user/');

    private answerQListRef = this.db.list<AnswerR>('answer_categories/');

    private userSurveyListRef = this.db.list('encuestas/');

    /**
     * Son los días iniciales y permisibles para empezar a contestar, antes puede escoger cualquier indicativo, 
     * luego tiene que responder
     * @type {number}
     */
    public days_to_answer : number = 5;

    public id_first_question_forced = 23;
    public id_second_question_forced = 24;
 
    constructor(private db: AngularFireDatabase) { }
 
    


    getQuestionUserList(idUsuario: string) {
        return this.db.list('/question_answer_user/', questionUser => questionUser.orderByChild('user').equalTo(idUsuario).limitToLast(1));
    }

    getQuestionUserPerSurveyList(survey: string) {
        return this.db.list('/question_answer_user/', questionUser => questionUser.orderByChild('survey').equalTo(survey).limitToLast(1));
    }

    addQuestionUser(qu: QuestionUser) {
        return this.questionUserListRef.push(qu);
    }

    updateQuestionUser(qu: QuestionUser) {
        return this.questionUserListRef.update(qu.key, qu);
    }



    getQuestionsList() {
        return this.recommendationsQListRef;
    }

    getAnswersList() {
        return this.answerQListRef;
    }



    getLastUserSurvey(idUsuario: string) {

         return this.db.list('/encuestas/', encuestas => encuestas.orderByChild('id').equalTo(idUsuario).limitToLast(1));

    }
 
    


    diff_dates(dateq : string){

        var days = 0;

        var dq = new Date(dateq);
        var b = new Date();
        var c = b.toISOString();
        var d = new Date(c);

        days = Math.round((d.getTime()-dq.getTime())/(1000*60*60*24));

        return days;
    }
    
}