import { Injectable } from '@angular/core';

import { Observable, of as staticOf } from 'rxjs';
import { Product } from '../model/product.model';

import { Products } from '../../data/mock-product';
Observable.of = staticOf;
@Injectable()
export class ProductService {

    productList: Product[] = Products;
    

    getProducts(): Observable<any> {
        debugger;
        return Observable.of(this.productList);
    }

    insertProduct(product: Product) {        
        //this.productList.push(product);
    }

    updateProduct(product: Product) {
        
    }

    deleteProduct(product: Product){           
       
        const index = this.productList.findIndex(order => order.productCode === product.productCode);
        if (index >= 0) {
            this.productList.splice(index, 1);
        }
    }

}