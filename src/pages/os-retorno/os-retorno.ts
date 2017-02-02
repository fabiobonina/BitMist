import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { OsModalPage} from '../os-modal/os-modal';
import { OsProvider } from '../../providers/os-provider';

/*
  Generated class for the OsRetorno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-os-retorno',
  templateUrl: 'os-retorno.html'
})
export class OsRetornoPage implements OnInit{

  cadastro : any = {};
  osLists : any[];

  constructor(public navCtrl: NavController,
              public formBuilder : FormBuilder, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public osDao: OsProvider) {
                this.cadastro = this.formBuilder.group({
                  nome:['', Validators.required],
                  email:['', Validators.required],
                  senha:['', Validators.required]
            });
              }

  ngOnInit() {
            this.getDados();
  }

  getDados() {
  //retorno de Dados
  this.osDao.getData()
        .subscribe(
              data=> this.osLists = data,
              err=> console.log(err)
        );
  }

}
