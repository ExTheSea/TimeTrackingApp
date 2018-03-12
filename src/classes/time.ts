export class Time {
    public hours: number;
    public minutes: number;
    public seconds: number;

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static createByDate(date: Date): Time {
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    static createBySecondsNumber(seconds: number): Time {
        return new Time(
            Math.floor(Math.floor(seconds / 60) / 60),
            Math.floor(seconds / 60),
            seconds % 60
        )
    } 

    public asSecondsToday(): number {
        return this.hours * 60 * 60 +
            this.minutes * 60 +
            this.seconds;
    }

    public add(time: Time): Time {
        return Time.createBySecondsNumber(this.asSecondsToday() + time.asSecondsToday());
    }
    
    public subtract(time: Time): Time {
        return Time.createBySecondsNumber(this.asSecondsToday() - time.asSecondsToday());
    }
}