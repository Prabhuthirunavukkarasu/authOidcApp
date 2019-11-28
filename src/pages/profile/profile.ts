import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: GlobalProvider) {
  }

  ngOnInit() {
    this.globals.auth.subscribe(authenticated => {
      for (let key in authenticated.user.profile) {
        this.profile.push(key + ' : ' + authenticated.user.profile[key]);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  isAuthenticated() {
    return this.globals.isAuthenticated;
  }

}
