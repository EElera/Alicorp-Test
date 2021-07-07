import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { OrdersService } from 'src/app/shared/orders.service';
import { environment } from 'src/environments/environment';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let service: OrdersService;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    service = TestBed.get(OrdersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSubmit', () => {
    it('Debe crear una orden', () => {
      spyOn(service, 'createOrder');
      component.orderService.form.setValue({
        codeProduct: '001',
        nameProduct: 'Prueba',
        descriptionProduct: 'Prueba prueba'
      })
      component.onSubmit();
      expect(service.createOrder).toHaveBeenCalled();
      expect(service.createOrder).toBeTruthy();
    });
  });
});
