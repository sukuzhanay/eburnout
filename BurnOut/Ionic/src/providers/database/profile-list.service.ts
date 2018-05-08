import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './../../models/user.model';
 
@Injectable()
export class ProfileListService {
 
    private profileListRef = this.db.list<User>('users/');
 
    constructor(private db: AngularFireDatabase) { }
 
    getProfileList() {
        return this.profileListRef;
    }
 
    addUser(user: User) {
        return this.profileListRef.push(user);
    }
 
    updateUser(user: User) {
        return this.profileListRef.update(user.key, user);
    }
 
    removeUser(user: User) {
        return this.profileListRef.remove(user.key);
    }
    
}