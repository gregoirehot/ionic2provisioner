import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LocalStorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html',
  providers: [Storage]
})
export class LocalStoragePage {
  private storage: Storage;

  constructor(public navCtrl: NavController, storage: Storage) {
    this.storage = storage;

    // set a key/value
    storage.set('name', 'Max');

    // Or to get a key/value pair
    storage.get('name').then((val) => {
      console.log('Your name is', val);
    })
  }


  setName() {
    this.storage.set('name', name);
  };

  addName(){
    this.storage.set('name', 'Tom3');
  }

  getName() {
    this.storage.get('name').then((name) => {
      console.log('Your name is', name);
    });
  };

  removeName() {
    this.storage.remove('name').then(() => {
      console.log('name has been removed');
    });
  }

  clearKeys() {
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });
  }

  ionViewDidLoad() {
    console.log('Hello LocalStoragePage Page');
  }

}
