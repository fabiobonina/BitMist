import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { LocalidadeProvider } from '../../providers/localidade-provider';

/*
  Generated class for the OsModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-os-modal',
  templateUrl: 'os-modal.html'
})
export class OsModalPage {

  local: any;

  searchQuery;
  items;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public daoLocal: LocalidadeProvider,
              public viewCtrl: ViewController) {
                this.searchQuery = '';
                this.initializeItems();
              }

  cancel() {
    this.viewCtrl.dismiss();
  }

  salvar() {
    //this.viewCtrl.dismiss(this.lancamento);
  }

  initializeItems() {
  this.items = [
      {"name":"Moby Dick","position":"Big ass whale"},
      {"name":"Jaws","position":"Fish with anger issues"}
  ];
}

getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();
  // set q to the value of the searchbar
  var q = searchbar.value;
  // if the value is an empty string don't filter the items
  if (q.trim() == '') {
    return;
  }

   this.items = this.items.filter((v) => {

    if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
       return true;
      }

      return false;
    })

 }


}
