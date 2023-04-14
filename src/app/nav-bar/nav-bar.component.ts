import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { UserlistService } from '../services/userlist.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 isloggedin : boolean = false;
  constructor(
    private router:Router, private userlistservice :UserlistService
  ) {

    userlistservice.isLoggedIn.subscribe ( response=> {
      this.isloggedin = true;
    } );
  }
    username : string = '';
    flag : boolean = false;
  ngOnInit(): void {
    console.log(this.router.url)
    console.log(window.location.href)
    this.userlistservice.loggedinuser.subscribe ( response=> {
      this.username = response;
      this.flag = true;
    });

  }

  

}
