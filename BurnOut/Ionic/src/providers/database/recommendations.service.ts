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
 
    constructor(private db: AngularFireDatabase) { }
 
    


    getQuestionUserList(idUsuario: string) {
        return this.db.list('/question_answer_user/', questionUser => questionUser.orderByChild('user').equalTo(idUsuario).limitToLast(1));
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
 
    
    
}