import { Routes } from '@angular/router';
import { ProductListComponent } from '../../admin-components/product-list/product-list.component';
import { ProductComponent } from '../../admin-components/product/product.component';
import { CategoriesComponent } from '../../admin-components/categories/categories.component';
import { VendorComponent } from '../../admin-components/vendor/vendor.component';
import { UsersComponent } from 'src/app/admin-components/users/users.component';
import { OrderListComponent } from 'src/app/admin-components/order-list/order-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'product' ,  component: ProductComponent },
    { path: 'product-list', component: ProductListComponent},
    { path: 'categories', component: CategoriesComponent},
    { path: 'vendor' , component: VendorComponent},
    { path: 'users' , component: UsersComponent},
    { path: 'order-list' , component: OrderListComponent},
];
