import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from '../../admin-components/product/product.component';
import { ProductListComponent } from '../../admin-components/product-list/product-list.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CategoriesComponent } from '../../admin-components/categories/categories.component';
import { VendorComponent } from '../../admin-components/vendor/vendor.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    CategoriesComponent,
    VendorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ]
})

export class AdminLayoutModule { }
