import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Models
import { User } from '../../models/user';

// Providers
import {  GithubUsers } from '../../providers/github-users';

// Page details
import { UserDetailsPage } from '../user-details/user-details';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
   users: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
     githubUsers.load().subscribe(users => {
      //console.log(users)
      this.users = users;
    })
  }


goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  ionViewDidLoad() {
    console.log('Hello UsersPage Page');
  }

}
