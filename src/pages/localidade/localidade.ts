import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocalidadeProvider } from '../../providers/localidade-provider';
/*
  Generated class for the Localidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-localidade',
  templateUrl: 'localidade.html'
})
export class LocalidadePage implements OnInit {

  localidade : any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _local: LocalidadeProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalidadePage');
  }
  ngOnInit() {
    this.getDados();
  }

  getDados() {
    //retorno de Dados
    this._local.getData()
      .subscribe(
        data=> this.localidade = data,
        err=> console.log(err)
      );
  }

}
