import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class ProfileListService {
 
    private profileListRef = this.db.list<any>('profile/');
 
    constructor(private db: AngularFireDatabase) { }
 
    getProfileList() {
        return this.profileListRef;
    }
 
    
}