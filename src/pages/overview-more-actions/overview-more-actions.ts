import { HomePage } from './../home/home';
import { TimerStorageProvider } from './../../providers/timer-storage/timer-storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

/**
 * Generated class for the OverviewMoreActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview-more-actions',
  templateUrl: 'overview-more-actions.html',
})
export class OverviewMoreActionsPage implements OnInit {

  timerId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private timerStorage: TimerStorageProvider
  ) {
  }

  ionViewDidLoad() { }

  ngOnInit() {
    this.timerId = this.navParams.get('timerId')
  }

  deleteTimer() {
    this.timerStorage.getTimerById(this.timerId)
      .then(timer => this.timerStorage.removeTimer(timer))
        .then(_ => this.viewCtrl.dismiss()
            .then(_ => this.appCtrl.getRootNavs()[0].pop()));    
  }
}
