import { Routes, RouterModule } from '@angular/router';

import { ProductComponent,CompanyComponent,HomeComponent } from './index';
const pagesRoutes: Routes = [
    { path: 'product',component:ProductComponent,data: {title: 'Product'},
        
    } ,
    {path: 'company',component:CompanyComponent,data: {title: 'Company'} },
    { path: 'home',component:HomeComponent,data: {title: 'Home'} }  ,
   
  ];

  export const PagesRouting = RouterModule.forChild(pagesRoutes);