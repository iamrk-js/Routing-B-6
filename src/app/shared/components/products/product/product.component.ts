import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from '../../../model/products';
import { ProductsService } from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId !: number;
  productObject !: Iproducts;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService) {
    this._route.data.subscribe(res => {
      this.productObject = res['product']
      console.log(res);
    })
  }

  ngOnInit(): void {

    // this._route.params
    //   .subscribe((params : Params) => {
    //       this.productId = +params['productsId']
    //       this.productObject = this._productsService.getSingleProd(this.productId)!;
    //       console.log(`ngOnInIt called`,this.productId);
    //   })
  }
  goToEditProd() {
    // this._router.navigate(['/products', this.productId, 'edit'], {
    //   queryParamsHandling : "preserve"
    // })
    this._router.navigate(['edit'], {
      queryParamsHandling: "preserve",
      relativeTo: this._route
    })
  }
}

// baseUrl/products/1/edit  >> http://localhost:4200

// currentUrl/ >> http://localhost:4200/products/3/edit