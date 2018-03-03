import { TimerTracking } from './../../classes/timer-tracking';
import { Injectable } from '@angular/core';
import { Time } from '../../classes/time';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the TrackingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackingStorageProvider {

  trackingChangedSubjects: Map<number, Subject<TimerTracking[]>> = new Map();

  constructor(private storage: Storage) {}

  public getAllTrackingsByTimerId(timerId: number): Promise<TimerTracking[]> {
    return this.storage.get('timerTracking' + timerId).then(trackings => trackings as TimerTracking[])
  }

  public storeTrackingsByTimerId(timerId: number, trackings: TimerTracking[]): Promise<boolean> {
    return this.storage.set('timerTracking' + timerId, trackings)
  }

  public startTrackingTimer(timerId: number) {
    return this.getAllTrackingsByTimerId(timerId).then(trackings => {
      if (!trackings || !Array.isArray(trackings)) trackings = [];
      const runningTracking = trackings.find(tracking => tracking.endTime === undefined)
      if (runningTracking) runningTracking.endTime = Time.createByDate(new Date());
      const newTimerTracking = new TimerTracking(new Date(), Time.createByDate(new Date()), undefined);
      trackings.push(newTimerTracking);
      return this.storeTrackingsByTimerId(timerId, trackings);
    })
  }

  public stopTrackingTimer(timerId: number) {
    return this.getAllTrackingsByTimerId(timerId).then(trackings => {
      if (!trackings || !Array.isArray(trackings)) trackings = [];
      const runningTracking = trackings.find(tracking => tracking.endTime === undefined)
      if (runningTracking) runningTracking.endTime = Time.createByDate(new Date());
      return this.storeTrackingsByTimerId(timerId, trackings);
    })
  }

  private getTrackingChangedSubject(timerId: number) {
    if (!this.trackingChangedSubjects.has(timerId)) this.trackingChangedSubjects.set(timerId, new Subject<TimerTracking[]>())
    return this.trackingChangedSubjects.get(timerId)
  }  
}
