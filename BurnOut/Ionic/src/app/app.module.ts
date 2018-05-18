import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GlobalProvider } from '../providers/global/global';
import { DatabaseProvider } from '../providers/database/database';
import { FitBitServiceProvider } from '../providers/fit-bit-service/fit-bit-service';
import { NgxEchartsModule } from 'ngx-echarts';

import { IonicStorageModule } from '@ionic/storage';

import { Base64 } from '@ionic-native/base64';

import { FCM } from '@ionic-native/fcm';


import { BraceletListService } from '../providers/database/bracelet-list.service';

import { ProfileListService } from '../providers/database/profile-list.service';

import { ConsentUserService } from '../providers/database/consent-user.service';

import { TokenFitBitService } from './../providers/fit-bit-service/tokenfitbit-service';

import { DataFitBitService } from './../providers/database/datafitbit.service';

import { RecommendationsService } from './../providers/database/recommendations.service';

import { Device } from '@ionic-native/device';

import { AutomaticLoginService } from './../providers/global/automatic-login.service';




export const firebaseConfig = {
  apiKey: "AIzaSyA0mnZssyqo5PieFUUBTipdU9VB9uh0Xvo",
  authDomain: "my-first-project-7d187.firebaseapp.com",
  databaseURL: "https://my-first-project-7d187.firebaseio.com",
  projectId: "my-first-project-7d187",
  storageBucket: "my-first-project-7d187.appspot.com",
  messagingSenderId: "323245343363"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',
      tabsHideOnSubPages: true,
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
      preloadModules: true
    }),
    HttpModule,
    HttpClientModule,
    NgxEchartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FCM,
    Device,
    GlobalProvider,
    DatabaseProvider,
    FitBitServiceProvider,
    BraceletListService,
    ProfileListService,
    ConsentUserService,
    TokenFitBitService,
    Base64,
    DataFitBitService,
    RecommendationsService,
    AutomaticLoginService
  ]
})
export class AppModule { }
