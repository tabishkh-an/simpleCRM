import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      {
        path: "addCustomers", component: AddCustomersComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
