export class Time {
    public hours: Number;
    public minutes: Number;
    public seconds: Number;

    constructor(hours: Number, minutes: Number, seconds: Number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static createByDate(date: Date): Time {
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds());
    }
}