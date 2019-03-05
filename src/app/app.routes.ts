import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesRouting} from './pages/pages.routes'
import {HomeComponent} from './pages/index';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
     
];

@NgModule({
    imports: [RouterModule.forRoot(routes),PagesRouting],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [ HomeComponent
    ];

export const AppRouting = RouterModule.forRoot(routes, { 
        useHash: true
      });