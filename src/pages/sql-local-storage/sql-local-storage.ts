import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Providers
import { DatabaseService } from "../../providers";

/*
  Generated class for the SqlLocalStorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sql-local-storage',
  templateUrl: 'sql-local-storage.html'
})
export class SqlLocalStoragePage {

  addMessage: string = '';
  getMessage: string = '';
  removeMessage: string = '';
  getAllMessage: string = '';
  removeAllMessage: string = '';

  constructor(public navCtrl: NavController, public databaseService: DatabaseService) { }

  add(item: string, quantity: number) {
    this.databaseService.addShoppingItem(item, quantity)
      .then(success => {
        if (success) {
          this.addMessage = item + ' saved successfully';
        } else {
          this.addMessage = 'Error in saving :' + item;
        }
      });
  }


  get(item: string) {
    this.databaseService.getShoppingItem(item)
      .then(data => {
        if (data) {
          this.getMessage = item + ' Object from database > ' + JSON.stringify(data);
        } else {
          this.getMessage = 'Error in getting ' + item;
        }
      });
  }

 getAll() {
    this.databaseService.getAllShoppingItem()
      .then(data => {
        if (data) {
          this.getAllMessage =' Object from database > ' + JSON.stringify(data);
        } else {
          this.getAllMessage = 'Error in getting ';
        }
      });
  }

  remove(item: string) {
    this.databaseService.removeShoppingItem(item)
      .then(success => {
        if (success) {
          this.removeMessage = item+' removed successfully';
        } else {
          this.removeMessage = 'Error in removing '+item;
        }
      });
  }


  removeAll() {
    this.databaseService.removeAllShoppingItem()
      .then(success => {
        if (success) {
          this.removeAllMessage = 'All removed successfully';
        } else {
          this.removeAllMessage = 'Error in removing all';
        }
      });
  }


  //Milk exemple 
  addMilk() {
    this.databaseService.addShoppingItem('milk', 2)
      .then(success => {
        if (success) {
          this.addMessage = 'Milk saved successfully';
        } else {
          this.addMessage = 'Error in saving milk';
        }
      });
  }

  getMilk() {
    this.databaseService.getShoppingItem('milk')
      .then(data => {
        if (data) {
          this.getMessage = 'Milk Object from database > ' + JSON.stringify(data);
        } else {
          this.getMessage = 'Error in getting milk';
        }
      });
  }

  removeMilk() {
    this.databaseService.removeShoppingItem('milk')
      .then(success => {
        if (success) {
          this.removeMessage = 'Milk removed successfully';
        } else {
          this.removeMessage = 'Error in removing milk';
        }
      });
  }

  ionViewDidLoad() {
    console.log('Hello SqlLocalStoragePage Page');
  }

}
