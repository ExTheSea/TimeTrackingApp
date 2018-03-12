import { TrackingStorageProvider } from './../tracking-storage/tracking-storage';
import { TimerSettingStorageProvider } from './../timer-setting-storage/timer-setting-storage';
import { SingleTimer } from './../../classes/single-timer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const TIMERS_KEY = 'timers';

/*
  Generated class for the TimerStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerStorageProvider {

  timersChangedSubject: Subject<SingleTimer[]> = new Subject();

  public timersChanged: Observable<SingleTimer[]> = this.timersChangedSubject.asObservable();

  private triggerTimersChanged() {
    this.getAllTimers().then(timers => this.timersChangedSubject.next(timers));
  }

  constructor(
    private storage: Storage,
    private timerSettingStorage: TimerSettingStorageProvider,
    private trackingStorage: TrackingStorageProvider
  ) {}

  public getAllTimers(): Promise<SingleTimer[]> {
    return this.storage.get(TIMERS_KEY).then(timers => timers as SingleTimer[])
  }

  public addTimer(timer: SingleTimer): void {
    this.getAllTimers().then(timers => {
      if (!timers || !Array.isArray(timers)) timers = [];
      timers.push(timer);
      this.storage.set(TIMERS_KEY, timers).then(_ => this.triggerTimersChanged());
    });
  }

  public getTimerById(timerId: Number): Promise<SingleTimer> {
    return this.getAllTimers().then(timers => timers.find(timer => timer.id === timerId));
  }

  public removeTimer(singleTimer: SingleTimer) {
    this.getAllTimers().then(timers => {
      timers.splice(timers.indexOf(singleTimer), 1);
      this.storage.set(TIMERS_KEY, timers).then(_ => this.triggerTimersChanged());
      this.timerSettingStorage.setTimerSettingByTimerId(singleTimer.id, null);
      this.trackingStorage.removeAllByTimer(singleTimer.id)
    });
  }

  public modifyTimer(singleTimer: SingleTimer) {
    return this.getAllTimers().then(timers => {
      timers[timers.findIndex(timer => timer.id === singleTimer.id)] = singleTimer;
      return this.storage.set(TIMERS_KEY, timers).then(_ => this.triggerTimersChanged());
    });
  }

}
