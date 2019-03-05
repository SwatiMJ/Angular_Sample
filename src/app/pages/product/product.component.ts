
import { Component,OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

import {Product} from '../../../core/model/product.model'

//service imports
import {ProductService} from '../../../core/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
 
})
export class ProductComponent implements OnInit {
  productsObservable: Observable<any>;
  
  selectedProduct:Product;
  selectedProductCode:string;
  constructor(private _productservice:ProductService ){

  }
  ngOnInit(){

  this.productsObservable= this._productservice.getProducts();       
 
  }
  
  editProduct(product){
    debugger;
    this.selectedProduct=product;
    this.selectedProductCode=product.productCode;
    
  }

  addNewProduct(){
    this.selectedProduct=new Product();
  }

  deleteProduct(product){
    this._productservice.deleteProduct(product);
  }
  
}
