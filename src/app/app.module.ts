import { WeeklyOverviewPageModule } from './../pages/weekly-overview/weekly-overview.module';
import { OverviewPageModule } from './../pages/overview/overview.module';
import { OverviewPage } from './../pages/overview/overview';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimerStorageProvider } from '../providers/timer-storage/timer-storage';
import { TrackingStorageProvider } from '../providers/tracking-storage/tracking-storage';
import { TimerSettingStorageProvider } from '../providers/timer-setting-storage/timer-setting-storage';
import { TimerSettingsPageModule } from '../pages/timer-settings/timer-settings.module';
import { GeneralTimerTriggerProvider } from '../providers/general-timer-trigger/general-timer-trigger';
import { TrackingCalculationProvider } from '../providers/tracking-calculation/tracking-calculation';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    TimerSettingsPageModule,
    OverviewPageModule,
    WeeklyOverviewPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimerStorageProvider,
    TrackingStorageProvider,
    TimerSettingStorageProvider,
    GeneralTimerTriggerProvider,
    TrackingCalculationProvider
  ],
  schemas: []
})
export class AppModule {}
