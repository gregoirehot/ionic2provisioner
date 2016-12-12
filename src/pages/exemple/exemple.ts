import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-exemple',
  templateUrl: 'exemple.html'
})
export class ExemplePage {

 contactPage = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
