import { Component, Input } from '@angular/core';
import { Time } from '../../classes/time';

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

  @Input() time: Time;
  @Input() showSeconds: boolean = true;

  constructor() {

  }

  formatNumber(number) {
    return ("0" + number).slice(-2);
  }

}
