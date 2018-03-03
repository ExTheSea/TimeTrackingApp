import { Time } from './../../classes/time';
import { SingleTimer } from './../../classes/single-timer';
import { Component, Input, OnInit, trigger, transition, animate, style, state } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html',
  animations: [
    trigger('iconSwitch', [
      transition('* => *', [
        style({ opacity: 0}),
        animate('500ms ease-out', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class TimerComponent implements OnInit {

  @Input() singleTimer: SingleTimer;
  time: Time;

  constructor() {
    this.time = new Time(1,20, null);
  }

  ngOnInit() {
    Observable.interval(1000).subscribe(timeInt => {
      this.time.minutes = Math.floor(timeInt / 60);
      this.time.hours = Math.floor(Math.floor(timeInt / 60) / 60);
      this.time.seconds = timeInt % 60;
    })
  }

  testClick(): void {
    this.singleTimer.isRunning = !this.singleTimer.isRunning;
  }

  runningIcon() {
    return this.singleTimer.isRunning ? 'ios-square-outline' : 'ios-play-outline';
  }

}
