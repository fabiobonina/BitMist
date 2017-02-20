import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ClienteProvider } from '../../providers/cliente-provider';
/*
  Generated class for the Cliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html'
})
export class ClientePage implements OnInit {

  clientes : any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service : ClienteProvider,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  ngOnInit() {
            this.getDados();
      }

      getDados() {
      //retorno de Dados
      this.service.getData()
            .subscribe(
                  data=> this.clientes = data,
                  err=> console.log(err)
            );
      }

}
