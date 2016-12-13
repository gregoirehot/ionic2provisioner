import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HeaderPage } from '../pages/header/header';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ExemplePage } from '../pages/exemple/exemple';
import { ExempleFormPage } from '../pages/exempleform/exempleform';
import { TabsPage } from '../pages/tabs/tabs';

import { UsersPage } from '../pages/users/users';
import { FormPage } from '../pages/form/form';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { LocalStoragePage } from '../pages/local-storage/local-storage';

// Pages details
import {UserDetailsPage } from '../pages/user-details/user-details';

// Providers
import { GithubUsers } from '../providers/github-users';
import { AuthService } from '../providers/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HeaderPage,
    ContactPage,
    HomePage,
    ExemplePage,
    ExempleFormPage,
    TabsPage,
    UsersPage,
    UserDetailsPage,
    FormPage,
    LoginPage,
    RegisterPage,
    LocalStoragePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderPage,
    ContactPage,
    HomePage,
    ExemplePage,
    ExempleFormPage,
    TabsPage,
    UsersPage,
    UserDetailsPage,
    FormPage,
    LoginPage,
    RegisterPage,
    LocalStoragePage 
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    AuthService
    ]
})
export class AppModule {}
