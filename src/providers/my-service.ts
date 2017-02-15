import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyService {

  public local : Storage;
  mydata: any;

  constructor(public storage: Storage) {

  }
  
  getData(){
  	return this.storage.get('todos');
  }

  save(data){
  	let newData = JSON.stringify(data);
  	this.storage.set('todos', newData);
  }

}
