import { Component } from '@angular/core';
import { OrdersService } from 'src/app/shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor(public orderService: OrdersService) { }

  appName: string = 'ALICORP';

  onSubmit() {
    let data = this.orderService.form.value;
    this.orderService.createOrder(data);
    this.orderService.form.reset();
  }

}
