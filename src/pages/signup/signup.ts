import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { HomePage } from '../home/home';
import { MyService } from './../../providers/my-service';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  usuario : any = {};

  constructor(public navCtrl: NavController,
              public http: Http,
              public navParams: NavParams,
              public dao: MyService) {}


 
    
    logout() {
      this.dao.logout();
      this.dao.getData().then((todos) => {
        if(!JSON.parse(todos)){
          this.navCtrl.setRoot(LoginPage);
        }
        this.usuario = JSON.parse(todos);
        err=> console.log(err)   
    });

    console.log(this.usuario); 
    
  }

}
