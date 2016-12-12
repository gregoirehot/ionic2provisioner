import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Validators
import { AgeValidator } from  '../../validators/age';
import { UsernameValidator } from  '../../validators/username';

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

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

    this.slideOneForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        age: ['', AgeValidator.isValid]
    });
 
    this.slideTwoForm = formBuilder.group({
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
        privacy: ['', Validators.required],
        bio: ['']
    });

  }


  next() {
    this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

  save(){
 
    this.submitAttempt = true;
 
    if(!this.slideOneForm.valid){
        this.signupSlider.slideTo(0);
    } 
    else if(!this.slideTwoForm.valid){
        this.signupSlider.slideTo(1);
    }
    else {
        console.log("success!")
        console.log(this.slideOneForm.value);
        console.log(this.slideTwoForm.value);
    }
 
}


  ionViewDidLoad() {
    console.log('Hello FormPage Page');

  }

}
