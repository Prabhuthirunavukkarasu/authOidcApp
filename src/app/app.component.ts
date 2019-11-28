import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DoorsPage } from '../pages/doors/doors';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, badge: string }> = [];



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {

    this.pages = [
      { title: 'Home', component: HomePage, badge: '' },
      { title: 'Doors', component: DoorsPage, badge: '' },
      { title: 'Profile', component: ProfilePage, badge: '' }
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: { title: string, component: any }): void {
    this.rootPage = page.component;
    this.menuCtrl.toggle();
  }
}

