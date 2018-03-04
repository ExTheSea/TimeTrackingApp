import { TimerSettingsPage } from './../../pages/timer-settings/timer-settings';
import { NavController } from 'ionic-angular';
import { TrackingStorageProvider } from './../../providers/tracking-storage/tracking-storage';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { Time } from './../../classes/time';
import { SingleTimer } from './../../classes/single-timer';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from "@angular/animations"; 

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html',
  animations: [
    trigger('iconSwitch', [
      transition('* => *', [
        style({ opacity: 0}),
        animate('500ms ease-out', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class TimerComponent implements OnInit {

  @Input() singleTimer: SingleTimer;
  time: Time;

  constructor(
    private timerStorage: TimerStorageProvider,
    private trackingStorage: TrackingStorageProvider,
    private navCtrl: NavController
  ) {
    this.time = new Time(1,20, null);
  }

  ngOnInit() {
    Observable.interval(1000).subscribe(timeInt => {
      this.time.minutes = Math.floor(timeInt / 60);
      this.time.hours = Math.floor(Math.floor(timeInt / 60) / 60);
      this.time.seconds = timeInt % 60;
    })
  }

  testClick(): void {
    this.singleTimer.isRunning ? this.trackingStorage.stopTrackingTimer(this.singleTimer.id) : 
        this.trackingStorage.startTrackingTimer(this.singleTimer.id)
    this.singleTimer.isRunning = !this.singleTimer.isRunning;
    this.timerStorage.modifyTimer(this.singleTimer);
  }

  runningIcon() {
    return this.singleTimer.isRunning ? 'ios-square-outline' : 'ios-play-outline';
  }

  testDelete() {
    this.timerStorage.removeTimer(this.singleTimer);
  }

  editTimer() {
    this.navCtrl.push(TimerSettingsPage, {
      timer: this.singleTimer
    })
  }
}
