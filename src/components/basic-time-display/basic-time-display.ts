import { Component, Input } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the BasicTimeDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'basic-time-display',
  templateUrl: 'basic-time-display.html'
})
export class BasicTimeDisplayComponent {

  @Input() date: Date;
  @Input() moment: moment.Moment;

  constructor() {}

  get currentAsMoment(): moment.Moment {
    return this.moment ? this.moment : moment(this.date);
  }


  formatNumber(number) {
    return ("0" + number).slice(-2);
  }
}
