import { ComponentsModule } from './../../components/components.module';
import { TimeDisplayComponent } from './../../components/time-display/time-display';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerSettingsPage } from './timer-settings';

@NgModule({
  declarations: [
    TimerSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerSettingsPage)
  ],
})
export class TimerSettingsPageModule {}
