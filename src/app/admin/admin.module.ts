import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminService } from './admin.service';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-ng2/main';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    OrdersComponent,
    UsersComponent,
    AnalyticsComponent,
  ],
  providers: [ AdminService ]
})
export class AdminModule { }
