import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AddLoansComponent } from './add-loans/add-loans.component'
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAccessGuard } from './admin-access.guard';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { UnsavedGuard } from './unsaved.guard';
import { LoansComponent } from './loans/loans.component';
import { AccountInfoGuard } from './account-info.guard';

const routes: Routes = [
  {path:"", redirectTo: "admin", pathMatch:"full"},
  {
    path: "admin",
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: "",
        component: AdminComponent,
      },
      {
        path: "",
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: "manage", component: AdminManageComponent },
          { path: "edit", component: AdminEditComponent },
          { path: "delete", component: AdminDeleteComponent },
        ]
      }
    ]
  },
  { path: "add-loans", component: AddLoansComponent },
  {
    path: "loans",
    component: LoansComponent,
    resolve: {
      data: AccountInfoGuard
    }
  },
  { path: "loan-types", component: LoanTypesComponent },
  { path: "clients", component: ClientsComponent, canActivate: [AuthGuard] },
  {
    path: "search",
    component: SearchComponent,
    canDeactivate: [UnsavedGuard]
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'preferences',
    canLoad: [PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
