import { Time } from './time';
import * as moment from 'moment';
export class TimerTracking {
    public date: Date;
    public startTime: Date;
    public endTime: Date;

    constructor(date: Date, startTime: Date, endTime: Date) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public getDurationTime(): Time {
        const milliSecDiff: number = (this.endTime ? this.endTime.getMilliseconds() : new Date().getMilliseconds()) - this.startTime.getMilliseconds();
        return Time.createBySecondsNumber(milliSecDiff * 1000)
    }

    public getDuration(): moment.Duration {
        return moment.duration(moment(this.endTime ? this.endTime : null).diff(moment(this.startTime)));
    }
}