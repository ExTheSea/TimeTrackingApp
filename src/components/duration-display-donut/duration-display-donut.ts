import { DonutItem } from './../donut-chart/donut-item';
import { DonutChartComponent } from './../donut-chart/donut-chart';
import { Component, Input, OnChanges } from '@angular/core';

/**
 * Generated class for the DurationDisplayDonutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'duration-display-donut',
  templateUrl: 'duration-display-donut.html'
})
export class DurationDisplayDonutComponent implements OnChanges {
  @Input() radius:number = 50;
  @Input() width:number = 20;
  @Input() target:number = 1;
  @Input() actual:number = .5; 
  items: Array<DonutItem> = [
    {
      count: this.biggerThanTarget ? this.actual - this.target : this.target - this.actual,
      color: this.biggerThanTarget ? '#f3ffbd' : '#cc1243'
    },
    {
      count: this.biggerThanTarget ? this.target : this.actual,
      color: this.biggerThanTarget ? '#70c1b3' : '#247ba0'
    }
  ];

  text: string;

  constructor() {
    console.log('Hello DurationDisplayDonutComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges() {
    this.items[0].count = this.biggerThanTarget ? this.actual - this.target : this.target - this.actual;
    this.items[0].color = this.biggerThanTarget ? '#F3FFBD' : '#E8144D';

    this.items[1].count = this.biggerThanTarget ? this.target : this.actual,
    this.items[1].color = this.biggerThanTarget ? '#70C1B3' : '#247BA0'
  }

  get biggerThanTarget() {
    return this.actual > this.target;
  }
}
