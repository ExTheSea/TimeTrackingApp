import { Component, Input } from '@angular/core';
import { Duration, Moment } from 'moment';

/**
 * Generated class for the TimeDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-display',
  templateUrl: 'time-display.html'
})
export class TimeDisplayComponent {

  @Input() duration: Duration;
  @Input() showSeconds: boolean = true;

  constructor() {

  }

  formatNumber(number) {
    return ("0" + number).slice(-2);
  }

}
