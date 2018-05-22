// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://my-first-project-7d187.firebaseio.com/'
});

var db = admin.database();
var refSurvey = db.ref('encuestas');
var refQAUser = db.ref('question_answer_user');
var refHlogged = db.ref('has_logged');

const days_to_answer = 7;


function diff_dates(dateq){

	var days = 0;

	var dq = new Date(dateq);
	var b = new Date();
	var c = b.toISOString();
	var d = new Date(c);

	days = Math.round((d.getTime()-dq.getTime())/(1000*60*60*24));

	return days;

};


function to_send(tokens, message){

	if(tokens.length){
		
		console.log('FOR THE TOKENS: ',JSON.stringify ( tokens ) );
		console.log('MESSAGE: ', message );

		const payload = {
			notification: {
				title: message.title,
				body: message.body,
				sound: "default",
				click_action: "FCM_PLUGIN_ACTIVITY",
				  icon: "fcm_push_icon"
			},
			data: message
		};
		return admin.messaging().sendToDevice(tokens, payload);
	}

}


function tokens_send_notification(email, message){

	let tokens = [];

	refHlogged.orderByChild('email').equalTo(email).once('value').then( snapshot => {
		
		snapshot.forEach(child => {

			const logged = child.val();
			const key_logged = child.key;

			if(logged.hasOwnProperty('token_message')){

				if(logged.token_message.toString().length){
					tokens.push(logged.token_message);
				}

			}

		});
		
		console.log('SEND NOTIFICATION TO: ',email);
		return to_send(tokens, message);

	});

};

function check_process_survey(){

	refSurvey.orderByChild('id').once('value').then( snapshot => {
		snapshot.forEach(child => {

			const survey = child.val();
			const key_survey = child.key;

			if(survey.hasOwnProperty('created_at')){

				refQAUser.orderByChild('survey').equalTo(key_survey).once('value').then( snapshot => {

					if( snapshot.numChildren() ){
						// VERIFICAR SI NO HA CAPTURADO RESPUESTAS

						snapshot.forEach(record => {
					
							const QAUser = record.val();
							const key_QAUser = record.key;

							if(!QAUser.hasOwnProperty('answers')){

								var diffdates = diff_dates(QAUser.created_at);

								if( diffdates > days_to_answer ){
									diffdates = 0;
								}else{
									diffdates = days_to_answer - diffdates;
								}

								if(diffdates==0){
									const mje = "Te quedan "+diffdates.toString()+" días, valora las recomendaciones que elegistes"
									tokens_send_notification(QAUser.email, { "title":"eBurnOut", "body":mje});
								}

							}

						});
					
					}else{
						// FALTA QUE REALICE RECOMENDACIONES
						if(survey.hasOwnProperty('email')){
							tokens_send_notification(survey.email, { "title":"eBurnOut", "body":"Es hora de elejir algunas recomendaciones"});
						}

					}
				
				});

			}
			
		});
	});

	return console.log('Verification of Survey Process');

};

function check_to_survey(){


	refHlogged.orderByChild('email').once('value').then( snapshot => {
		snapshot.forEach(child => {

			const user = child.val();
			const key_user = child.key;

			refQAUser.orderByChild('email').equalTo(user.email).limitToLast(1).once('value').then( snapshot => {

				snapshot.forEach(survey => {

					const last_survey = survey.val();
					const key_last_survey = survey.key;

					if( last_survey.hasOwnProperty('answers') && last_survey.hasOwnProperty('updated_at') ){

						var diffdates = diff_dates(last_survey.updated_at);

						if( diffdates > days_to_answer ){

							var tokens = [];
							var dias = diffdates - days_to_answer;
							var mge = "Han pasado "+dias+" día(s) que no realiza alguna encuesta, es hora de realizarla.";

							tokens.push(user.token_message);

							console.log('SEND NOTIFICATION TO: ',user.email);
							to_send(tokens, { "title":"eBurnOut", "body":mge});

						}
						
					}

				});

			});

		});

	});

	return console.log('Verification to Survey');

};

exports.hourly_job = functions.pubsub.topic('hourly-tick').onPublish((event) => {

	check_process_survey();
	check_to_survey();

	return console.log('Verification Completed');

});
