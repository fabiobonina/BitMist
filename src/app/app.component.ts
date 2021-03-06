import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { LoginPage } from '../pages/login/login';
import { ClientePage } from '../pages/cliente/cliente';
import { LocalidadePage } from '../pages/localidade/localidade';
import { MyService } from '../providers/my-service';
import { SignupPage } from './../pages/signup/signup';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  home = HomePage;
  usuario = UsuarioPage;
  cliente = ClientePage;
  localidade = LocalidadePage;
  signup = SignupPage;

  

  constructor(platform: Platform, public dao: MyService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
    openPage(opcao){
    this.rootPage = opcao;
  };
  
}
