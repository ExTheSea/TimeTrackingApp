import { iconSwitch } from './../../animations/iconSwitch';
import { OverviewPage } from './../../pages/overview/overview';
import { TrackingCalculationProvider } from './../../providers/tracking-calculation/tracking-calculation';
import { GeneralTimerTriggerProvider } from './../../providers/general-timer-trigger/general-timer-trigger';
import { Subject } from 'rxjs/Subject';
import { TimerSettingsPage } from './../../pages/timer-settings/timer-settings';
import { NavController } from 'ionic-angular';
import { TrackingStorageProvider } from './../../providers/tracking-storage/tracking-storage';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { Time } from './../../classes/time';
import { SingleTimer } from './../../classes/single-timer';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

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
    iconSwitch
  ]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() singleTimer: SingleTimer;
  destroySubject = new Subject();

  runningDuration: moment.Duration = moment.duration(0);
  dayDuration: moment.Duration = moment.duration(0);
  weekDuration: moment.Duration = moment.duration(0);

  constructor(
    private timerStorage: TimerStorageProvider,
    private trackingStorage: TrackingStorageProvider,
    private navCtrl: NavController,
    private generalTimerTrigger: GeneralTimerTriggerProvider,
    private trackingCalc: TrackingCalculationProvider
  ) {}

  ngOnInit() {
    this.updateDurations();
    this.generalTimerTrigger.subsribeToTrigger(this.destroySubject, timeInt => {
      this.updateDurations()
    })
  }

  private updateDurations() {
    this.trackingCalc.getRunningDuration(this.singleTimer.id)
        .then(duration => this.runningDuration = duration);
      this.trackingCalc.getDayDuration(this.singleTimer.id, moment())
        .then(duration => this.dayDuration = duration);
        this.trackingCalc.getWeekDuration(this.singleTimer.id, moment().weeks())
          .then(duration => this.weekDuration = duration);
  }

  startStopTimer(): void {
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

  openOverview() {
    this.navCtrl.push(OverviewPage, {
      timer: this.singleTimer
    });
  }

  ngOnDestroy() {
    this.destroySubject.next()
  }
}
