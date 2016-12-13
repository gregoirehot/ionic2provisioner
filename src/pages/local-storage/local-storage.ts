import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LocalStorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html'
})
export class LocalStoragePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LocalStoragePage Page');
  }

}
