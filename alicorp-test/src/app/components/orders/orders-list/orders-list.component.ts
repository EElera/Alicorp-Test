import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersService } from 'src/app/shared/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'codeProduct',
    'nameProduct',
    'descriptionProduct',
    'actions'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.getAllOrders();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllOrders(){
    this.orderService.getOrders().subscribe(resp => {
      this.dataSource.data = resp;
    });
  }

  onDelete(id: string) {
    this.orderService.deleteOrder(id);
  }

}

export interface PeriodicElement {
  codeProduct: string;
  nameProduct: string;
  descriptionProduct: string;
}

