import { Component, OnInit } from '@angular/core';
import { Authentication } from '../authentication';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userObj : Authentication = {userName : '',passWord : ''};
  status : string;
  style : string;

  myMap = new Map<string,string>();

  

  
  //let myMap = new Map();
  //myMap.set("lokeshwar",3);


  constructor() { }

  ngOnInit() {
  }

  authenticate(){
    // if(this.userObj.userName === 'lokeshwar' && this.userObj.passWord === 'tabjula')
    // {
    //   this.myMap.set("lokeshwar","tabjula");
    //   console.log(this.myMap.has("lokeshwar"));
    //   this.status = 'valid user';
    // }
    // else{
    //   this.status = 'invalid user';

    // }

    if(this.myMap.has(this.userObj.userName))
    {
      if((this.myMap.get(this.userObj.userName))===(this.userObj.passWord))
      {
        this.status="valid user";
      }
      else
      {
        this.status="invalid user";
      }
    }
    else{
      this.style="disabled";
      this.status="Register now!";
    }
  }

  register(){
    this.myMap.set(this.userObj.userName,this.userObj.passWord);
  }

}
