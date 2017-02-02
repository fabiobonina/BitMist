import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { OsSolicitacaoPage} from '../os-solicitacao/os-solicitacao';
import { OsRetornoPage} from '../os-retorno/os-retorno';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

      solicitacao:any;
      retorno:any;

      constructor(public navCtrl: NavController) {
            this.solicitacao = OsSolicitacaoPage;
            this.retorno = OsRetornoPage;
      }

}
