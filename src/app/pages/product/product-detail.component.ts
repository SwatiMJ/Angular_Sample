import { Component, OnInit ,Input , SimpleChange, SimpleChanges} from '@angular/core';
import { Observable } from "rxjs/Rx"
//models import
import {Product} from '../../../core/model/product.model';
import {Team} from '../../../core/model/team.model';
import {Teams} from '../../../data/mock-team';
//service imports
import {ProductService} from '../../../core/service/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html'    
  })

  export class ProductDetailComponent implements OnInit{
    @Input() inputProduct: Product;
    private _selectedProduct: Product;   
    private productName:string;
    private productKey:string;
    private productCode:string;
    private productStartDate:Date;
   
    private productTeam:string;

    teamList:Team[]=Teams;

    ngOnChanges(changes: SimpleChanges) {        
      const productID: SimpleChange = changes.inputProduct;   
      this._selectedProduct = productID.currentValue;
      this.productCode=this._selectedProduct.productCode;
      this.productName=this._selectedProduct.productName;
      this.productStartDate=new Date(this._selectedProduct.productStartDate);     
    
      this.productTeam=this._selectedProduct.productTeam;
     
    }

    constructor(private _productService:ProductService ){
     
    }
    checkForSelect(teamCode){
      if(this.productTeam==teamCode){
        return true;
      }
      return false;
    }
    ngOnInit(){    

    }

    saveProduct(){       
      let p : Product=new Product();
      p.productCode=this.productCode;
      p.productName=this.productName;
      p.productStartDate=this.productStartDate;
     
      p.productTeam=this.productTeam;
      if(this.productKey=="" || this.productKey==undefined){
      this._productService.insertProduct(p);
    }else{
    
      this._productService.updateProduct(p);
      }
      
    }
    
  }