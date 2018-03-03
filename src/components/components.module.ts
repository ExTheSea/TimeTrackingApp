import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { IonicModule } from 'ionic-angular/module';
import { MyApp } from '../app/app.component';
import { TimeDisplayComponent } from './time-display/time-display';
@NgModule({
	declarations: [TimerComponent,
    TimeDisplayComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [TimerComponent,
    TimeDisplayComponent]
})
export class ComponentsModule {}
