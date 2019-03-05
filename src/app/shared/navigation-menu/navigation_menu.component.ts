import { Component,OnInit } from '@angular/core';
import { Router,Routes, RouterModule,  } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navigation_menu.component.html'
 
})
export class NavigationMenuComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {

  }
  goToRoute(routeUrl: string) {
      this.router.navigate([routeUrl]);
  }
}
