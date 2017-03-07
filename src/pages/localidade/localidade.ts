import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
export class LocalidadePage {

  localidades : any[];
  filtro : string;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _local: LocalidadeProvider) {
                this.searchControl = new FormControl();
              }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LocalidadePage');
  }
  ngOnInit() {
      this.setFilteredItems();
  }*/
  ionViewDidLoad() {
 
        this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
 
        });
 
 
    }
  /*obterCurso(){
    if (this.localidades.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.localidades;
    }

    return this.localidades.filter((v) => {
      if (v.toLowerCase().inderOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }*/

  onSearchInput(){
        this.searching = true;
    }

  setFilteredItems() {
        this.localidades = this._local.filterItems(this.searchTerm);
  }

  /*getDados() {
    //retorno de Dados
    this._local.getData()
      .subscribe(
        data=> this.localidades = data,
        err=> console.log(err)
      );
  }*/

}
