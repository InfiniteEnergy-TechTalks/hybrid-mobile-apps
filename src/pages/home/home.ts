import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DogsListPage } from '../dogs-list/dogs-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  viewDogs() {
    this.navCtrl.push(DogsListPage);
  }
}
