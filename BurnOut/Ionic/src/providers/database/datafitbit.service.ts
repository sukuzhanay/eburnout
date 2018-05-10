import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserFBAHI } from './../../models/userfbahi.model';

import { UserFBSleep } from './../../models/userfbsleep.model';

@Injectable()
export class DataFitBitService {
 
    private dataFitBitAHIRef = this.db.list<UserFBAHI>('data_fitbit_ahi/');

    private dataFitBitSleepRef = this.db.list<UserFBSleep>('data_fitbit_sleep/');

 
    constructor(private db: AngularFireDatabase) { }
 
    addDataFitBitAHI(userfbahi: UserFBAHI) {
        return this.dataFitBitAHIRef.push(userfbahi);
    }


    addDataFitBitSleep(userfbsleep: UserFBSleep) {
        return this.dataFitBitSleepRef.push(userfbsleep);
    }
 
}