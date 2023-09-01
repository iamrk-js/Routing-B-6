import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ICanDeactivateComp } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactivateGuard implements CanDeactivate<ICanDeactivateComp> {
  canDeactivate(
    component: ICanDeactivateComp,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(component);

    return component.canDeactive()
  }

}
