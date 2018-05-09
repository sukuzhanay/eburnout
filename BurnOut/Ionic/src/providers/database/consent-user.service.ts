import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Consent } from './../../models/consent.model';
 
@Injectable()
export class ConsentUserService {
 
    private consentListRef = this.db.list<Consent>('consent/');
 
    constructor(private db: AngularFireDatabase) { }
 
    getConsentUser(email) {

        return this.db.list('/consent/',
            referencia => referencia.orderByChild('email').equalTo(email)
        ).valueChanges();

    }

    addConsent(consent: Consent) {
        return this.consentListRef.push(consent);
    }
 
}