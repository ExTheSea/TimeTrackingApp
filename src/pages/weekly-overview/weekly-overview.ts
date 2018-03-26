import { expandTransition } from './../../animations/sizeMorph';
import { TimerTracking } from './../../classes/timer-tracking';
import { iconSwitch } from './../../animations/iconSwitch';
import { SingleTimer } from './../../classes/single-timer';
import { TrackingCalculationProvider } from './../../providers/tracking-calculation/tracking-calculation';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the WeeklyOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-overview',
  templateUrl: 'weekly-overview.html',
  animations: [iconSwitch, expandTransition]
})
export class WeeklyOverviewPage implements OnInit {

  timer: SingleTimer;
  startWeek: moment.Moment = moment()
  endWeek: moment.Moment = moment()
  basicDateFormat = "DD.MM.YY"
  weekDiff = 0
  trackings: TimerTracking[] = []
  dayOfWeek = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun',
  }
  showMore = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  }
  trackingOfWeek = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private trackingCalc: TrackingCalculationProvider
  ) {
    this.timer = this.navParams.get("timer");
  }

  ngOnInit() {
    this.calculateWeeks();
  }


  private calculateWeeks() {
    const calcMoment = moment().add(this.weekDiff, "weeks");
    this.startWeek = this.trackingCalc.getStartOfWeek(calcMoment.weeks())
    this.endWeek = this.trackingCalc.getEndOfWeek(calcMoment.weeks())
    this.trackingCalc.getRangeTrackings(this.timer.id, this.startWeek, this.endWeek)
      .then(trackings => {
        this.trackings = trackings;
      });
    for (let day = 1; day < 8; day++) {
      this.trackingCalc.getRangeTrackings(
        this.timer.id,
        this.startWeek.clone().add(day -1, "days"),
        this.startWeek.clone().add(day, "days")
      ).then(trackings => this.trackingOfWeek[day]  = trackings);
    }
  }

  toggleMore(dayIndex) {
    this.showMore[dayIndex] = !this.showMore[dayIndex];
  }


  get startWeekFormat() {
    return this.startWeek.format(this.basicDateFormat)
  }

  get endtWeekFormat() {
    return this.endWeek.format(this.basicDateFormat)
  }

  navigateWeek(forward: boolean) {
    this.weekDiff += (forward ? 1 : -1);
    Object.keys(this.showMore).forEach(key => this.showMore[key] = false)
    this.calculateWeeks()
  }

  get dayIndexes() {
    return Object.keys(this.dayOfWeek);
  }

  trackingOnWeekDay(index: number): TimerTracking[] {
    const trackings: TimerTracking[] = this.trackingOfWeek[index];
    return trackings ? trackings.slice(0).reverse() : trackings;
  }

  trackingDuration(tracking: TimerTracking) {
    return moment.duration(moment(tracking.endTime ? tracking.endTime : new Date()).diff(moment(tracking.startTime)));
  }

  trackingDurationPerDay(index): moment.Duration {
    const accumulator = moment.duration(0);
    this.trackingOnWeekDay(index)
      .forEach((tracking) => 
      accumulator.add(this.trackingDuration(tracking)))
    return accumulator;
  }

  maxDurationPerWeek(): moment.Duration {
    let maxDuration = moment.duration(0);
    Object.keys(this.trackingOfWeek)
      .forEach(dayIndex => {
        const dur = this.trackingDurationPerDay(dayIndex);
        if (maxDuration.asMilliseconds() < dur.asMilliseconds())
          maxDuration = dur;
      }) 
    return maxDuration;
  }

  durationPercent(dayIndex, tracking) {
    return (this.trackingDuration(tracking).asMilliseconds() / this.maxDurationPerWeek().asMilliseconds()) * 100;
  }

  durationPercentCss(dayIndex, tracking) {
    return this.durationPercent(dayIndex, tracking) + "%"
  }

  showDuration(dayIndex, tracking) {
    return this.durationPercent(dayIndex, tracking) > 30;
  }

  durationStyle (dayIndex, tracking) {
    return {
      width: this.durationPercentCss(dayIndex, tracking),
      'flex-basis': this.durationPercentCss(dayIndex, tracking)
    }
  }
}
