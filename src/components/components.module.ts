import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { IonicModule } from 'ionic-angular/module';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [TimerComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [TimerComponent]
})
export class ComponentsModule {}
