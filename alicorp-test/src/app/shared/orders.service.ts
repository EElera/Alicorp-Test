import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersCollection: AngularFirestoreCollection<any>;
  orders: Observable<any[]>;
  constructor(
    private readonly angularFirestore: AngularFirestore
  ) {
    this.ordersCollection = angularFirestore.collection<any>('orders');
    this.orders = this.ordersCollection.snapshotChanges().pipe(map(
      actions => actions.map( x => {
        const data = x.payload.doc.data() as any;
        const id = x.payload.doc.id;
        return {id, ...data};
      })
    ));
  }

  form = new FormGroup({
    codeProduct: new FormControl(''),
    nameProduct: new FormControl(''),
    descriptionProduct: new FormControl(''),
    // completed: new FormControl(false)
  });

  getOrders() {
    return this.orders;
  }

  updateOrder(order: any) {
    return this.ordersCollection.doc(order.id).update(order);
  }

  deleteOrder(id: string) {
    return this.ordersCollection.doc(id).delete();
  }

  createOrder(order: any) {
    return this.ordersCollection.add(order);
  }

}

