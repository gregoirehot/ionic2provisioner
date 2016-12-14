import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { UsersPage } from '../pages/users/users';
import { ExemplePage } from '../pages/exemple/exemple';

import { FormPage } from '../pages/form/form';

import { LocalStoragePage } from '../pages/local-storage/local-storage';
import { SqlLocalStoragePage } from '../pages/sql-local-storage/sql-local-storage';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Form', component: FormPage }, 
      { title: 'Exemple', component: ExemplePage }, 
      { title: 'Local Storage @ionic/storage', component: LocalStoragePage }, 
      { title: 'SQL Local Storage', component: SqlLocalStoragePage }, 
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
       Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
