import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";

export interface userLogin {
    email : string,
    password : string
}

export interface User {
    username: string;
    email: string;
    password: string;

}




@Injectable({
    providedIn: 'root',
   })

export class UserlistService {
    userlist: User[] = [];
    loggedinuser= new EventEmitter();
    loggedInuser= new EventEmitter();
    isLoggedIn= new EventEmitter();

  constructor(private http : HttpClient) {
    this.userlist = [];
    this.http.get('https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/userlist.json')
    .pipe(map((response  ) => {
      const userlist: User[] = [];
      for(let key in response){
        if(response.hasOwnProperty(key)){
          const data = (response as any)[key];
          userlist.push(data);
        }
      }
      return userlist;
    }))
    .subscribe((response) => {
      console.log(response);
      this.userlist = response;
    });

   }
  adduser(user: User) {
    const isUser = this.userlist.find((users) => users.email === user.email );
    if(isUser != undefined){
      alert('email is already in use please select another one');
      return;
    }
    const isUser2 = this.userlist.find((users) => users.username === user.username );
    if(isUser2 != undefined){
      alert('Usernmae is already in use please select another one');
      return;
    }


    this.userlist.push(user);
    localStorage.setItem('userlist', JSON.stringify(this.userlist));

    this.http.post('https://waste-c95eb-default-rtdb.asia-southeast1.firebasedatabase.app/userlist.json', user).subscribe((response) => { 
      console.log(response);
    });
    user = {
      username: '',
      email: '',
      password: '',
  }
  

  }

  loggedin(name : string){ 
    this.loggedinuser.emit(name);

  }

  loggedemail(email : string){ 
    this.loggedInuser.emit(email);
  }

  isloggedIn() {
    return this.isLoggedIn.emit(true);
  }
  
}