import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShipmentDetailsComponent } from './edit-shipment-details.component';

describe('EditShipmentDetailsComponent', () => {
  let component: EditShipmentDetailsComponent;
  let fixture: ComponentFixture<EditShipmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShipmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
