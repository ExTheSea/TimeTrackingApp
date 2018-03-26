import { iconSwitch, iconFlip } from './../../animations/iconSwitch';
import { expandTransition } from './../../animations/sizeMorph';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ExpandableContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-container',
  templateUrl: 'expandable-container.html',
  animations: [expandTransition, iconFlip]
})
export class ExpandableContainerComponent {

  @Input() title: string;

  isExpanded = false;

  constructor() {
    
  }

  get expanded(): string {
    return this.isExpanded.toString();
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

}
