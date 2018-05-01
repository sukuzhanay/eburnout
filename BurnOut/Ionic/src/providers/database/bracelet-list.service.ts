import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Bracelet } from './../../models/bracelet.model';
 
@Injectable()
export class BraceletListService {
 
    private braceletListRef = this.db.list<Bracelet>('/bracelets');
 
    constructor(private db: AngularFireDatabase) { }
 
    getBraceletList() {
        return this.braceletListRef;
    }
 
    addBracelet(bracelet: Bracelet) {
        return this.braceletListRef.push(bracelet);
    }
 
    updateBracelet(bracelet: Bracelet) {
        return this.braceletListRef.update(bracelet.key, bracelet);
    }
 
    removeBracelet(bracelet: Bracelet) {
        return this.braceletListRef.remove(bracelet.key);
    }
}