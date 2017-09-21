import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalidadeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalidadeProvider {

  api : string = 'http://localhost:83/codephp/skyhub/api/';

  localidades : any[];
  
  constructor(public http: Http) {
    console.log('Hello LocalidadeProvider Provider');
  }

  getData() {
    return this.http.get(this.api + 'apiLocalList.php').map(res=>res.json())
  }

  filterItems(searchTerm){
    this.getData().subscribe(
        data=> this.localidades = data,
        err=> console.log(err)
      );
    return this.localidades.filter((item) => {
        return item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
