import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { IBill } from '../interfaces/bill.interface';

@Injectable()
export class BillService {

  private collection: AngularFirestoreCollection<IBill>;
  private bills$: Observable<IBill[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<IBill>('bills');
    this.bills$ = this.collection.valueChanges();
  }

  getBills(): Observable<IBill[]> {
    return this.bills$;
  }

  add(bill: IBill): void {
    this.collection.add(bill).then((docRef) => {
      this.collection.doc(docRef.id).update({
        id: docRef.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  delete(bill: IBill) {
    this.collection.doc(bill.id).delete().then(() => {
      console.log(`Deleted Bill: ${bill}`);
    })
  }

}
