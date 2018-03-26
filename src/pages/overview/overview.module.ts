import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverviewPage } from './overview';
import { OverviewMoreActionsPageModule } from '../overview-more-actions/overview-more-actions.module';

@NgModule({
  declarations: [
    OverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(OverviewPage),
    ComponentsModule,
    OverviewMoreActionsPageModule
  ],
})
export class OverviewPageModule {}
