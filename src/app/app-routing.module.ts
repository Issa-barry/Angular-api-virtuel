import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path:'', component: ProductsListComponent},
  {path:'product-list', component: ProductsListComponent},
  {path:'product-add', component:ProductAddComponent},
  {path:'product-detail/:id', component:ProductDetailComponent},
  {path:'product-edit/:id', component:ProductEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
