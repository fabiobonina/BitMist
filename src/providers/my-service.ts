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

  constructor(public http: Http) {
    this.local = new Storage()
  }
  postLogin(data){
    let link = "http://textkhmer.com/api/securelogin.php";
      return this.http.post(link, data)
        .map(data => {
          this.mydata = data;
          console.log("data")
        }, error =>{
          console.log(error)
        })
  }
  /*loginData(logar){
            let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "apiLogin.php", logar,{
                  headers:headers,
                  method:"POST"
            }).map(
                  (res:Response) => {return res.json();}
                  
            )
            if(Response.permissao === false){
                        alert(data?data.erro: "Não foi possivel fazer o login. Tente novamente mais tarde.")
                  }
                  if(data.permissao === true){
                       
                  }
      }*/

}
