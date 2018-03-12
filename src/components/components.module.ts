import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { IonicModule } from 'ionic-angular/module';
import { MyApp } from '../app/app.component';
import { TimeDisplayComponent } from './time-display/time-display';
import { DailyDurationIndicatorComponent } from './daily-duration-indicator/daily-duration-indicator';
@NgModule({
	declarations: [TimerComponent,
    TimeDisplayComponent,
    DailyDurationIndicatorComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [TimerComponent,
    TimeDisplayComponent,
    DailyDurationIndicatorComponent]
})
export class ComponentsModule {}
