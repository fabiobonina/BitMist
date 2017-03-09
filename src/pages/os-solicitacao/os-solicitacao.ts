import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { OsModalPage} from '../os-modal/os-modal';
import { OsProvider } from '../../providers/os-provider';
import { MyService } from '../../providers/my-service';
import { LoginPage } from "../login/login";
/*
  Generated class for the OsSolicitacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-os-solicitacao',
  templateUrl: 'os-solicitacao.html'
})
export class OsSolicitacaoPage implements OnInit{

  cadastro : any = {};
  osLists : any[];
  usuario : any = {};
  public items = [];

  constructor(public navCtrl: NavController,
              public formBuilder : FormBuilder, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public osDao: OsProvider,
              public dataService: MyService) {

  }

  ngOnInit() {

    this.getDados();
    this.getUser();
  }

  getDados() {
  //retorno de Dados
  this.osDao.getData()
        .subscribe(
              data=> this.osLists = data,
              err=> console.log(err)
        );
        
  }
  getUser() {
    if (!this.dataService.isLogged()){
      this.navCtrl.setRoot(LoginPage);
    }        
    this.dataService.getData().then((todos) => {
      this.usuario = JSON.parse(todos);
      err=> console.log(err)
  });

    console.log(this.usuario); 
    
  }

  



  

  /*insert() {
    let modal = this.modalCtrl.create(OsModalPage);
    modal.onDidDismiss(data => {
      if (data) {
        this.dao.insert(data, (lancamento) => {
          this.updateMonth(new Date(lancamento.data));
          Toast.showShortBottom("Lançamento Inserido Com Sucesso !").subscribe(
            toast => {
              console.log(toast);
            });
        });
      }
    });
    modal.present();
  }*/


}
  
