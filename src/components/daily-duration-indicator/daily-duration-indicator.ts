import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { transition } from '@angular/animations';
import { TrackingCalculationProvider } from './../../providers/tracking-calculation/tracking-calculation';
import { GeneralTimerTriggerProvider } from './../../providers/general-timer-trigger/general-timer-trigger';
import { TimerSettingStorageProvider } from './../../providers/timer-setting-storage/timer-setting-storage';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';

/**
 * Generated class for the DailyDurationIndicatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'daily-duration-indicator',
  templateUrl: 'daily-duration-indicator.html'
})
export class DailyDurationIndicatorComponent implements OnDestroy, OnInit {

  @Input() timerId: number;
  avgDaily: moment.Duration = moment.duration(0).add(1, 'minutes');
  dailyDuration: moment.Duration = moment.duration(1);

  destroySubject = new Subject();

  constructor(
    private timerSettings: TimerSettingStorageProvider,
    private generalTrigger: GeneralTimerTriggerProvider,
    private trackingCalc: TrackingCalculationProvider,
    private timerStorage: TimerStorageProvider
  ) {
  }

  ngOnInit() {
    this.generalTrigger.subsribeToTrigger(this.destroySubject, _ => {
      this.trackingCalc.getDayDuration(this.timerId, moment())
        .then(duration => this.dailyDuration = duration);
    })
    
    this.updateSettings();

     this.timerStorage.timersChanged.takeUntil(this.destroySubject).subscribe(_ => {
        this.updateSettings();
     })
  }

  private updateSettings(): void {
    this.timerSettings.getTimerSettingByTimerId(this.timerId)
    .then(settings => settings ? this.avgDaily = settings.targetDayTime : null)
    .catch(err => console.error(err));
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }

  get runningPercent() {
    return (this.dailyDuration.asMilliseconds() / this.avgDaily.asMilliseconds()) * 100
  }

  get missingPercent() {
    return (this.avgDaily.asMilliseconds() - this.dailyDuration.asMilliseconds()) / this.avgDaily.asMilliseconds()  * 100
  }

  get isLongerThanAvg(): boolean {
    return this.dailyDuration.asMilliseconds() > this.avgDaily.asMilliseconds();
  }

  get overAveragePercent() {
    return (this.dailyDuration.asMilliseconds() - this.avgDaily.asMilliseconds()) / this.dailyDuration.asMilliseconds()  * 100
  }

  get averagePercent () {
    return (this.avgDaily.asMilliseconds() / this.dailyDuration.asMilliseconds()) * 100
  }

  get firstStyle() {
    return {
      height: '.5em',
      transition: 'all .5s',
      'flex-basis': (this.isLongerThanAvg ? this.averagePercent : this.runningPercent) + '%'
    }
  }

  get secondStyle() {
    return {
      height: '.5em',
      transition: 'all .5s',
      'flex-basis': (this.isLongerThanAvg ? this.overAveragePercent : this.missingPercent) + '%'
    }
  }
}
