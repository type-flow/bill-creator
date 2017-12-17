import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ICustomer } from '../interfaces/customer.interface';

@Injectable()
export class CustomerService {

  private collection: AngularFirestoreCollection<ICustomer>;
  private customers$: Observable<ICustomer[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<ICustomer>('customers');
    this.customers$ = this.collection.valueChanges();
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.customers$;
  }


  checkIfExists(customer: ICustomer) {
    console.log(this.afs.collection('customers', ref => ref.where('company', '==', customer.company) ))
  }


  add(customer: ICustomer): void {
    this.collection.add(customer).then((docRef) => {
      this.collection.doc(docRef.id).update({
        id: docRef.id,
        createdAt: new Date()
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  update(customer: ICustomer) {
    this.collection.doc(customer.id).update(customer).then(() => {
      console.log(`Updated Customer: ${customer}`);
    })
  }

  delete(customer: ICustomer) {
    this.collection.doc(customer.id).delete().then(() => {
      console.log(`Deleted Customer: ${customer}`);
    })
  }

}
