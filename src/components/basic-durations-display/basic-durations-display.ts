import { Duration } from 'moment';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the BasicDurationsDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'basic-durations-display',
  templateUrl: 'basic-durations-display.html'
})
export class BasicDurationsDisplayComponent {

  @Input() actual: Duration;
  @Input() target: Duration;

  constructor() {

  }


  get runningPercent() {
    return (this.actual.asMilliseconds() / this.target.asMilliseconds()) * 100
  }

  get missingPercent() {
    return (this.target.asMilliseconds() - this.actual.asMilliseconds()) / this.target.asMilliseconds()  * 100
  }

  get isLongerThanAvg(): boolean {
    return this.actual.asMilliseconds() > this.target.asMilliseconds();
  }

  get overAveragePercent() {
    return (this.actual.asMilliseconds() - this.target.asMilliseconds()) / this.actual.asMilliseconds()  * 100
  }

  get averagePercent () {
    return (this.target.asMilliseconds() / this.actual.asMilliseconds()) * 100
  }

  get firstStyle() {
    return {
      transition: 'all .5s',
      'flex-basis': (this.firstPercent) + '%'
    }
  }

  get secondStyle() {
    return {
      transition: 'all .5s',
      'flex-basis': (this.secondPercent) + '%'
    }
  }

  get firstPercent() {
    return this.isLongerThanAvg ? this.averagePercent : this.runningPercent
  }

  get secondPercent() {
    return this.isLongerThanAvg ? this.overAveragePercent : this.missingPercent
  }

  get firstClass() {
    return (this.isLongerThanAvg ? 'average':'running') + ' bar'
  }

  get secondClass() {
    return (this.isLongerThanAvg ? 'more':'missing') + ' bar'
  }

  get showFirst() {
    return this.firstPercent > 25
  }

  get showSecond() {
    return this.secondPercent > 25;
  }

  get diffToTarget(): Duration {
    return this.target.clone().subtract(this.actual);
  }

  get diffToActual(): Duration {
    return this.actual.clone().subtract(this.target);
  }
}
