import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { upcomingEvents } from '../pages/upcomingEvents/upcomingEvents';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { PastEventsPage } from '../pages/past-events/past-events';
import { SocialMediaPage } from '../pages/social-media/social-media';
import { InteractionRoutePage } from '../pages/interaction-route/interaction-route';
import { PosterRoutePage } from '../pages/poster-route/poster-route';
import { YourPromotersPage } from '../pages/your-promoters/your-promoters';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB5ReaoaIoJfMZW9NSz4_rlh41rJxztyRo",
  authDomain: "strydapp.firebaseapp.com",
  databaseURL: "https://strydapp.firebaseio.com",
  projectId: "strydapp",
  storageBucket: "strydapp.appspot.com",
  messagingSenderId: "1057951127015"
};

firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
})


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUpPage,
    upcomingEvents,
    PastEventsPage,
    SocialMediaPage,
    InteractionRoutePage,
    PosterRoutePage,
    YourPromotersPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    upcomingEvents,
    PastEventsPage,
    SocialMediaPage,
    InteractionRoutePage,
    PosterRoutePage,
    YourPromotersPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
