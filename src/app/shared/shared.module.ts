import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NavigationMenuComponent} from '../shared/index'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";

@NgModule({
 imports:      [ CommonModule,RouterModule],
 declarations: [  NavigationMenuComponent],
 exports:      [ NavigationMenuComponent,CommonModule,NgbModule,RouterModule ],
 providers:[ NavigationMenuComponent]
})
export class SharedModule { }