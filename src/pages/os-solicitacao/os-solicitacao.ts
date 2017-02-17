import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { OsModalPage} from '../os-modal/os-modal';
import { OsProvider } from '../../providers/os-provider';
import { MyService } from '../../providers/my-service';
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
  nickuser;
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
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
        
      }
      console.log(this.items);
      //this.nickuser=> this.items.nome;
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
