import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NomesreaisPage } from '../pages/nomesreais/nomesreais';
import { NomesreaismasculinosPage } from '../pages/nomesreaismasculinos/nomesreaismasculinos';
import { NomesreaisfemininosPage } from '../pages/nomesreaisfemininos/nomesreaisfemininos';
import { NomesfantasiososPage } from '../pages/nomesfantasiosos/nomesfantasiosos';
import { NomesfantasiososfemininosPage } from '../pages/nomesfantasiososfemininos/nomesfantasiososfemininos';
import { NomesfantasiososmasculinosPage } from '../pages/nomesfantasiososmasculinos/nomesfantasiososmasculinos';
import { NicknamesPage } from '../pages/nicknames/nicknames';
import { EmpresasnegociosPage } from '../pages/empresasnegocios/empresasnegocios';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NomesreaisPage,
    NomesreaismasculinosPage,
    NomesreaisfemininosPage,
    NomesfantasiososPage,
    NomesfantasiososfemininosPage,
    NomesfantasiososmasculinosPage,
    NicknamesPage,
    EmpresasnegociosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NomesreaisPage,
    NomesreaismasculinosPage,
    NomesreaisfemininosPage,
    NomesfantasiososPage,
    NomesfantasiososfemininosPage,
    NomesfantasiososmasculinosPage,
    NicknamesPage,
    EmpresasnegociosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
