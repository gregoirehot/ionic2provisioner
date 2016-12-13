import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Header page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'header-component',
  templateUrl: 'header.html'
})
export class HeaderPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HeaderPage Page');
  }

}
