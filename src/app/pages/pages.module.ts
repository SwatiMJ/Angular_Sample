
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import {ProductService} from '../../core/service/product.service'; 
import {
    HomeComponent,ProductComponent,CompanyComponent,ProductDetailComponent
   } from './index';

   

@NgModule({    
    declarations: [
        HomeComponent,ProductComponent,CompanyComponent,ProductDetailComponent
    ]
    ,providers: [
        ProductService 
    ]
    ,exports:[
        HomeComponent,ProductComponent,CompanyComponent,FormsModule,CommonModule
    ],
    imports: [
        RouterModule,FormsModule,CommonModule
    ]
})
export class PagesModule{
    static forRoot(): ModuleWithProviders {        
        return {
            ngModule: PagesModule
        };
    }
}
//export=PagesModule