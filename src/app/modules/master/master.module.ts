import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './pages/master/master.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ],
  declarations: [MasterComponent, NavbarComponent]
})
export class MasterModule { }
