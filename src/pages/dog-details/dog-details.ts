import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { PhotoViewer } from 'ionic-native';

/*
  Generated class for the DogDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dog-details',
  templateUrl: 'dog-details.html'
})
export class DogDetailsPage {

  dog: any;
  canUpvote = true;
  canDownvote = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.dog = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DogDetailsPage');
  }

  viewPicture() {
    PhotoViewer.show(this.dog.picture);
  }

  upvote() {
    if (this.canUpvote) {
      this.dog.score += this.canDownvote ? 1 : 2;
    } else {
      this.dog.score--;
    }

    this.canUpvote = !this.canUpvote;
    this.canDownvote = true;
  }

  downvote() {
    if (this.canDownvote) {
      this.dog.score -= this.canUpvote ? 1 : 2;
    } else {
      this.dog.score++;
    }

    this.canDownvote = !this.canDownvote;
    this.canUpvote = true;
  }

  confirmDownvote() {
    if (this.canDownvote && this.dog.name === 'Murray') {
      let confirm = this.alertCtrl.create({
        message: 'Are you sure you want to downvote Murray?',
        buttons: [
          {
            text: 'No'
          },
          {
            text: 'Yes',
            handler: () => {
              this.downvote();
              this.showToast();
            }
          }
        ]
      });
      confirm.present();
    } else {
      this.downvote();
    }
  }

  private showToast() {
    this.toastCtrl.create({
      message: "You're a monster...how could you downvote Murray?",
      duration: 3000
    }).present();
  }
}
