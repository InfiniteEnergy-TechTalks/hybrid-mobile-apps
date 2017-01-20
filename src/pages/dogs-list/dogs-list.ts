import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DogDetailsPage } from '../dog-details/dog-details';

import { DogService } from '../../providers/dog-service';

import 'rxjs';

/*
  Generated class for the DogsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dogs-list',
  templateUrl: 'dogs-list.html'
})
export class DogsListPage {

  dogs: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private dogService: DogService
  ) { 

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Fetching dogs..."
    })

    /* 
    * Uncomment lines 44 and 50 to simulate
    * a slow service call. Just a hack to quickly 
    * show how the loader looks.
    */
    loader.present().then(() => {
      // setTimeout(() => {
        this.dogService.getDogs()
          .subscribe(data => {
            this.dogs = data.sort((a, b) => b.score - a.score);
          })
          loader.dismiss();
      // }, 2000);
    });
    this.dogService.getDogs().subscribe(data => this.dogs = data);
  }

  viewDetails(dog) {
    this.navCtrl.push(DogDetailsPage, dog);
  }
}
