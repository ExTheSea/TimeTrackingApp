import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { TimerSettingStorageProvider } from './../../providers/timer-setting-storage/timer-setting-storage';
import { TimerSetting } from './../../classes/timer-settings';
import { SingleTimer } from './../../classes/single-timer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the TimerSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer-settings',
  templateUrl: 'timer-settings.html',
})
export class TimerSettingsPage {

  addNew: boolean = true;
  editTimer: SingleTimer;
  timerSettings: TimerSetting;

  targetDayTimeInput: string;
  targetWeekTimeInput: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private settingStorage: TimerSettingStorageProvider,
    private timerStorage: TimerStorageProvider
  ) {
    this.editTimer = this.navParams.get('timer');
    if ( this.editTimer ) {
      this.addNew = false;
      this.editTimer = JSON.parse(JSON.stringify(this.editTimer))
      this.settingStorage.getTimerSettingByTimerId(this.editTimer.id)
      .then(settings => this.timerSettings = JSON.parse(JSON.stringify(settings)))
      .then(setting => this.settingStorage.parseSettingDurationFields(setting))
      .catch(err => this.timerSettings = new TimerSetting())
    } else {
       this.editTimer = new SingleTimer();
       this.timerSettings = new TimerSetting();
    }
  }

  save(): void {
    if (!this.fieldsValid)
      return;
    if (!this.addNew) {
      this.timerStorage.modifyTimer(this.editTimer);
    } else {
      this.timerStorage.addTimer(this.editTimer);
    }
    this.settingStorage.setTimerSettingByTimerId(this.editTimer.id, this.timerSettings)
      .catch(err => console.error(err));
    this.navCtrl.pop();
  }

  private parseAsDuration(property: string) {
    if (this.timerSettings[property]) {
      this.timerSettings[property] = moment.duration(this.timerSettings[property]);
    }
  }

  get fieldsValid(): boolean {
    let valid = true;
    valid = this.editTimer.name && this.editTimer.name.length > 0;
    valid = valid ? this.timerSettings.targetDayTime && this.timerSettings.targetDayTime.asHours() > 0 : valid;
    valid = valid ? this.timerSettings.targetWeekTime && this.timerSettings.targetWeekTime.asHours() > 0 : valid;
    return valid;
  }

  ionViewDidLoad() {}

  updateDayTimer(value: string) {
    this.timerSettings.targetDayTime = moment.duration(parseFloat(value), 'hours');
  }

  get avgDayTime() {
    return this.timerSettings.targetDayTime ? this.timerSettings.targetDayTime.asHours() : 0 ;
  }

  get avgWeekTime() {
    return this.timerSettings.targetWeekTime ? this.timerSettings.targetWeekTime.asHours() : 0 ;
  }

  updateWeekTimer(value: string) {
    this.timerSettings.targetWeekTime = moment.duration(parseFloat(value), 'hours');
  }
}
