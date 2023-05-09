import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsInfo: Array<Iproducts> = [];
  slectedProductid !: number;
  constructor(
    private _productsService: ProductsService,
    private _router : Router ) { }

  ngOnInit(): void {
    this.productsInfo = this._productsService.getAllProducts();
    this.slectedProductid = this.productsInfo[0].pid
  }
  onUserClick(){
    this._router.navigate(['/users'])
  }
}
