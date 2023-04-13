import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserlistService, userLogin } from '../services/userlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;

  loginObj : userLogin={
    email:'',
    password:'',
  };
  constructor(private userListservice : UserlistService,
    private router: Router, private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    
  }

  onLogin(){ 
    this.loginObj.email = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;
    const isUser = this.userListservice.userlist.find((user) => user.email === this.loginObj.email && user.password === this.loginObj.password);
    console.log(isUser);
    if(isUser != undefined){
      alert('Login Successfull');
      console.log(isUser.username);
      this.userListservice.loggedin(isUser.username);
      this.userListservice.loggedemail(isUser.email);
      this.userListservice.isloggedIn();
      this.router.navigate(['/']);
      
    } else {
      alert('Login Failed');
      this.loginForm.reset();
    }

   
    


  }

}
