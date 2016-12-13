import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

// Models
import { User } from '../../models/user';

// Providers
import { GithubUsers } from '../../providers/github-users';
import { AuthService } from '../../providers/auth-service';

// Page details
import { UserDetailsPage } from '../user-details/user-details';

import { LoginPage } from '../login/login';

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
  username = '';
  email = '';
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers, private auth: AuthService, private menuCtrl: MenuController) {
    this.menuCtrl.enable(true);


    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;

    githubUsers.load().subscribe(users => {
      //console.log(users)
      this.users = users;
      this.originalUsers = users;
    });

  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, { login });
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }

   public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }

  ionViewDidLoad() {
    console.log('Hello UsersPage Page');
  }

}
