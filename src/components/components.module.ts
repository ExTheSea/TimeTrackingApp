import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { IonicModule } from 'ionic-angular/module';
import { MyApp } from '../app/app.component';
import { TimeDisplayComponent } from './time-display/time-display';
import { DailyDurationIndicatorComponent } from './daily-duration-indicator/daily-duration-indicator';
import { BasicDurationsDisplayComponent } from './basic-durations-display/basic-durations-display';
import { BasicTimeDisplayComponent } from './basic-time-display/basic-time-display';
import { ExpandableContainerComponent } from './expandable-container/expandable-container';
@NgModule({
	declarations: [TimerComponent,
    TimeDisplayComponent,
    DailyDurationIndicatorComponent,
    BasicDurationsDisplayComponent,
    BasicTimeDisplayComponent,
    ExpandableContainerComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [TimerComponent,
    TimeDisplayComponent,
    DailyDurationIndicatorComponent,
    BasicDurationsDisplayComponent,
    BasicTimeDisplayComponent,
    ExpandableContainerComponent]
})
export class ComponentsModule {}
