import { TimerSetting } from './../../classes/timer-settings';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const SETTING_STORAGE_KEY = 'timerSetting';

/*
  Generated class for the TimerSettingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerSettingStorageProvider {

  constructor(public storage: Storage) {}

  public getTimerSettingByTimerId(timerId: number): Promise<TimerSetting> {
    return this.storage.get(SETTING_STORAGE_KEY + timerId).then(setting => setting as TimerSetting);
  }

  public setTimerSettingByTimerId(timerId: number, setting: TimerSetting): Promise<boolean> {
    return this.storage.set(SETTING_STORAGE_KEY + timerId, setting);
  }
}
