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
import { AuthGaurd } from "./shared/services/auth.guard";
import { LoginComponent } from "./shared/components/login/login.component";
import { UserroleGuard } from "./shared/services/userrole.guard";
import { ProductResolverService } from "./shared/services/productResolver.service";
import { ProductDeactivateGuard } from "./shared/services/product-deactivate.guard";


const routes: Routes = [

  {
    path: '', component: LoginComponent,
    title: "Login",       // localhost:4200
  },
  {
    path: 'home', component: DashboardComponent,
    title: "Dashboard",       // localhost:4200/home
  },
  {
    path: "users", component: UsersComponent,
    title: "Users",
    canActivate: [AuthGaurd],
    children: [
      {
        path: ":userId", component: UserComponent
      },
      {
        path: ":userId/edit", component: EdituserComponent
      }
    ]
  },
  {
    path: "products", component: ProductsComponent,
    title: "Products",
    canActivate: [UserroleGuard],
    data: {
      userRole: "admin"
    },
    canActivateChild: [AuthGaurd],
    children: [
      {
        path: ":productsId", component: ProductComponent,
        resolve: { product: ProductResolverService }
      },
      {
        path: ":productsId/edit", component: EditProductComponent,
        canDeactivate: [ProductDeactivateGuard]
      }
    ]
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent, data: {
      msg: "Page Not Found !!!"
    }
  },
  {
    path: "**", redirectTo: "page-not-found"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}