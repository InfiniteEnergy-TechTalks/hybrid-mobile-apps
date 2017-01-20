import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DogsListPage } from '../pages/dogs-list/dogs-list';
import { DogDetailsPage } from '../pages/dog-details/dog-details';

import { DogService } from '../providers/dog-service';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DogsListPage,
    DogDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DogsListPage,
    DogDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  DogService]
})
export class AppModule {}
