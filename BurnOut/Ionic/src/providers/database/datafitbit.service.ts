import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserFBAHI } from './../../models/userfbahi.model';

import { UserFBSleep } from './../../models/userfbsleep.model';

@Injectable()
export class DataFitBitService {
 
    private dataFitBitAHIRef = this.db.list<UserFBAHI>('data_fitbit_ahi/');

    private dataFitBitSleepRef = this.db.list<UserFBSleep>('data_fitbit_sleep/');
    
    
    private dataFBRawSleepRef = this.db.list('raw_sleep/');

    private dataFBRawAHIRef = this.db.list('raw_ahi/');

 
    constructor(private db: AngularFireDatabase) { }
 
    addDataFitBitAHI(userfbahi: UserFBAHI) {
        return this.dataFitBitAHIRef.push(userfbahi);
    }


    addDataFitBitSleep(userfbsleep: UserFBSleep) {
        return this.dataFitBitSleepRef.push(userfbsleep);
    }



    

    getLastRawAHI(email: string) {

        return this.db.list('/raw_ahi/', ahi => ahi.orderByChild('email').equalTo(email).limitToLast(1));

    }

    addRawAHI(ahi: any) {
        return this.dataFBRawAHIRef.push(ahi);
    }

    getLastRawSleep(email: string) {

        return this.db.list('/raw_sleep/', sleep => sleep.orderByChild('email').equalTo(email).limitToLast(1));

    }

    addRawSleep(sleep: any) {
        return this.dataFBRawSleepRef.push(sleep);
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