import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LocalidadePage} from '../pages/localidade/localidade';
import { UsuarioPage} from '../pages/usuario/usuario';
import { UsuarioAddPage} from '../pages/usuario-add/usuario-add';
import { OsSolicitacaoPage} from '../pages/os-solicitacao/os-solicitacao';
import { OsRetornoPage} from '../pages/os-retorno/os-retorno';
import { OsModalPage} from '../pages/os-modal/os-modal';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserProvider} from '../providers/user-provider';
import { OsProvider} from '../providers/os-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocalidadePage,
    UsuarioPage,
    UsuarioAddPage,
    OsSolicitacaoPage,
    OsRetornoPage,
    OsModalPage,
    LoginPage,
    SignupPage

    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuarioPage,
    UsuarioAddPage,
    OsSolicitacaoPage,
    OsRetornoPage,
    OsModalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: OsProvider, useClass: OsProvider},
    {provide: UserProvider, useClass: UserProvider}
    ]
})
export class AppModule {}
