import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class MyService {

  constructor(public storage: Storage,
              public http: Http) {
    
  }

  getData(){
  	return this.storage.get('todos');
  }

  save(data){
  	let newData = JSON.stringify(data);
  	this.storage.set('todos', newData);
  }

}
