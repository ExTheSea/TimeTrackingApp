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
    TimerSettingsPageModule
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
    TimerSettingStorageProvider
  ],
  schemas: []
})
export class AppModule {}
