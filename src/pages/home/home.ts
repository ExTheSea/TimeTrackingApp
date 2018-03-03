import { SingleTimer } from './../../classes/single-timer';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timers: SingleTimer[] = [];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    const timer1 = new SingleTimer();
    timer1.name = "Test Timer 1";
    this.timers.push(timer1);


    const timer2 = new SingleTimer()
    timer2.name = "Test Timer 2"
    this.timers.push(timer2)
  
  }
}
