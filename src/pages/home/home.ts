import { TimerSettingsPage } from './../timer-settings/timer-settings';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { SingleTimer } from './../../classes/single-timer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mergeArraysGraceful } from '../../helper/array-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timers: SingleTimer[] = [];

  constructor(public navCtrl: NavController, private timerStorage: TimerStorageProvider) {
    this.timerStorage.timersChanged.subscribe(timersNew => {
      this.timers = mergeArraysGraceful(this.timers, timersNew, 
        (timer1, timer2) => timer1.id === timer2.id) as SingleTimer[];
    });
    this.timerStorage.getAllTimers().then(timers => this.timers = timers);
  }

  ngOnInit() {
  }

  addNewTimer(): void {
    this.navCtrl.push(TimerSettingsPage);
  }
}
