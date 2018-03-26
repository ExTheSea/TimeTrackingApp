import { Time } from './../../classes/time';
import { Injectable } from '@angular/core';
import { TrackingStorageProvider } from '../tracking-storage/tracking-storage';
import * as moment from 'moment';
import { TimerTracking } from '../../classes/timer-tracking';

/*
  Generated class for the TrackingCalculationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackingCalculationProvider {

  constructor(private trackingStorage: TrackingStorageProvider) {}

  public getRunningDuration(timerId: number): Promise<moment.Duration> {
    return this.trackingStorage.getAllTrackingsByTimerId(timerId)
      .then(trackings => trackings.find(tracking => tracking.endTime === undefined))
      .then((tracking: TimerTracking) => {
        if (tracking) {
          return moment.duration(moment().diff(tracking.startTime));
        } else return moment.duration(0);
      })
      .catch(_ => {
        return moment.duration(0)
      })
  }

  public getRangeDuration(timerId: number, startMoment: moment.Moment, endMoment: moment.Moment): Promise<moment.Duration> {
    return this.trackingStorage.getAllTrackingsByTimerId(timerId)
      .then(trackings => {
        let sumSeconds = 0;
        trackings.forEach(tracking => {
          const startInRange = moment(tracking.startTime).isBetween(startMoment, endMoment);
          const endInRange = moment(tracking.endTime).isBetween(startMoment, endMoment);
          if (startInRange || endInRange) {
            let startDate: moment.Moment = startInRange ? moment(tracking.startTime) : startMoment;
            let endDate: moment.Moment = endInRange ? moment(tracking.endTime) : endMoment;
            sumSeconds += endDate.diff(startDate);
          }
        });
        return moment.duration(sumSeconds);
      })
      .catch(_ => moment.duration(0))
  }

  public getRangeTrackings(timerId: number, startMoment: moment.Moment, endMoment: moment.Moment): Promise<TimerTracking[]> {
    return this.trackingStorage.getAllTrackingsByTimerId(timerId)
      .then(trackings => trackings
        .filter(tracking => {
          const startInRange = moment(tracking.startTime).isBetween(startMoment, endMoment);
          const endInRange = moment(tracking.endTime).isBetween(startMoment, endMoment);
          return startInRange || endInRange
        })
      )
  }


  public getDayDuration(timerId: number, day: moment.Moment) {
    return this.getRangeDuration(
      timerId,
      day.clone().hour(0).minute(0).second(0).millisecond(0),
      day.clone().hour(0).minute(0).second(0).millisecond(0).add(1, 'day')
    )
  }

  public getWeekDuration(timerId: number, calenderWeek: number) {
    return this.getRangeDuration(
      timerId,
      this.getStartOfWeek(calenderWeek),
      this.getEndOfWeek(calenderWeek)
    )
  }

  public getStartOfWeek(calendarWeek): moment.Moment {
    return moment().week(calendarWeek).startOf('isoWeek');
  }

  public getEndOfWeek(calendarWeek): moment.Moment {
    return moment().week(calendarWeek).endOf('isoWeek');
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
  }


}
