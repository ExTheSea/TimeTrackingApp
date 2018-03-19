import { TimerSettingsPage } from './../timer-settings/timer-settings';
import { OverviewMoreActionsPage } from './../overview-more-actions/overview-more-actions';
import { TimerTracking } from './../../classes/timer-tracking';
import { iconSwitch } from './../../animations/iconSwitch';
import { TrackingStorageProvider } from './../../providers/tracking-storage/tracking-storage';
import { Subject } from 'rxjs';
import { GeneralTimerTriggerProvider } from './../../providers/general-timer-trigger/general-timer-trigger';
import { TimerSettingStorageProvider } from './../../providers/timer-setting-storage/timer-setting-storage';
import { Duration } from 'moment';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SingleTimer } from '../../classes/single-timer';
import * as moment from 'moment';
import { TimerSetting } from '../../classes/timer-settings';
import { TrackingCalculationProvider } from '../../providers/tracking-calculation/tracking-calculation';
import { TimerStorageProvider } from '../../providers/timer-storage/timer-storage';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
  animations: [
    iconSwitch
  ]
})
export class OverviewPage implements OnInit, OnDestroy, OnChanges {

  timer: SingleTimer;
  currentDuration: Duration = moment.duration(0);
  dailyDuration: Duration = moment.duration(0);
  weeklyDuration: Duration = moment.duration(0);
  timerSettings: TimerSetting;
  trackings: TimerTracking[] = [];

  private destroySubject = new Subject();
  private moreActionsPopover;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settingStorage: TimerSettingStorageProvider,
    private generalTimer: GeneralTimerTriggerProvider,
    private trackingCalc: TrackingCalculationProvider,
    private trackingStorage: TrackingStorageProvider,
    private timerStorage: TimerStorageProvider,
    private popoverCtrl: PopoverController
  ) {
    this.timer = this.navParams.get('timer');
    this.moreActionsPopover = this.popoverCtrl.create(OverviewMoreActionsPage, {
      timerId: this.timer.id
    })
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.updateSettings()
    this.settingStorage.timerSettingChanged.filter(timerId => timerId = this.timer.id)
      .takeUntil(this.destroySubject.first())
      .subscribe(_ => this.updateSettings());
    this.generalTimer.subsribeToTrigger(this.destroySubject, _ => {
      this.updateDurations();
    });
    this.updateDurations();
  }

  ngOnChanges() {
    this.settingStorage.getTimerSettingByTimerId(this.timer.id)
      .then(settings => this.timerSettings = settings);
  }

  runningIcon() {
    return this.timer.isRunning ? 'ios-square-outline' : 'ios-play-outline';
  }

  private updateSettings() {
    this.settingStorage.getTimerSettingByTimerId(this.timer.id)
      .then(settings => this.timerSettings = settings);
  }

  private updateDurations() {
    this.trackingCalc.getRunningDuration(this.timer.id)
      .then(duration => this.currentDuration = duration);
  this.trackingCalc.getDayDuration(this.timer.id, moment())
      .then(duration => this.dailyDuration = duration);
    this.trackingCalc.getWeekDuration(this.timer.id, moment().weeks())
      .then(duration => this.weeklyDuration = duration);

    this.trackingStorage.getAllTrackingsByTimerId(this.timer.id)
      .then(trackings => this.trackings = trackings)
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }

  playStop() {
      this.timer.isRunning ? this.trackingStorage.stopTrackingTimer(this.timer.id) : 
          this.trackingStorage.startTrackingTimer(this.timer.id)
      this.timer.isRunning = !this.timer.isRunning;
      this.timerStorage.modifyTimer(this.timer);
  }

  get dailyTrackings() {
    if (!this.trackings) return [];
    return this.trackings.filter(tracking => 
      moment(tracking.startTime).isAfter(moment().hours(0).minutes(0).minutes(0))).reverse();
  }


  openMoreActions(event) {
    this.moreActionsPopover.present({ev: event})
  }

  openEdit() {
    this.navCtrl.push(TimerSettingsPage, {
      timer: this.timer
    })
  }

  getDurationByTracking(tracking: TimerTracking) {
    return moment.duration(moment(tracking.endTime ? tracking.endTime : new Date()).diff(moment(tracking.startTime)));
  }

  getTrackingClass(tracking: TimerTracking) {
    const classes = ['singleTracking'];
    if (!tracking.endTime) classes.push('runningTracking');
    return classes.join(' ');
  }
}
