import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Validators, FormBuilder } from '@angular/forms';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user-provider';
import { MyService } from '../../providers/my-service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  login : any = {};

  constructor(public navCtrl: NavController,
              public http: Http,
              public navParams: NavParams,
              public formBuilder : FormBuilder,
              public service: UserProvider,
              private alert :AlertController,
              private loading : LoadingController,
              private myservice: MyService) {
                this.login = {};
                this.login.username = "";
                this.login.password = "";
              }

  logar() {
    //console.log(this.data);
    //console.log(this.data.username);
    this.service.loginData(this.login)
      .subscribe(
                data=>{console.log(data);
                if(data.permissao === true){
                  this.myservice.save(data);
                  this.navCtrl.setRoot(HomePage);
                }
                       //this.navCtrl.setRoot(HomePage);     
                },
                err=>console.log(err)
    );
  }

  login2(){
    let username = this.login.username;
    let password = this.login.password;
    let data = JSON.stringify({username, password});
    let link = "http://localhost/codephp/skyhub/api/apiLogin.php";

    this.http.post(link,data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000
            });
            loader.present();
          this.navCtrl.setRoot(HomePage);
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
  }
  

  
 
  launchSignup(){
    this.navCtrl.push(SignupPage);
  }

}
