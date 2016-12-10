import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-movies-form',
  templateUrl: 'moviesform.html'
})
export class MoviesFormPage implements OnInit{

      contact:string = "Contactez-nous";
    email:string = "mail@mail.com";
    movieTitle:string = "titre";

    features = [
        {
            description : "description 1"
        },
        {
            description : "description 2"
        },
        {
            description : "description 3"
        }
    ]

    formGroupMovie: FormGroup;

  constructor(public navCtrl: FormBuilder) {

  }

      ngOnInit(){
        // this.formGroupMovie = new FormGroup({
        //     movieTitle: new FormControl(),
        //     movieDirector: new FormControl()
        // });

        this.formGroupMovie = this.navCtrl.group({
            movieTitle : ['', Validators.required],
            movieDirector : ['', Validators.required]
        });

        this.formGroupMovie.setValue({
            movieTitle : 'Titre test',
            movieDirector : 'James Director'
        });
    }

     onMovieSubmit(){
        console.log(this.formGroupMovie);
    }


    onClick(evt:any, userName:string){
        console.log(evt, userName);
    }

}
