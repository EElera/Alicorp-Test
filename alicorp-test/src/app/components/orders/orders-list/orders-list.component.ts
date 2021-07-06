import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersService } from 'src/app/shared/orders.service';
import { DialogOverviewExampleDialog } from '../../modal/modal.component';



@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['codeProduct', 'nameProduct', 'descriptionProduct', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private orderService: OrdersService,
    public dialog: MatDialog) {}

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

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onDelete(id);
    });
  }
}

export interface PeriodicElement {
  codeProduct: string;
  nameProduct: string;
  descriptionProduct: string;
}
