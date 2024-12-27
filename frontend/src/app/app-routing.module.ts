import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './components/products/products-list/products-list.component';
import {CustomersListComponent} from './components/customers/customers-list/customers-list.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }  // R
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
