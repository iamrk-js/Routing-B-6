import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { EditProductComponent } from "./shared/components/products/edit-product/edit-product.component";
import { EdituserComponent } from "./shared/components/users/edituser/edituser.component";


const routes: Routes = [

  {
    path: '', component: DashboardComponent        // localhost:4200
  },
  {
    path: "users", component: UsersComponent  // locahost:4200/users
  },
  {
    path: "users/:userId", component: UserComponent  // locahost:4200/users
  },
  {
    path : "users/:userId/edit" , component : EdituserComponent
  },
  {
    path: "products", component: ProductsComponent  // localhost:4200/products
  },
  {
    path: "products/:productsId", component: ProductComponent
  },
  {
    path: "products/:productsId/edit", component: EditProductComponent
  }
  // { path: "**", redirectTo: 'pagenotfound' },
  // { path: 'pagenotfound', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}