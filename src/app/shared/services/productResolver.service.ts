import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproducts } from "../model/products";
import { Observable } from "rxjs";
import { ProductsService } from "./products.service";


@Injectable({
    providedIn : "root"
})
export class ProductResolverService implements Resolve<Iproducts> {

    constructor(private _productService : ProductsService){}
    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Iproducts | Observable<Iproducts> | Promise<Iproducts> {
        let getId = +route.params['productsId']
        return this._productService.getSingleProd(getId)!
    }
}