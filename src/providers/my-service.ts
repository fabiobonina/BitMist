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

  isLogged(): boolean {
        let todos = this.storage.get('todos');
        return !(todos === null);
  }

  logout(){
    	this.storage.remove('todos');
      //this.storage.clear();
  }

}
