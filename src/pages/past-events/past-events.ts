import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
@Component({
  selector: 'page-past-events',
  templateUrl: 'past-events.html',
})
export class PastEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastEventsPage');
  }

}
