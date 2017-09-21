import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClienteProvider {

  
      api : string = 'http://localhost:83/codephp/skyhub/api/';

  constructor(public http: Http) {}
      getData() {
            return this.http.get(this.api + 'apiClienteList.php').map(res=>res.json())
      }

      postData(parans) {
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiClienteAdd.php", parans, {
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

      //recuperação de credencial
      loginData(logar){
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiLogin.php", logar,{
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
                  
            );
      }
      
      deleteData(id) {
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiClienteDel.php", id, {
                  headers:headers
                  }).map(
                  (res:Response) => {return res.json();}
            );
      }
        updateData(data) {
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiClienteEdt.php", data, {
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
            );
      }

}
