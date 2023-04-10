import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'environment';
  name = 'Get Current Url Route Demo';
  
  constructor(private router: Router){
    console.log(router.url)
    }
    
}
