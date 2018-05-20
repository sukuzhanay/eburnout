import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; // HttpHeaders ha sido importado para poder usar en el request.

import { Base64 } from '@ionic-native/base64';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; // Haceo un mapeo del post y/o get

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';

import { AuthConfig } from './auth-config';
import { Platform } from 'ionic-angular'; // Pre- cargala application

import { FBSleep } from './../../models/fbsleep'; // Model, para instanciar la información del usuario



declare const window: any; //Crearmos window para usar un browser interno predeterminado.


import { AlertController } from 'ionic-angular';

import { GlobalProvider } from '../global/global';

import { Storage } from '@ionic/storage';

import { TokenFBUser } from './../../models/tokenfbuser.model';
import { TokenFitBitService } from './tokenfitbit-service';


import { UserFBAHI } from './../../models/userfbahi.model';

import { UserFBSleep } from './../../models/userfbsleep.model';

import { DataFitBitService } from './../database/datafitbit.service';




@Injectable() // Decorator
export class FitBitServiceProvider {

    private _renew_token : boolean = false;

    private _access_token : string = "";

    // ID CLIENT FOR ACCESS PERSONAL DATA IN FITBIT
    private _client_id : string = "";
    private _client_secret : string = "";
   
    // INFORMACIÓN DEL USUARIO, DATOS PERSONALES (NOMBRE, GÉNERO)
    private _fbsleep : FBSleep;


    private _iCron : any = null;
    private _timeCron : number = 5000;

    // Series de tiempo activity heart
    private _tsAHI : number[] = [];

    private errorObserver: any;
    public error: any;

    private _stayWaiting : boolean = false;


    private _db_client_id : string = "";


    private _TokenFBUser: TokenFBUser = {
        email: "",
        token: "",
        client_id: "",
        created_at: "",
        updated_at: ""
    };

    private _UserFBAHI: UserFBAHI = {
        email: "",
        val_min: 0,
        val_max: 0,
        fecha: ""
    };

    private _UserFBSleep: UserFBSleep = {
        email: "",
        hours: 0,
        minutes: 0,
        percent_eight_hours: 0,
        fecha: ""
    };

    private _last_date_ahi : string = "";
    private _AHI : any;
    
    private _last_date_sleep : string = "";
    private _sleeps : any;

    /**
     * SOLO PARA CUANDO SE ESTE EN NAVEGADOR Y NO EN MOBILE, ES PARA QUE NO PIDA CONTINUAMENTE EL TOCKEN EN NUEVA VENTANA
     * @type {boolean}
     */
    private _debugin : boolean = false;

    tokenFBRecord: Observable<TokenFBUser[]>;

    lastahi:any;
    lastsleep: any;

    constructor(
        public http: HttpClient, // get y post
        private platform: Platform,
        public alertCtrl: AlertController,
        private _global: GlobalProvider,
        private _storage: Storage,
        private _tokenFitBitService: TokenFitBitService,
        private _dataFitBitService: DataFitBitService
        ) {

// localStorage.setItem('fb_access_token','');
        
        this._fbsleep = new FBSleep(0,"","",0);

        this.errorObserver = null;
        this.error = Observable.create(observer => {
            this.errorObserver = observer;
        });

        this._set_time_cron();


        this._oninit();


      }

    public  _oninit(){

        this._TokenFBUser.email = this._global.usuario.email;

        var _token = "";

        this.tokenFBRecord = this._tokenFitBitService.getTokenFitBit(this._TokenFBUser.email)
            .snapshotChanges()
            .map(
                changes => {
                            return changes.map(c => ({
                                    key: c.payload.key, ...c.payload.val()
                            }))
                }
        );

        this.tokenFBRecord.forEach( item => {

            this.toStopCron();

            if(item.length){
                this._TokenFBUser = item[0];
            }else{
                this._TokenFBUser.client_id = this._global.client_id;
            }
            
            if(this._debugin){
                console.log(this._TokenFBUser);
            }

            this._db_client_id = this._TokenFBUser.client_id;
            if(this._db_client_id == this._global.client_id){
                _token = this._TokenFBUser.token;
            }else{
                _token = "";
            }

            this._client_secret = this._global.client_secret;
            this._storage.set('fb_client_secret', this._client_secret);

            this._client_id = this._db_client_id;
            this._storage.set('fb_client_id', this._db_client_id);

            this._access_token = _token;
            this._storage.set('fb_access_token', _token);

            //this._load_vars();

            //_self._save_token_desktop();

            this.to_init_in_client();

        });



         

            

    }

    

    private _save_token_desktop(){


        this._TokenFBUser.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjVLOTkiLCJhdWQiOiIyMkNHODQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTI1OTc1MzYyLCJpYXQiOjE1MjU4ODg5NjJ9.kXRLQx3JJlvqeDtBqECPdDm7HFFUFctC8hvmOIE_Tp8";
        this._TokenFBUser.client_id = "22CG84";
        this._tokenFitBitService.addTokenFB(this._TokenFBUser);


    }



    public to_init_in_client(){

        this._valuate_error({error:'',status:1020});

    }




    private _set_time_cron(){

        var t_in_ms = AuthConfig.rate_limit <= 0    ?    150    :    AuthConfig.rate_limit;

        // Time in miliseconds to cronjob
        this._timeCron = t_in_ms / 60 * 60 * 1000;

    }

    private _load_vars(){

        var _self = this;

        if(this._global.client_id){

            _self._storage.get('fb_client_id').then((client_id) => {

                _self._client_id = client_id ? client_id : "";

            });

            _self._storage.get('fb_access_token').then((val) => {

                _self._access_token = val ? val : "";

            });

            _self._storage.get('fb_client_secret').then((client_secret) => {

                _self._client_secret = client_secret ? client_secret : "";

            });

            console.log('ENTRO!!!');

        }

    }


    private _get_url(): string{

        AuthConfig.body.client_id = this._global.client_id;

        return AuthConfig.url + "?" + Object.keys(AuthConfig.body).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(AuthConfig.body[k])
        }).join('&');

    }

    public get_strDate(sDate:string="", sFormat:string=""){
        var date;
        if (sDate.length){
            date = new Date(sDate);
        }else{
            date = new Date();
        }

        var day = date.getDate() < 10 ? "0"+date.getDate().toString() : date.getDate().toString();
        var minutes = date.getMinutes() < 10 ? "0"+date.getMinutes().toString() : date.getMinutes().toString();
        var month = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();

        if(sFormat=="HH:mm:ss")
            return date.getHours().toString() +":"+ minutes +":"+ date.getSeconds().toString();
        else if(sFormat=="dd-mm-yyyy")
            return day + "-" + month + "-" + date.getFullYear().toString();
        else
            return date.getFullYear().toString() + "-" + month + "-" + day;
            
    }


      private _getAuthPermission(): Promise<any> {
      // Metodos observables, si pasa algo X, doy la promesa de regresar con algo.

          var self = this;

        return new Promise(function (resolve, reject) {

            /*if(self._db_client_id == self._global.client_id){
                self._renew_token = false;
            }else{*/
                self._renew_token = true;
            //}

            var navigator_clean =  self._renew_token ? ",clearsessioncache=yes,clearcache=yes" : "";

            // self.showAlert("a renew => "+navigator_clean);

            if( window.cordova != undefined ){

                const browser = window.cordova.InAppBrowser.open(self._get_url(), '_blank',
                    'location=no'+navigator_clean);

                browser.addEventListener('loadstart', (event) => {

                    if ((event.url).indexOf(AuthConfig.body.redirect_uri) === 0) {
                        browser.removeEventListener('exit', () => {});
                        browser.close();
                        const responseParameters = (((event.url).split(AuthConfig.key_access_token)[1]).split("&")[0]).split('=')[1];

                        const parsedResponse = {};
                        const defaultError = {error:'Problem authenticating with FitBit',status:1010};

                        if (responseParameters !== undefined && responseParameters !== null) {
                            parsedResponse[AuthConfig.key_access_token] = responseParameters;
                            resolve(parsedResponse);
                        } else {
                            reject(defaultError);
                        }
                    }

                    
                });

                browser.addEventListener('exit', function (event) {
                    reject({error:'The FitBit authorization in flow was canceled',status:1010});
                });

            }else{

                window.open(self._get_url(), '_blank', 'location=no'+navigator_clean);

                resolve({"access_token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjVLOTkiLCJhdWQiOiIyMkNHODQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTI2NTg3NzI2LCJpYXQiOjE1MjYwMTY5Mjh9.PkVFjhGPQIwJwGB0WhnBqZIfAen69NOi338lC4Te6qM"});

            }

        });

    }


    private _toAutorizate(){

        var self = this;

        this._getAuthPermission().then((success) => {

            if(success[AuthConfig.key_access_token] !== undefined ){

                self._access_token = success[AuthConfig.key_access_token];
                
                self._renew_token = false;
                self._client_id = self._global.client_id;

                //GUARDAR EL NUEVO TOCKEN
                if(self._TokenFBUser.token.toString().trim().length){
                    self._TokenFBUser.token = self._access_token;
                    self._tokenFitBitService.updateTokenFB(self._TokenFBUser);
                }else{
                    self._TokenFBUser.token = self._access_token;
                    self._tokenFitBitService.addTokenFB(self._TokenFBUser);
                }

                self._client_secret = self._global.client_secret;
                self._storage.set('fb_client_id', self._client_id);
                self._storage.set('fb_client_secret', self._client_secret);

                
                //localStorage.setItem('fb_access_token', self._access_token);
                this._global.access_token = self._access_token;
                self._storage.set('fb_access_token', self._access_token);


                self._valuate_error({status:1001});
            }

        }, (error) => {
            self._valuate_error(error);
        });

    }



    public check_auth(){

        this.platform.ready().then(() => {

            //this._load_vars();

            if( !this._access_token.trim().length && this.have_bracelet() ){
                this._toAutorizate();
            }else{
                this._valuate_error({status:1001});
            }

        });

    }


    

    private _valuate_error(error){

        this.errorObserver.next(error);

        if(this._debugin){

            console.log(error);

        }

        if(error.status != undefined){
            if(error.status == 400 || error.status == 401 ){
                // Authorization code invalid
                this.toStopCron();
                //localStorage.setItem('fb_access_token',null);
                /*this._global.access_token = "";
                this._storage.set('fb_access_token', "");
                this._load_vars();*/
                if(this._debugin && error.status == 401){
                    this.toStopCron();
                    //this._toRenewToken();
                }else{
                    this._toAutorizate();
                }
            }else if(error.status == 429 ){

                this._stayWaiting = true;

            }else if(error.status == 1002 ){
                this._stayWaiting = false;
            }
        }

    }


    public toStopCron(){

        if(this._iCron){
            clearInterval(this._iCron);
        }
        this._iCron = null;

    }

    public toStartCron(){

        if(this._iCron){
            this.toStopCron();
        }

        var self = this;
        self._toCron();
        
        this._iCron = setInterval( function(){
            self._toCron();
        }, self._timeCron );
               
    }

    private _toCron(){
        this._get_heart();
        this._process_raw_data();
    }


    private _get_authHeader(){
        return {
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+ this._access_token
        };
    }


   
    private _get_heart() {

        var headers = new HttpHeaders(this._get_authHeader());
        var _self = this;

        if(this._debugin){
            console.log(this._get_authHeader());
        }

        // pasada URL de cada segundo
        // https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec/time/00:00/23:59.json

        // nueva URL de cada minuto
        var url = "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json";

     
        this.http.get(url,
            {headers: headers})
                .subscribe((timeSeries) => {

                if(_self._stayWaiting) _self._valuate_error({status:1002});


                if( timeSeries['activities-heart-intraday'] !== undefined  ){

                    _self._tsAHI = timeSeries['activities-heart-intraday'].dataset.map(
                        function(measurement) {
                            var a =    {
                                            name: measurement.time,
                                            value: measurement.value
                                        };
                            return a;
                        }
                    );

                    _self._AHI = timeSeries;

                }

                if(_self._debugin){

                    console.log(_self._tsAHI);

                }

                _self._get_sleep();

            }, (error: HttpErrorResponse ) => {
               _self._valuate_error(error);
            });
    }




    private _get_sleep() {

        var headers = new HttpHeaders(this._get_authHeader());
        var _self = this;

        if(this._debugin){
            console.log(this._get_authHeader());
        }
        
        var dNow = this.get_strDate();

        this.http.get('https://api.fitbit.com/1.2/user/-/sleep/date/'+dNow+'/'+dNow+'.json',
            {headers: headers}).subscribe((sleeps) => {

                if(_self._stayWaiting) _self._valuate_error({status:1002});

                if(sleeps["sleep"] !== undefined){
                    if (sleeps["sleep"][0] !== undefined){
                        var len = sleeps["sleep"].length-1;
                        _self._fbsleep.starttime = sleeps["sleep"][len]["startTime"];
                        _self._fbsleep.endtime = sleeps["sleep"][len]["endTime"];
                         _self._fbsleep.timeinbed = 0;
                         _self._fbsleep.minutesawake = 0;
                        for (var i = len; i >= 0; i--) {
                            _self._fbsleep.timeinbed +=    sleeps["sleep"][i]["timeInBed"];
                            _self._fbsleep.minutesawake += sleeps["sleep"][i]["minutesAwake"]
                        }

                    }else{

                        _self._fbsleep.timeinbed = sleeps["sleep"]["timeInBed"];
                        _self._fbsleep.starttime = sleeps["sleep"]["startTime"];
                        _self._fbsleep.endtime = sleeps["sleep"]["endTime"];
                        _self._fbsleep.minutesawake = sleeps["sleep"]["minutesAwake"];

                    }

                    _self._sleeps = sleeps;
                }

                if(_self._debugin){
                    console.log(_self._fbsleep.timeinbed);
                    console.log(_self._fbsleep.starttime);
                    console.log(_self._fbsleep.endtime);
                    console.log(_self._fbsleep.minutesawake);
                }


            }, (error: HttpErrorResponse ) => {
               _self._valuate_error(error);
            });

    }


    private _toRenewToken(){

        var header_b64 =  window.btoa(this._client_id+":"+this._client_secret);

        var header = {
            'Authorization': 'Basic '+ header_b64,
            'Content-Type':'application/x-www-form-urlencoded',
        };

        var headers = new HttpHeaders(header);
        var _self = this;

        var params = "grant_type=refresh_token&refresh_token="+this._access_token;

        this.http.post('https://api.fitbit.com/oauth2/token',params, {headers: headers})
                .subscribe((refresh) => {



                                //_self.showAlert( JSON.stringify(refresh));
                                console.log( refresh );


                }, (error: HttpErrorResponse ) => {
                   console.log(error);
                }
        );

    }



    public sleep(): FBSleep {

        return this._fbsleep;


    }

    public tsAHI(){
        return this._tsAHI;
    }



    showAlert(message) {
        let alert = this.alertCtrl.create({
            title: 'FitBit',
            subTitle: message,
            buttons: ['OK']
        });
        
        alert.present();
    }


    have_bracelet(){
        return this._global.client_id == "" || this._global.client_id == null || this._global.client_id == undefined
                    ?    false
                    :    true;
    }






    public toSaveAHI(val_min:number, val_max:number){

        this._UserFBAHI.val_min = val_min;
        this._UserFBAHI.val_max = val_max;

        var date = new Date();
        this._UserFBAHI.fecha = date.toISOString();

        this._UserFBAHI.email = this._global.usuario.email;
    
        this._dataFitBitService.addDataFitBitAHI(this._UserFBAHI);

    }


    public toSaveSleep(hours:number, minutes:number, percent_eight_hours:number){

        var date = new Date();
        this._UserFBSleep.fecha = date.toISOString();

        this._UserFBSleep.email = this._global.usuario.email;

        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.email = this._global.usuario.email;
        this._UserFBSleep.email = this._global.usuario.email;

        this._UserFBSleep.hours = hours;
        this._UserFBSleep.minutes = minutes;
        this._UserFBSleep.percent_eight_hours = percent_eight_hours;

        this._dataFitBitService.addDataFitBitSleep(this._UserFBSleep);

    }


    protected _process_raw_data(){

        var self = this;

        var date = new Date();
        var save_shi = true;

        self.lastahi = !self.lastahi ? self._dataFitBitService.getLastRawAHI(self._global.usuario.email).valueChanges() : self.lastahi;
        
        self.lastahi.forEach(rawahi => {

            if(rawahi.length){

                var diffdates = self._dataFitBitService.diff_dates(rawahi[0]["created_at"]);

                if(diffdates && self._AHI != undefined && save_shi){
                    self._dataFitBitService.addRawAHI({email: self._global.usuario.email, raw: self._AHI, created_at: date.toISOString() });
                    self._last_date_ahi = rawahi[0]["created_at"];
                    save_shi = false;
                }

            }else if(self._AHI != undefined && save_shi){
		self._dataFitBitService.addRawAHI({email: self._global.usuario.email, raw: self._AHI, created_at: date.toISOString() });
                self._last_date_ahi = rawahi[0]["created_at"];
                save_shi = false;
	    }

        });

        var save_sleeps = true;

        self.lastsleep = !self.lastsleep ? self._dataFitBitService.getLastRawSleep(self._global.usuario.email).valueChanges() : self.lastsleep;

        self.lastsleep.forEach(rawsleep => {

            if(rawsleep.length){

                var diffdatess = self._dataFitBitService.diff_dates(rawsleep[0]["created_at"]);

                if(diffdatess && self._sleeps != undefined && save_sleeps){
                    self._dataFitBitService.addRawSleep({email: self._global.usuario.email, raw: self._sleeps, created_at: date.toISOString() });
                    self._last_date_sleep = rawsleep[0]["created_at"];
                    save_sleeps = false;
                }

            }else if(self._sleeps != undefined && save_sleeps){
                self._dataFitBitService.addRawSleep({email: self._global.usuario.email, raw: self._sleeps, created_at: date.toISOString() });
                self._last_date_sleep = rawsleep[0]["created_at"];
                save_sleeps = false;
	    }
    
        });
    
    }

}