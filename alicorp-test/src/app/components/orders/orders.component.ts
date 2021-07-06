import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  products = [
    {
      code: 1,
      name: 'ABC',
      description: 'ABCABC',
    },
    {
      code: 2,
      name: 'QWE',
      description: 'QWEQWE',
    },
    {
      code: 3,
      name: 'ASD',
      description: 'ASDASD',
    },
    {
      code: 4,
      name: 'ZXC',
      description: 'ZXCZXC',
    },
    {
      code: 5,
      name: 'CVB',
      description: 'CVBCVB',
    }
  ]

  appName: string = 'ALICORP';

  ngOnInit(): void {
  }

}
