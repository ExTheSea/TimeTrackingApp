import {TimerSettingsPage} from './../timer-settings/timer-settings';
import {TimerStorageProvider} from './../../providers/timer-storage/timer-storage';
import {SingleTimer} from './../../classes/single-timer';
import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {mergeArraysGraceful} from '../../helper/array-helper';
import {CallApiProvider} from "../../providers/call-api/call-api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timers: SingleTimer[] = [];
  phoneNumber: number;

  constructor(public navCtrl: NavController, private timerStorage: TimerStorageProvider, private callNumberApi: CallApiProvider) {
    this.timerStorage.timersChanged.subscribe(timersNew => {
      this.timers = mergeArraysGraceful(this.timers, timersNew,
        (timer1, timer2) => timer1.id === timer2.id) as SingleTimer[];
    });
    this.timerStorage.getAllTimers().then(timers => this.timers = timers);
  }

  /*
    Dummy call function to demonstrate the function
 */
  callNumber(): void {
    this.callNumberApi.callANumber(this.phoneNumber)
  }

  ngOnInit() {
  }

  addNewTimer(): void {
    this.navCtrl.push(TimerSettingsPage);
  }
}
