import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // we have make a API call 
  prodcutsArray: Array<Iproducts> = [
    {
      pname: "SamSung 31",
      pid: 1,
      pstatus: "In-Progress",
      canReturn : 1
    },
    {
      pname: "SamSung 70 TV",
      pid: 2,
      pstatus: "Dispatched",
      canReturn : 1
    },
    {
      pname: "Iphone",
      pid: 3,
      pstatus: "Delivered",
      canReturn : 0
    }
  ]
  constructor() { }

  getAllProducts() {
    return this.prodcutsArray;
  }

  getSingleProd(id: number) {
    return this.prodcutsArray.find(prod => prod.pid === id)
  }

  updateProduct(pObj : Iproducts){
    this.prodcutsArray.forEach(prod => {
      if(prod.pid === pObj.pid){
        prod.pname = pObj.pname;
        prod.pstatus = pObj.pstatus;
      }
    })
  }
}
