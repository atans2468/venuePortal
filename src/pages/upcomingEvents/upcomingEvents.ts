import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';

@Component({
  selector: 'page-upcomingEvents',
  templateUrl: 'upcomingEvents.html'
})

export class upcomingEvents {


  constructor(public navCtrl: NavController) {

  }

  createEventPage(){
    this.navCtrl.push(CreateEventPage);
  }

}