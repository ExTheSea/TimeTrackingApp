import { TimerSetting } from './../../classes/timer-settings';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const SETTING_STORAGE_KEY = 'timerSetting';

import * as moment from 'moment';

/*
  Generated class for the TimerSettingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerSettingStorageProvider {

  constructor(public storage: Storage) {}

  public getTimerSettingByTimerId(timerId: number): Promise<TimerSetting> {
    return this.storage.get(SETTING_STORAGE_KEY + timerId).then(setting => {
      if (!setting) throw Error('no Settings found')
      return setting;
    }).then(settingsString => JSON.parse(settingsString))
      .then(setting => setting as TimerSetting)
      .then((setting: TimerSetting) => {
        this.parseSettingDurationFields(setting);
        return setting;
      });
  }

  public parseSettingDurationFields(setting: TimerSetting) {
    setting.targetDayTime = setting.targetDayTime ? 
        moment.duration(setting.targetDayTime) : moment.duration(0);
      setting.targetWeekTime = setting.targetWeekTime ? 
        moment.duration(setting.targetWeekTime) : moment.duration(0);
      return setting;
  }

  public setTimerSettingByTimerId(timerId: number, setting: TimerSetting): Promise<boolean> {
    return this.storage.set(SETTING_STORAGE_KEY + timerId, JSON.stringify(setting));
  }
}
