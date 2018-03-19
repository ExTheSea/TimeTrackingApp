import { DonutItem } from './donut-item';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the DonutChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'donut-chart',
  templateUrl: 'donut-chart.html'
})
export class DonutChartComponent {

  @Input() items:Array<DonutItem>=[];
  @Input() radius:number = 50;
  @Input() width:number = 20;
  @Input() centerText:{name:string,value:string};
  @Input() fontColor:string="black";
  @Input() fontSize:number=10;
  constructor() {
  }  
   get perimeter()
   {
     return Math.PI*2*this.radius;
   }
   
   get total()
   {
     return this.items.map(a=>a.count).
                         reduce((x,y)=>x+y);
   }
  
   get center()
   {
      return this.radius+(this.width/2);
   }
 
   get viewBox()
   {
     return "0 0 "+(this.center*2).toString()+" "+(this.center*2).toString()
   }
 
   getOffset(index:number):number
   {  
     
     let percent:number = index===0?0:this.items.slice(0,index).map(a=>a.count).
                         reduce((x,y)=>x+y);       
     return this.perimeter*percent/this.total;
   }
}
