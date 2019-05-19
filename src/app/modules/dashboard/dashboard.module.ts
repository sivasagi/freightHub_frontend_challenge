import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { ShipmentDetailsComponent } from './components/shipment-details/shipment-details.component';
import { EditShipmentDetailsComponent } from './components/edit-shipment-details/edit-shipment-details.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    ShipmentsComponent,
    ShipmentDetailsComponent,
    EditShipmentDetailsComponent
  ],
  entryComponents: [
    EditShipmentDetailsComponent
  ],
})
export class DashboardModule { }
