import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public orderService: OrdersService) { }


  appName: string = 'ALICORP';

  ngOnInit() {
  }

  onSubmit() {
    console.log('this.orderService.form.value: ', this.orderService.form.value);
    let data = this.orderService.form.value;
    this.orderService.createOrder(data);
    this.orderService.form.reset();
  }

}
