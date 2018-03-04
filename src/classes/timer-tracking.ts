import { Time } from './time';
export class TimerTracking {
    public date: Date;
    public startTime: Time;
    public endTime: Time;

    constructor(date: Date, startTime: Time, endTime: Time) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}