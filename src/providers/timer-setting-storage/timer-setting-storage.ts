import { Observable } from 'rxjs/Observable';
import { TimerSetting } from './../../classes/timer-settings';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const SETTING_STORAGE_KEY = 'timerSetting';

import * as moment from 'moment';
import { Subject } from 'rxjs';

/*
  Generated class for the TimerSettingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerSettingStorageProvider {

  private timerSettingChangedSubject = new Subject<number>();
  public timerSettingChanged: Observable<number> = this.timerSettingChangedSubject.asObservable();

  constructor(public storage: Storage) {}

  public getTimerSettingByTimerId(timerId: number): Promise<TimerSetting> {
    return this.storage.get(SETTING_STORAGE_KEY + timerId)
      .then(settingsString => JSON.parse(settingsString) as TimerSetting)
      .then((setting: TimerSetting) => setting ? this.parseSettingDurationFields(setting) : setting)
      .catch(err => {
        console.error(err);
        return null;
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
    return this.storage.set(SETTING_STORAGE_KEY + timerId, JSON.stringify(setting))
      .then(success => {
        this.timerSettingChangedSubject.next(timerId);
        return success;
      });
  }

  public removeTimerSettingsByTimerId(timerId: number): Promise<boolean> {
    return this.storage.remove(SETTING_STORAGE_KEY + timerId);
  }
}
