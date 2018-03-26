import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyOverviewPage } from './weekly-overview';

@NgModule({
  declarations: [
    WeeklyOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyOverviewPage),
    ComponentsModule
  ],
})
export class WeeklyOverviewPageModule {}
