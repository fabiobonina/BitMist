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
  user : any = {};
  public nickuser;
  public items = [];

  constructor(public navCtrl: NavController,
              public formBuilder : FormBuilder, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public osDao: OsProvider,
              public dataService: MyService) {
    this.cadastro = this.formBuilder.group({
          nome:['', Validators.required],
          email:['', Validators.required],
          senha:['', Validators.required]
    });

     
    
  }

  ngOnInit() {
    this.guard();
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
    this.dataService.getData().then((user) => {
      this.user = JSON.parse(user);
      err=> console.log(err)   
    });
    console.log(this.user);  
  }

  

    guard() {
    if (!this.dataService.isLogged())
            this.navCtrl.setRoot(LoginPage);
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
  
