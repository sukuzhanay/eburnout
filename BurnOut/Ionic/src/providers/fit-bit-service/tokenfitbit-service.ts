import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TokenFBUser } from './../../models/tokenfbuser.model';
 
@Injectable()
export class TokenFitBitService {
 
    private tokenFBUListRef = this.db.list<TokenFBUser>('token_fitbit/');
 
    constructor(private db: AngularFireDatabase) { }
 
    getTokenList() {
        return this.tokenFBUListRef;
    }

    getTokenFitBit(email: string) {
        return this.db.list('token_fitbit/',
            referencia => referencia.orderByChild('email').equalTo(email)
        );
    }
 
    addTokenFB(tokenfb: TokenFBUser) {
        var date = new Date();
        tokenfb.created_at = date.toISOString();
        return this.tokenFBUListRef.push(tokenfb);
    }
 
    updateTokenFB(tokenfb: TokenFBUser) {
        var date = new Date();
        tokenfb.updated_at = date.toISOString();
        return this.tokenFBUListRef.update(tokenfb.key, tokenfb);
    }
 
    removeTokenFB(tokenfb: TokenFBUser) {
        return this.tokenFBUListRef.remove(tokenfb.key);
    }
    
}