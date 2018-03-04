import { TimerSettingsPage } from './../timer-settings/timer-settings';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { SingleTimer } from './../../classes/single-timer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timers: SingleTimer[] = [];

  constructor(public navCtrl: NavController, private timerStorage: TimerStorageProvider) {
    this.timerStorage.timersChanged.subscribe(timersNew => {
      this.timers.forEach((timerOld, index, arr) => {
        const timerNew = timersNew.find(timer => timer.id = timerOld.id)
        if (timerNew) {
          Object.assign(timerOld, timerNew);
          timersNew.splice(timersNew.findIndex(timer => timer.id = timerOld.id), 1);
        } else {
          arr.splice(index, 1);
        }
      });
      this.timers = this.timers.concat(timersNew);
    });
    this.timerStorage.getAllTimers().then(timers => this.timers = timers);
  }

  ngOnInit() {
  }

  addExampleTimer(): void {
    const timer = new SingleTimer();
    timer.name = 'Test timer Example';
    this.timerStorage.addTimer(timer);
  }

  addNewTimer(): void {
    this.navCtrl.push(TimerSettingsPage);
  }
}
