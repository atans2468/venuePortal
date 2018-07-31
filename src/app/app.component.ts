import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { upcomingEvents } from '../pages/upcomingEvents/upcomingEvents';
import { PastEventsPage } from '../pages/past-events/past-events';
import { SocialMediaPage } from '../pages/social-media/social-media';
import { InteractionRoutePage } from '../pages/interaction-route/interaction-route';
import { PosterRoutePage } from '../pages/poster-route/poster-route';
import { YourPromotersPage } from '../pages/your-promoters/your-promoters';
import { SettingsPage } from '../pages/settings/settings';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = upcomingEvents;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Upcoming Events', component: upcomingEvents },
      { title: 'Past Events', component: PastEventsPage },
      { title: 'Social Media Campaigns', component: SocialMediaPage },
      { title: 'Interaction Routes', component: InteractionRoutePage },
      { title: 'Poster Routes', component: PosterRoutePage },
      { title: 'Your Promoters', component: YourPromotersPage },
      { title: 'Settings', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
