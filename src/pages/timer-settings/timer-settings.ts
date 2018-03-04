import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { TimerSettingStorageProvider } from './../../providers/timer-setting-storage/timer-setting-storage';
import { TimerSetting } from './../../classes/timer-settings';
import { SingleTimer } from './../../classes/single-timer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      .catch(err => this.timerSettings = new TimerSetting())
    } else {
       this.editTimer = new SingleTimer();
       this.timerSettings = new TimerSetting();
    }
  }

  save(): void {
    if (!this.addNew) {
      this.timerStorage.modifyTimer(this.editTimer);
    } else {
      this.timerStorage.addTimer(this.editTimer);
    }
    this.settingStorage.setTimerSettingByTimerId(this.editTimer.id, this.timerSettings);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {}

}
