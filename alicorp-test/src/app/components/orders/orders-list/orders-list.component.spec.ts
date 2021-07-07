import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { MatPaginator } from '@angular/material/paginator';
import { OrdersService } from 'src/app/shared/orders.service';
import { environment } from 'src/environments/environment';

import { OrdersListComponent } from './orders-list.component';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let service: OrdersService;
  let fixture: ComponentFixture<OrdersListComponent>;

  let paginador: MatPaginator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    service = TestBed.get(OrdersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#OnInit', () => {
    it('Debe llamar a getAllOrders', () => {
      spyOn(component, 'getAllOrders');
      component.ngOnInit();
      expect(component.getAllOrders).toHaveBeenCalled();
    });
  });

  describe('#ngAfterViewInit', () => {
    it('Debe setear el paginador', () => {
      component.ngAfterViewInit();
      expect(component.dataSource.paginator).toEqual(paginador);
    });
  });

  describe('#getAllOrders', () => {
    it('Debe setear dataSource con data de subscribe', () => {
      component.getAllOrders();
      service.getOrders().subscribe((val) => {
        expect(component.dataSource.data).toEqual(val);
      });
    });
  });

  describe('#onDelete', () => {
    it('Debe eliminar una orden', () => {
      spyOn(service, 'deleteOrder');
      const x = '1';
      component.onDelete(x);
      expect(service.deleteOrder).toHaveBeenCalled();
      expect(service.deleteOrder).toBeTruthy();
    });
  });

  
});
