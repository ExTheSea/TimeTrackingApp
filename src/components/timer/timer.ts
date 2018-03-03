import { SingleTimer } from './../../classes/single-timer';
import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent implements OnInit {

  @Input() singleTimer: SingleTimer;

  constructor() {
    console.log('asdf');
  }

  ngOnInit() {
    console.log('asdf');
  }

}
