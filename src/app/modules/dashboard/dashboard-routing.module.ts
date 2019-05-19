import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { ShipmentDetailsComponent } from './components/shipment-details/shipment-details.component';

const routes: Routes = [
  { path: '', component: ShipmentsComponent },
  { path: 'details/:shipmentId', component: ShipmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
