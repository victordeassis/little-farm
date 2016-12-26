import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // animals: string;

  constructor(public navCtrl: NavController) {

    // this.animals = [{"name":"dog", "img":"../assets/img/cat.png"}];

  }

  catSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Cat Meowing-SoundBible.com-781322082.mp3";
    audio.load();
    audio.play();
  }
  
  cowSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Single Cow-SoundBible.com-2051754137.mp3";
    audio.load();
    audio.play();
  }

  pigSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Pig Oinking-SoundBible.com-1904855325.mp3";
    audio.load();
    audio.play();
  }

  dogSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Dog Woof-SoundBible.com-457935112.mp3";
    audio.load();
    audio.play();
  }

  roosterSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Rooster Crow-SoundBible.com-1802551702.mp3";
    audio.load();
    audio.play();
  }

  sheepSound() {
    var audio = new Audio();
    audio.src = "assets/sounds/Sheep Bleating-SoundBible.com-1373580685.mp3";
    audio.load();
    audio.play();
  }

  

}
