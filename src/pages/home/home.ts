import { Observable } from 'rxjs/Observable';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { SingleTimer } from './../../classes/single-timer';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timers: SingleTimer[] = [];

  constructor(public navCtrl: NavController, private timerStorage: TimerStorageProvider) {
    this.timerStorage.timersChanged.subscribe(timers => this.timers = timers);
    this.timerStorage.getAllTimers().then(timers => this.timers = timers);
  }

  ngOnInit() {
  }

  addExampleTimer(): void {
    const timer = new SingleTimer();
    timer.name = 'Test timer Example';
    this.timerStorage.addTimer(timer);
  }
}
