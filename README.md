# DogRankr

Quick, live-coded example Ionic 2 project from our hybrid mobile app tech talk. This app uses:
* [Ionic 2](http://www.ionicframework.com)
* [Angular 2](http://angular.io)
* [Typescript](http://www.typescriptlang.org/)
* [SASS](http://sass-lang.com/)

## Requirements

* Install [NodeJS](https://nodejs.org/en/) and npm (usually comes with your NodeJS installation)
* If you're building for Android, follow [Cordova's Android guide](https://cordova.apache.org/docs/en/6.x/guide/platforms/android/) 
for requirements
* If you're building for iOS, follow [Cordova's iOS guide](https://cordova.apache.org/docs/en/6.x/guide/platforms/ios/)
for requirements


## Getting started

1. Install [Ionic](http://www.ionicframework.com) and [Cordova](http://cordova.apache.org) as 
global npm dependencies
   * `npm install -g cordova ionic`
2. Move into the project directory
    * `cd hybrid-mobile-apps`
3. Install required project dependencies
    * `npm install`
4. Serve the application from your browser
    * `ionic serve` 
    * or
    * `ionic serve --lab`

## Notes

* Presentation slides can be found in the repository root
* Mock json data can be found under `src/assets/mock-data`
* At the time of development this app used:
    * `cordova @ 6.4.0`
    * `ionic @ 2.2.1` 
    * If your versions differ from these you may have some issues running since
    the Ionic 2 core version still wasn't finalized.
    * You can use `npm ls -g --depth=0` to view installed versions
* You should never downvote Murray. He's the best dog.
