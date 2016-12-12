import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Generated class for the Form page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

@ViewChild('signupSlider') signupSlider: any;

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello FormPage Page');
    
  }

}
