import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeneralTimerTriggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralTimerTriggerProvider {

  generalTimerTrigger: Observable<number> = Observable.interval(1000)

  constructor() {}

  subsribeToTrigger(destroyObservable: Observable<any>, callback: (value: number) => void) {
    this.generalTimerTrigger.takeUntil(destroyObservable.first()).subscribe(callback);
  }

}
