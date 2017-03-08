import { Directive } from '@angular/core';
import {NavController} from "ionic-angular";

import { LoginPage } from "../../pages/login/login";
import { MyService } from "../../providers/my-service";


/*
  Generated class for the LoginGuard directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[guard]' // Attribute selector
})
export class LoginGuard {

  constructor(private loginService: MyService, private navCtrl: NavController) {
        if (!loginService.isLogged())
            this.navCtrl.setRoot(LoginPage);
    }

}
