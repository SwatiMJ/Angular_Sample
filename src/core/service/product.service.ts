import { Injectable } from '@angular/core';

import { Observable, of as staticOf } from 'rxjs';
import { Product } from '../model/product.model';

import { Products } from '../../data/mock-product';
Observable.of = staticOf;
@Injectable()
export class ProductService {

    productList: Product[] = Products;
    

    getProducts(): Observable<any> {
       
        return Observable.of(this.productList);
    }

    insertProduct(product: Product) {  
        product.productKey=product.productCode;      
        const index=this.productList.findIndex(x=>x.productKey==product.productKey);
        if (index >= 0) {
           this.updateProduct(product);

        }else{
        this.productList.push(product);}
    }

    updateProduct(product: Product) {
        const index = this.productList.findIndex(order => order.productCode === product.productCode);
        if (index >= 0) {
            this.productList.splice(index, 1);
        }
        this.productList.push(product);
    }

    deleteProduct(product: Product){           
       
        const index = this.productList.findIndex(order => order.productCode === product.productCode);
        if (index >= 0) {
            this.productList.splice(index, 1);
        }
    }

}