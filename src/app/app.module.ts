import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { UsuarioPage} from '../pages/usuario/usuario';
import { UsuarioAddPage} from '../pages/usuario-add/usuario-add';
import { OsSolicitacaoPage} from '../pages/os-solicitacao/os-solicitacao';
import { OsRetornoPage} from '../pages/os-retorno/os-retorno';
import { OsModalPage} from '../pages/os-modal/os-modal';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ClientePage } from '../pages/cliente/cliente';
import { LocalidadePage} from '../pages/localidade/localidade';

import { UserProvider} from '../providers/user-provider';
import { ClienteProvider} from '../providers/cliente-provider';
import { LocalidadeProvider} from '../providers/localidade-provider';
import { OsProvider} from '../providers/os-provider';
import { MyService } from '../providers/my-service';
import { LoginGuard } from "../components/login-guard/login-guard";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    LocalidadePage,
    UsuarioPage,
    UsuarioAddPage,
    OsSolicitacaoPage,
    OsRetornoPage,
    OsModalPage,
    LoginPage,
    SignupPage,
    LoginGuard
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    LocalidadePage,
    UsuarioPage,
    UsuarioAddPage,
    OsSolicitacaoPage,
    OsRetornoPage,
    OsModalPage,
    LoginPage,
    SignupPage
  ],
  providers: [ Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: OsProvider, useClass: OsProvider},
    {provide: ClienteProvider, useClass: ClienteProvider},
    {provide: LocalidadeProvider, useClass: LocalidadeProvider},
    {provide: UserProvider, useClass: UserProvider},
    {provide: MyService, useClass: MyService}
    ]
})
export class AppModule {}
