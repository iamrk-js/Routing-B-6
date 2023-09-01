import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICanDeactivateComp, Iproducts, Ipstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, ICanDeactivateComp {
  productId !: number;
  selectedProduct !: Iproducts;
  canEdit: number = 0;
  @ViewChild("pname") pname !: ElementRef<HTMLInputElement>;
  @ViewChild("pstatus") pstatus !: ElementRef<HTMLSelectElement>;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productsId'];
    this.selectedProduct = this._productsService.getSingleProd(this.productId)!
    this._route.queryParams
      .subscribe((quryParams: Params) => {
        console.log(quryParams)
        this.canEdit = +quryParams['canEdit']
      })
  }

  onProdUpdate(pname: HTMLInputElement, pstatus: HTMLSelectElement) {
    let obj: Iproducts = {
      pname: pname.value,
      pstatus: pstatus.value as Ipstatus,
      pid: this.productId,
      canReturn: this.selectedProduct.canReturn
    }
    this._productsService.updateProduct(obj);
    this._router.navigate(['products', this.productId])
  }

  canDeactive(): boolean | Promise<boolean> | Observable<boolean> {
    if ((this.selectedProduct.pname !== this.pname.nativeElement.value)
      || (this.selectedProduct.pstatus !== this.pstatus.nativeElement.value)) {
      return confirm(`Do you Want discard the changes`)
    } else {
      return true
    }

  }

}
