import { Component, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  animations: [

  trigger('bounce', [
        state('*', style({
            transform: 'translateX(0)'
        })),
        transition('* => rightSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(-65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ]))),
        transition('* => leftSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ])))
    ])
  ]

})

export class IntroPage {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Omitir";

  state: string = 'x';

    slideMoved() {
      if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
        this.state = 'rightSwipe';
      else
        this.state = 'leftSwipe';
    }

    animationDone() {
      this.state = 'x';
    }

  tabBarElement: any; //
  constructor(public navCtrl: NavController) {
   }
  skip() {
    this.navCtrl.push(HomePage);
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "OK, ya entendí!";
  }

}
