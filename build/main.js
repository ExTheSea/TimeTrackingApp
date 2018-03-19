webpackJsonp([0],{

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_more_actions_overview_more_actions_module__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OverviewPageModule = (function () {
    function OverviewPageModule() {
    }
    OverviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__overview__["a" /* OverviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__overview__["a" /* OverviewPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__overview_more_actions_overview_more_actions_module__["OverviewMoreActionsPageModule"]
            ],
        })
    ], OverviewPageModule);
    return OverviewPageModule;
}());

//# sourceMappingURL=overview.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_display_time_display__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daily_duration_indicator_daily_duration_indicator__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_durations_display_basic_durations_display__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_time_display_basic_time_display__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expandable_container_expandable_container__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__donut_chart_donut_chart__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__duration_display_donut_duration_display_donut__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_display_time_display__["a" /* TimeDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__daily_duration_indicator_daily_duration_indicator__["a" /* DailyDurationIndicatorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__basic_durations_display_basic_durations_display__["a" /* BasicDurationsDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_7__basic_time_display_basic_time_display__["a" /* BasicTimeDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__expandable_container_expandable_container__["a" /* ExpandableContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__donut_chart_donut_chart__["a" /* DonutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__duration_display_donut_duration_display_donut__["a" /* DurationDisplayDonutComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__["a" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_display_time_display__["a" /* TimeDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__daily_duration_indicator_daily_duration_indicator__["a" /* DailyDurationIndicatorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__basic_durations_display_basic_durations_display__["a" /* BasicDurationsDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_7__basic_time_display_basic_time_display__["a" /* BasicTimeDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__expandable_container_expandable_container__["a" /* ExpandableContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__donut_chart_donut_chart__["a" /* DonutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__duration_display_donut_duration_display_donut__["a" /* DurationDisplayDonutComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_settings_timer_settings__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overview_more_actions_overview_more_actions__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_iconSwitch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tracking_storage_tracking_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_timer_storage_timer_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OverviewPage = (function () {
    function OverviewPage(navCtrl, navParams, settingStorage, generalTimer, trackingCalc, trackingStorage, timerStorage, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingStorage = settingStorage;
        this.generalTimer = generalTimer;
        this.trackingCalc = trackingCalc;
        this.trackingStorage = trackingStorage;
        this.timerStorage = timerStorage;
        this.popoverCtrl = popoverCtrl;
        this.currentDuration = __WEBPACK_IMPORTED_MODULE_9_moment__["duration"](0);
        this.dailyDuration = __WEBPACK_IMPORTED_MODULE_9_moment__["duration"](0);
        this.weeklyDuration = __WEBPACK_IMPORTED_MODULE_9_moment__["duration"](0);
        this.trackings = [];
        this.destroySubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        this.timer = this.navParams.get('timer');
        this.moreActionsPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_1__overview_more_actions_overview_more_actions__["a" /* OverviewMoreActionsPage */], {
            timerId: this.timer.id
        });
    }
    OverviewPage.prototype.ionViewDidLoad = function () {
    };
    OverviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSettings();
        this.settingStorage.timerSettingChanged.filter(function (timerId) { return timerId = _this.timer.id; })
            .takeUntil(this.destroySubject.first())
            .subscribe(function (_) { return _this.updateSettings(); });
        this.generalTimer.subsribeToTrigger(this.destroySubject, function (_) {
            _this.updateDurations();
        });
        this.updateDurations();
    };
    OverviewPage.prototype.ngOnChanges = function () {
        var _this = this;
        this.settingStorage.getTimerSettingByTimerId(this.timer.id)
            .then(function (settings) { return _this.timerSettings = settings; });
    };
    OverviewPage.prototype.runningIcon = function () {
        return this.timer.isRunning ? 'ios-square-outline' : 'ios-play-outline';
    };
    OverviewPage.prototype.updateSettings = function () {
        var _this = this;
        this.settingStorage.getTimerSettingByTimerId(this.timer.id)
            .then(function (settings) { return _this.timerSettings = settings; });
    };
    OverviewPage.prototype.updateDurations = function () {
        var _this = this;
        this.trackingCalc.getRunningDuration(this.timer.id)
            .then(function (duration) { return _this.currentDuration = duration; });
        this.trackingCalc.getDayDuration(this.timer.id, __WEBPACK_IMPORTED_MODULE_9_moment__())
            .then(function (duration) { return _this.dailyDuration = duration; });
        this.trackingCalc.getWeekDuration(this.timer.id, __WEBPACK_IMPORTED_MODULE_9_moment__().weeks())
            .then(function (duration) { return _this.weeklyDuration = duration; });
        this.trackingStorage.getAllTrackingsByTimerId(this.timer.id)
            .then(function (trackings) { return _this.trackings = trackings; });
    };
    OverviewPage.prototype.ngOnDestroy = function () {
        this.destroySubject.next();
    };
    OverviewPage.prototype.playStop = function () {
        this.timer.isRunning ? this.trackingStorage.stopTrackingTimer(this.timer.id) :
            this.trackingStorage.startTrackingTimer(this.timer.id);
        this.timer.isRunning = !this.timer.isRunning;
        this.timerStorage.modifyTimer(this.timer);
    };
    Object.defineProperty(OverviewPage.prototype, "dailyTrackings", {
        get: function () {
            if (!this.trackings)
                return [];
            return this.trackings.filter(function (tracking) {
                return __WEBPACK_IMPORTED_MODULE_9_moment__(tracking.startTime).isAfter(__WEBPACK_IMPORTED_MODULE_9_moment__().hours(0).minutes(0).minutes(0));
            }).reverse();
        },
        enumerable: true,
        configurable: true
    });
    OverviewPage.prototype.openMoreActions = function (event) {
        this.moreActionsPopover.present({ ev: event });
    };
    OverviewPage.prototype.openEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__timer_settings_timer_settings__["a" /* TimerSettingsPage */], {
            timer: this.timer
        });
    };
    OverviewPage.prototype.getDurationByTracking = function (tracking) {
        return __WEBPACK_IMPORTED_MODULE_9_moment__["duration"](__WEBPACK_IMPORTED_MODULE_9_moment__(tracking.endTime ? tracking.endTime : new Date()).diff(__WEBPACK_IMPORTED_MODULE_9_moment__(tracking.startTime)));
    };
    OverviewPage.prototype.getTrackingClass = function (tracking) {
        var classes = ['singleTracking'];
        if (!tracking.endTime)
            classes.push('runningTracking');
        return classes.join(' ');
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview\overview.html"*/'<!--\n  Generated template for the OverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ timer.name }}</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only color="primary" (click)="openEdit()">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n        <button ion-button icon-only color="primary" (click)="openMoreActions($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="overviewTop">\n      <div class="largeTimers">\n        <time-display [duration]="currentDuration"[showSeconds]=false></time-display>\n        <span class="timeSeparator">/</span>\n        <time-display [duration]="dailyDuration" [showSeconds]=false></time-display>\n      </div>\n      <button ion-button icon-only color="primary" (click)="playStop()" clear color="secondary">\n          <ion-icon [@iconSwitch]="runningIcon()" [name]="runningIcon()"></ion-icon>\n        </button>\n  </div>\n\n  <h1 class="subTitle">Daily</h1>\n\n  <div class="donutChartWrapper">\n      <duration-display-donut *ngIf="timerSettings" [radius]="70" [width]="20" [actual]="dailyDuration.asMilliseconds()" [target]="timerSettings.targetDayTime.asMilliseconds()">\n        <div class="donutText">\n            <time-display [duration]="dailyDuration"[showSeconds]=false label="logged"></time-display>\n            <span class="timeSeparator">/</span>\n            <time-display [duration]="timerSettings.targetDayTime" [showSeconds]=false label="target"></time-display>    \n        </div>\n      </duration-display-donut>\n    </div>\n\n  <!-- <basic-durations-display [actual]="dailyDuration" [target]="timerSettings.targetDayTime" *ngIf="timerSettings"></basic-durations-display> -->\n  <expandable-container title="Trackings" class="trackingContainer">\n    <div class="trackingList">\n      <div class="singleTracking trackingHeader">\n        <span>Start</span>\n        <span>Duration</span>\n        <span>End</span>\n      </div>\n        <div *ngFor="let tracking of dailyTrackings" [class]="getTrackingClass(tracking)">\n          <basic-time-display [date]="tracking.startTime"></basic-time-display>\n          -\n          <time-display [duration]="getDurationByTracking(tracking)" [showSeconds]=false></time-display>\n          -\n          <basic-time-display [date]="tracking.endTime"></basic-time-display>\n        </div>\n    </div>\n  </expandable-container>\n\n  <h1 class="subTitle">Weekly</h1>\n  <basic-durations-display [actual]="weeklyDuration" [target]="timerSettings.targetWeekTime" *ngIf="timerSettings"></basic-durations-display>\n\n</ion-content>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview\overview.html"*/,
            animations: [
                __WEBPACK_IMPORTED_MODULE_2__animations_iconSwitch__["b" /* iconSwitch */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* PopoverController */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTimer; });
var SingleTimer = (function () {
    function SingleTimer() {
        this.isRunning = false;
        this.id = new Date().valueOf();
    }
    return SingleTimer;
}());

//# sourceMappingURL=single-timer.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_storage_tracking_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_setting_storage_timer_setting_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TIMERS_KEY = 'timers';
/*
  Generated class for the TimerStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimerStorageProvider = (function () {
    function TimerStorageProvider(storage, timerSettingStorage, trackingStorage) {
        this.storage = storage;
        this.timerSettingStorage = timerSettingStorage;
        this.trackingStorage = trackingStorage;
        this.timersChangedSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.timersChanged = this.timersChangedSubject.asObservable();
    }
    TimerStorageProvider.prototype.triggerTimersChanged = function () {
        var _this = this;
        this.getAllTimers().then(function (timers) { return _this.timersChangedSubject.next(timers); });
    };
    TimerStorageProvider.prototype.getAllTimers = function () {
        return this.storage.get(TIMERS_KEY).then(function (timers) { return timers; });
    };
    TimerStorageProvider.prototype.addTimer = function (timer) {
        var _this = this;
        this.getAllTimers().then(function (timers) {
            if (!timers || !Array.isArray(timers))
                timers = [];
            timers.push(timer);
            _this.storage.set(TIMERS_KEY, timers).then(function (_) { return _this.triggerTimersChanged(); });
        });
    };
    TimerStorageProvider.prototype.getTimerById = function (timerId) {
        return this.getAllTimers().then(function (timers) { return timers.find(function (timer) { return timer.id === timerId; }); });
    };
    TimerStorageProvider.prototype.removeTimer = function (singleTimer) {
        var _this = this;
        this.getAllTimers().then(function (timers) {
            timers.splice(timers.indexOf(singleTimer), 1);
            _this.timerSettingStorage.removeTimerSettingsByTimerId(singleTimer.id);
            _this.trackingStorage.removeAllByTimer(singleTimer.id);
            _this.storage.set(TIMERS_KEY, timers).then(function (_) { return _this.triggerTimersChanged(); });
        });
    };
    TimerStorageProvider.prototype.modifyTimer = function (singleTimer) {
        var _this = this;
        return this.getAllTimers().then(function (timers) {
            timers[timers.findIndex(function (timer) { return timer.id === singleTimer.id; })] = singleTimer;
            return _this.storage.set(TIMERS_KEY, timers).then(function (_) { return _this.triggerTimersChanged(); });
        });
    };
    TimerStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */]])
    ], TimerStorageProvider);
    return TimerStorageProvider;
}());

//# sourceMappingURL=timer-storage.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/overview-more-actions/overview-more-actions.module": [
		434
	],
	"../pages/overview/overview.module": [
		171
	],
	"../pages/timer-settings/timer-settings.module": [
		436
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 433;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewMoreActionsPageModule", function() { return OverviewMoreActionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_more_actions__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverviewMoreActionsPageModule = (function () {
    function OverviewMoreActionsPageModule() {
    }
    OverviewMoreActionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__overview_more_actions__["a" /* OverviewMoreActionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__overview_more_actions__["a" /* OverviewMoreActionsPage */]),
            ],
        })
    ], OverviewMoreActionsPageModule);
    return OverviewMoreActionsPageModule;
}());

//# sourceMappingURL=overview-more-actions.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewMoreActionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OverviewMoreActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OverviewMoreActionsPage = (function () {
    function OverviewMoreActionsPage(navCtrl, navParams, viewCtrl, appCtrl, timerStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.timerStorage = timerStorage;
    }
    OverviewMoreActionsPage.prototype.ionViewDidLoad = function () { };
    OverviewMoreActionsPage.prototype.ngOnInit = function () {
        this.timerId = this.navParams.get('timerId');
    };
    OverviewMoreActionsPage.prototype.deleteTimer = function () {
        var _this = this;
        this.timerStorage.getTimerById(this.timerId)
            .then(function (timer) { return _this.timerStorage.removeTimer(timer); })
            .then(function (_) { return _this.viewCtrl.dismiss()
            .then(function (_) { return _this.appCtrl.getRootNavs()[0].pop(); }); });
    };
    OverviewMoreActionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-overview-more-actions',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview-more-actions\overview-more-actions.html"*/'<button ion-item icon-left (click)="deleteTimer()">\n    <ion-icon name="trash"></ion-icon>\n    Delete\n</button>'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview-more-actions\overview-more-actions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */]])
    ], OverviewMoreActionsPage);
    return OverviewMoreActionsPage;
}());

//# sourceMappingURL=overview-more-actions.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerSettingsPageModule", function() { return TimerSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_settings__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimerSettingsPageModule = (function () {
    function TimerSettingsPageModule() {
    }
    TimerSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timer_settings__["a" /* TimerSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timer_settings__["a" /* TimerSettingsPage */])
            ],
        })
    ], TimerSettingsPageModule);
    return TimerSettingsPageModule;
}());

//# sourceMappingURL=timer-settings.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_settings_timer_settings__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_array_helper__ = __webpack_require__(819);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, timerStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.timerStorage = timerStorage;
        this.timers = [];
        this.timerStorage.timersChanged.subscribe(function (timersNew) {
            _this.timers = Object(__WEBPACK_IMPORTED_MODULE_4__helper_array_helper__["a" /* mergeArraysGraceful */])(_this.timers, timersNew, function (timer1, timer2) { return timer1.id === timer2.id; });
        });
        this.timerStorage.getAllTimers().then(function (timers) { return _this.timers = timers; });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.addNewTimer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__timer_settings_timer_settings__["a" /* TimerSettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="mainBckgr">\n\n    <ion-title>\n\n      Time Tracking\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="homeBckgr">\n\n  <timer *ngFor="let aTimer of timers" [singleTimer]="aTimer" ></timer>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="secondary" outline (click)="addNewTimer()">\n\n        <ion-icon name="md-add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(488);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_overview_overview_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_tracking_storage_tracking_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_timer_settings_timer_settings_module__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/overview-more-actions/overview-more-actions.module#OverviewMoreActionsPageModule', name: 'OverviewMoreActionsPage', segment: 'overview-more-actions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer-settings/timer-settings.module#TimerSettingsPageModule', name: 'TimerSettingsPage', segment: 'timer-settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_timer_settings_timer_settings_module__["TimerSettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_overview_overview_module__["OverviewPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */]
            ],
            schemas: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_overview_overview__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tracking_storage_tracking_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_single_timer__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimerComponent = (function () {
    function TimerComponent(timerStorage, trackingStorage, navCtrl, generalTimerTrigger, trackingCalc) {
        this.timerStorage = timerStorage;
        this.trackingStorage = trackingStorage;
        this.navCtrl = navCtrl;
        this.generalTimerTrigger = generalTimerTrigger;
        this.trackingCalc = trackingCalc;
        this.destroySubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.runningDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
        this.dayDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
        this.weekDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDurations();
        this.generalTimerTrigger.subsribeToTrigger(this.destroySubject, function (timeInt) {
            _this.updateDurations();
        });
    };
    TimerComponent.prototype.updateDurations = function () {
        var _this = this;
        this.trackingCalc.getRunningDuration(this.singleTimer.id)
            .then(function (duration) { return _this.runningDuration = duration; });
        this.trackingCalc.getDayDuration(this.singleTimer.id, __WEBPACK_IMPORTED_MODULE_10_moment__())
            .then(function (duration) { return _this.dayDuration = duration; });
        this.trackingCalc.getWeekDuration(this.singleTimer.id, __WEBPACK_IMPORTED_MODULE_10_moment__().weeks())
            .then(function (duration) { return _this.weekDuration = duration; });
    };
    TimerComponent.prototype.startStopTimer = function () {
        this.singleTimer.isRunning ? this.trackingStorage.stopTrackingTimer(this.singleTimer.id) :
            this.trackingStorage.startTrackingTimer(this.singleTimer.id);
        this.singleTimer.isRunning = !this.singleTimer.isRunning;
        this.timerStorage.modifyTimer(this.singleTimer);
    };
    TimerComponent.prototype.runningIcon = function () {
        return this.singleTimer.isRunning ? 'ios-square-outline' : 'ios-play-outline';
    };
    TimerComponent.prototype.testDelete = function () {
        this.timerStorage.removeTimer(this.singleTimer);
    };
    TimerComponent.prototype.openOverview = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_overview_overview__["a" /* OverviewPage */], {
            timer: this.singleTimer
        });
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        this.destroySubject.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__classes_single_timer__["a" /* SingleTimer */])
    ], TimerComponent.prototype, "singleTimer", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\timer\timer.html"*/'<ion-card (click)="openOverview()">\n\n  <ion-card-content>\n\n    <div class="timer-content">\n\n        <ion-card-title>{{ singleTimer.name }}</ion-card-title>\n\n    \n\n        <time-display *ngIf="runningDuration" [duration]="runningDuration"></time-display>\n\n        <span class="durationSeparator">/</span>\n\n        <time-display *ngIf="dayDuration" [duration]="dayDuration"></time-display>\n\n        <span class="durationSeparator">/</span>\n\n        <time-display *ngIf="weekDuration" [duration]="weekDuration"></time-display>\n\n    </div>\n\n    <div class="timer-button">\n\n      <button ion-button icon-only color="primary" (click)="startStopTimer(); $event.stopPropagation()" clear color="secondary">\n\n          <ion-icon [@iconSwitch]="runningIcon()"  [name]="runningIcon()"></ion-icon>\n\n        </button>\n\n    </div>    \n\n  </ion-card-content>\n\n  <daily-duration-indicator [timerId]="singleTimer.id"></daily-duration-indicator>\n\n</ion-card>'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\timer\timer.html"*/,
            animations: [
                __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__["b" /* iconSwitch */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */]])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_timer_tracking__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TIMER_TRACKING_KEY = 'timerTracking';
/*
  Generated class for the TrackingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrackingStorageProvider = (function () {
    function TrackingStorageProvider(storage) {
        this.storage = storage;
        this.trackingChangedSubjects = new Map();
    }
    TrackingStorageProvider.prototype.getAllTrackingsByTimerId = function (timerId) {
        return this.storage.get(TIMER_TRACKING_KEY + timerId).then(function (trackings) { return trackings; });
    };
    TrackingStorageProvider.prototype.storeTrackingsByTimerId = function (timerId, trackings) {
        return this.storage.set(TIMER_TRACKING_KEY + timerId, trackings);
    };
    TrackingStorageProvider.prototype.startTrackingTimer = function (timerId) {
        var _this = this;
        return this.getAllTrackingsByTimerId(timerId).then(function (trackings) {
            if (!trackings || !Array.isArray(trackings))
                trackings = [];
            var runningTracking = trackings.find(function (tracking) { return tracking.endTime === undefined; });
            if (runningTracking)
                runningTracking.endTime = new Date();
            var newTimerTracking = new __WEBPACK_IMPORTED_MODULE_0__classes_timer_tracking__["a" /* TimerTracking */](new Date(), new Date(), undefined);
            trackings.push(newTimerTracking);
            return _this.storeTrackingsByTimerId(timerId, trackings);
        });
    };
    TrackingStorageProvider.prototype.stopTrackingTimer = function (timerId) {
        var _this = this;
        return this.getAllTrackingsByTimerId(timerId).then(function (trackings) {
            if (!trackings || !Array.isArray(trackings))
                trackings = [];
            var runningTracking = trackings.find(function (tracking) { return tracking.endTime === undefined; });
            if (runningTracking)
                runningTracking.endTime = new Date();
            return _this.storeTrackingsByTimerId(timerId, trackings);
        });
    };
    TrackingStorageProvider.prototype.removeAllByTimer = function (timerId) {
        var _this = this;
        return this.storage.set(TIMER_TRACKING_KEY + timerId, [])
            .then(function (success) {
            _this.trackingChangedSubjects.delete(timerId);
            return success;
        });
    };
    TrackingStorageProvider.prototype.getTrackingChangedSubject = function (timerId) {
        if (!this.trackingChangedSubjects.has(timerId))
            this.trackingChangedSubjects.set(timerId, new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]());
        return this.trackingChangedSubjects.get(timerId);
    };
    TrackingStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TrackingStorageProvider);
    return TrackingStorageProvider;
}());

//# sourceMappingURL=tracking-storage.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerTracking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);


var TimerTracking = (function () {
    function TimerTracking(date, startTime, endTime) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    TimerTracking.prototype.getDurationTime = function () {
        var milliSecDiff = (this.endTime ? this.endTime.getMilliseconds() : new Date().getMilliseconds()) - this.startTime.getMilliseconds();
        return __WEBPACK_IMPORTED_MODULE_0__time__["a" /* Time */].createBySecondsNumber(milliSecDiff * 1000);
    };
    TimerTracking.prototype.getDuration = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](__WEBPACK_IMPORTED_MODULE_1_moment__(this.endTime ? this.endTime : null).diff(__WEBPACK_IMPORTED_MODULE_1_moment__(this.startTime)));
    };
    return TimerTracking;
}());

//# sourceMappingURL=timer-tracking.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Time; });
var Time = (function () {
    function Time(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    Time.createByDate = function (date) {
        return new Time(date.getHours(), date.getMinutes(), date.getSeconds());
    };
    Time.createBySecondsNumber = function (seconds) {
        return new Time(Math.floor(Math.floor(seconds / 60) / 60), Math.floor(seconds / 60), seconds % 60);
    };
    Time.prototype.asSecondsToday = function () {
        return this.hours * 60 * 60 +
            this.minutes * 60 +
            this.seconds;
    };
    Time.prototype.add = function (time) {
        return Time.createBySecondsNumber(this.asSecondsToday() + time.asSecondsToday());
    };
    Time.prototype.subtract = function (time) {
        return Time.createBySecondsNumber(this.asSecondsToday() - time.asSecondsToday());
    };
    return Time;
}());

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-au": 200,
	"./en-au.js": 200,
	"./en-ca": 201,
	"./en-ca.js": 201,
	"./en-gb": 202,
	"./en-gb.js": 202,
	"./en-ie": 203,
	"./en-ie.js": 203,
	"./en-il": 204,
	"./en-il.js": 204,
	"./en-nz": 205,
	"./en-nz.js": 205,
	"./eo": 206,
	"./eo.js": 206,
	"./es": 207,
	"./es-do": 208,
	"./es-do.js": 208,
	"./es-us": 209,
	"./es-us.js": 209,
	"./es.js": 207,
	"./et": 210,
	"./et.js": 210,
	"./eu": 211,
	"./eu.js": 211,
	"./fa": 212,
	"./fa.js": 212,
	"./fi": 213,
	"./fi.js": 213,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 215,
	"./fr-ca": 216,
	"./fr-ca.js": 216,
	"./fr-ch": 217,
	"./fr-ch.js": 217,
	"./fr.js": 215,
	"./fy": 218,
	"./fy.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-latn": 221,
	"./gom-latn.js": 221,
	"./gu": 222,
	"./gu.js": 222,
	"./he": 223,
	"./he.js": 223,
	"./hi": 224,
	"./hi.js": 224,
	"./hr": 225,
	"./hr.js": 225,
	"./hu": 226,
	"./hu.js": 226,
	"./hy-am": 227,
	"./hy-am.js": 227,
	"./id": 228,
	"./id.js": 228,
	"./is": 229,
	"./is.js": 229,
	"./it": 230,
	"./it.js": 230,
	"./ja": 231,
	"./ja.js": 231,
	"./jv": 232,
	"./jv.js": 232,
	"./ka": 233,
	"./ka.js": 233,
	"./kk": 234,
	"./kk.js": 234,
	"./km": 235,
	"./km.js": 235,
	"./kn": 236,
	"./kn.js": 236,
	"./ko": 237,
	"./ko.js": 237,
	"./ky": 238,
	"./ky.js": 238,
	"./lb": 239,
	"./lb.js": 239,
	"./lo": 240,
	"./lo.js": 240,
	"./lt": 241,
	"./lt.js": 241,
	"./lv": 242,
	"./lv.js": 242,
	"./me": 243,
	"./me.js": 243,
	"./mi": 244,
	"./mi.js": 244,
	"./mk": 245,
	"./mk.js": 245,
	"./ml": 246,
	"./ml.js": 246,
	"./mr": 247,
	"./mr.js": 247,
	"./ms": 248,
	"./ms-my": 249,
	"./ms-my.js": 249,
	"./ms.js": 248,
	"./mt": 250,
	"./mt.js": 250,
	"./my": 251,
	"./my.js": 251,
	"./nb": 252,
	"./nb.js": 252,
	"./ne": 253,
	"./ne.js": 253,
	"./nl": 254,
	"./nl-be": 255,
	"./nl-be.js": 255,
	"./nl.js": 254,
	"./nn": 256,
	"./nn.js": 256,
	"./pa-in": 257,
	"./pa-in.js": 257,
	"./pl": 258,
	"./pl.js": 258,
	"./pt": 259,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 259,
	"./ro": 261,
	"./ro.js": 261,
	"./ru": 262,
	"./ru.js": 262,
	"./sd": 263,
	"./sd.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 269,
	"./sr-cyrl": 270,
	"./sr-cyrl.js": 270,
	"./sr.js": 269,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./tet": 276,
	"./tet.js": 276,
	"./tg": 277,
	"./tg.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./ug-cn": 285,
	"./ug-cn.js": 285,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 493;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerSettingStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SETTING_STORAGE_KEY = 'timerSetting';


/*
  Generated class for the TimerSettingStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimerSettingStorageProvider = (function () {
    function TimerSettingStorageProvider(storage) {
        this.storage = storage;
        this.timerSettingChangedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.timerSettingChanged = this.timerSettingChangedSubject.asObservable();
    }
    TimerSettingStorageProvider.prototype.getTimerSettingByTimerId = function (timerId) {
        var _this = this;
        return this.storage.get(SETTING_STORAGE_KEY + timerId)
            .then(function (settingsString) { return JSON.parse(settingsString); })
            .then(function (setting) { return setting ? _this.parseSettingDurationFields(setting) : setting; })
            .catch(function (err) {
            console.error(err);
            return null;
        });
    };
    TimerSettingStorageProvider.prototype.parseSettingDurationFields = function (setting) {
        setting.targetDayTime = setting.targetDayTime ?
            __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](setting.targetDayTime) : __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](0);
        setting.targetWeekTime = setting.targetWeekTime ?
            __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](setting.targetWeekTime) : __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](0);
        return setting;
    };
    TimerSettingStorageProvider.prototype.setTimerSettingByTimerId = function (timerId, setting) {
        var _this = this;
        return this.storage.set(SETTING_STORAGE_KEY + timerId, JSON.stringify(setting))
            .then(function (success) {
            _this.timerSettingChangedSubject.next(timerId);
            return success;
        });
    };
    TimerSettingStorageProvider.prototype.removeTimerSettingsByTimerId = function (timerId) {
        return this.storage.remove(SETTING_STORAGE_KEY + timerId);
    };
    TimerSettingStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], TimerSettingStorageProvider);
    return TimerSettingStorageProvider;
}());

//# sourceMappingURL=timer-setting-storage.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerSetting; });
var TimerSetting = (function () {
    function TimerSetting() {
    }
    return TimerSetting;
}());

//# sourceMappingURL=timer-settings.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeArraysGraceful;
function mergeArraysGraceful(sourceArray, mergeArray, comparator) {
    if (sourceArray) {
        sourceArray.forEach(function (instance1, index, arr) {
            var instance = mergeArray.find(function (instance2) { return comparator(instance1, instance2); });
            if (instance) {
                Object.assign(instance1, instance);
                mergeArray.splice(mergeArray.findIndex(function (instance2) { return comparator(instance1, instance2); }), 1);
            }
            else {
                arr.splice(index, 1);
            }
        });
        return sourceArray.concat(mergeArray);
    }
    else
        return mergeArray;
}
//# sourceMappingURL=array-helper.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TimeDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimeDisplayComponent = (function () {
    function TimeDisplayComponent() {
        this.showSeconds = true;
    }
    TimeDisplayComponent.prototype.formatNumber = function (number) {
        return ("0" + number).slice(-2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TimeDisplayComponent.prototype, "duration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TimeDisplayComponent.prototype, "showSeconds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TimeDisplayComponent.prototype, "label", void 0);
    TimeDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'time-display',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\time-display\time-display.html"*/'<span class="displayContainer">\n    <span>{{duration.hours()}}<span class="minutes"><span class="timeIndicator">H</span> {{formatNumber(duration.minutes())}}<span class="timeIndicator">M</span></span><span class="seconds" *ngIf="duration.seconds() !== undefined && showSeconds"> {{ formatNumber(duration.seconds()) }}<span class="timeIndicator">S</span></span></span>\n    <span class="displayLabel" *ngIf="label">{{label}}</span>\n</span>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\time-display\time-display.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimeDisplayComponent);
    return TimeDisplayComponent;
}());

//# sourceMappingURL=time-display.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyDurationIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DailyDurationIndicatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DailyDurationIndicatorComponent = (function () {
    function DailyDurationIndicatorComponent(timerSettings, generalTrigger, trackingCalc, timerStorage) {
        this.timerSettings = timerSettings;
        this.generalTrigger = generalTrigger;
        this.trackingCalc = trackingCalc;
        this.timerStorage = timerStorage;
        this.avgDaily = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](0).add(1, 'minutes');
        this.dailyDuration = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](1);
        this.destroySubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
    }
    DailyDurationIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalTrigger.subsribeToTrigger(this.destroySubject, function (_) {
            _this.trackingCalc.getDayDuration(_this.timerId, __WEBPACK_IMPORTED_MODULE_5_moment__())
                .then(function (duration) { return _this.dailyDuration = duration; });
        });
        this.updateSettings();
        this.timerStorage.timersChanged.takeUntil(this.destroySubject).subscribe(function (_) {
            _this.updateSettings();
        });
    };
    DailyDurationIndicatorComponent.prototype.updateSettings = function () {
        var _this = this;
        this.timerSettings.getTimerSettingByTimerId(this.timerId)
            .then(function (settings) { return settings ? _this.avgDaily = settings.targetDayTime : null; })
            .catch(function (err) { return console.error(err); });
    };
    DailyDurationIndicatorComponent.prototype.ngOnDestroy = function () {
        this.destroySubject.next();
    };
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "runningPercent", {
        get: function () {
            return (this.dailyDuration.asMilliseconds() / this.avgDaily.asMilliseconds()) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "missingPercent", {
        get: function () {
            return (this.avgDaily.asMilliseconds() - this.dailyDuration.asMilliseconds()) / this.avgDaily.asMilliseconds() * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "isLongerThanAvg", {
        get: function () {
            return this.dailyDuration.asMilliseconds() > this.avgDaily.asMilliseconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "overAveragePercent", {
        get: function () {
            return (this.dailyDuration.asMilliseconds() - this.avgDaily.asMilliseconds()) / this.dailyDuration.asMilliseconds() * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "averagePercent", {
        get: function () {
            return (this.avgDaily.asMilliseconds() / this.dailyDuration.asMilliseconds()) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "firstStyle", {
        get: function () {
            return {
                height: '.5em',
                transition: 'all .5s',
                'flex-basis': (this.isLongerThanAvg ? this.averagePercent : this.runningPercent) + '%'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyDurationIndicatorComponent.prototype, "secondStyle", {
        get: function () {
            return {
                height: '.5em',
                transition: 'all .5s',
                'flex-basis': (this.isLongerThanAvg ? this.overAveragePercent : this.missingPercent) + '%'
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DailyDurationIndicatorComponent.prototype, "timerId", void 0);
    DailyDurationIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'daily-duration-indicator',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\daily-duration-indicator\daily-duration-indicator.html"*/'<!-- Generated template for the DailyDurationIndicatorComponent component -->\n<div class="indicatorParent">\n  <span [ngStyle]="firstStyle" [class]="isLongerThanAvg ? \'average\':\'running\'"></span>\n  <span [ngStyle]="secondStyle" [class]="isLongerThanAvg ? \'more\':\'missing\'"></span>\n</div>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\daily-duration-indicator\daily-duration-indicator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */]])
    ], DailyDurationIndicatorComponent);
    return DailyDurationIndicatorComponent;
}());

//# sourceMappingURL=daily-duration-indicator.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDurationsDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BasicDurationsDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BasicDurationsDisplayComponent = (function () {
    function BasicDurationsDisplayComponent() {
    }
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "runningPercent", {
        get: function () {
            return (this.actual.asMilliseconds() / this.target.asMilliseconds()) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "missingPercent", {
        get: function () {
            return (this.target.asMilliseconds() - this.actual.asMilliseconds()) / this.target.asMilliseconds() * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "isLongerThanAvg", {
        get: function () {
            return this.actual.asMilliseconds() > this.target.asMilliseconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "overAveragePercent", {
        get: function () {
            return (this.actual.asMilliseconds() - this.target.asMilliseconds()) / this.actual.asMilliseconds() * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "averagePercent", {
        get: function () {
            return (this.target.asMilliseconds() / this.actual.asMilliseconds()) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "firstStyle", {
        get: function () {
            return {
                transition: 'all .5s',
                'flex-basis': (this.firstPercent) + '%'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "secondStyle", {
        get: function () {
            return {
                transition: 'all .5s',
                'flex-basis': (this.secondPercent) + '%'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "firstPercent", {
        get: function () {
            return this.isLongerThanAvg ? this.averagePercent : this.runningPercent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "secondPercent", {
        get: function () {
            return this.isLongerThanAvg ? this.overAveragePercent : this.missingPercent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "firstClass", {
        get: function () {
            return (this.isLongerThanAvg ? 'average' : 'running') + ' bar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "secondClass", {
        get: function () {
            return (this.isLongerThanAvg ? 'more' : 'missing') + ' bar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "showFirst", {
        get: function () {
            return this.firstPercent > 25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "showSecond", {
        get: function () {
            return this.secondPercent > 25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "diffToTarget", {
        get: function () {
            return this.target.clone().subtract(this.actual);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDurationsDisplayComponent.prototype, "diffToActual", {
        get: function () {
            return this.actual.clone().subtract(this.target);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BasicDurationsDisplayComponent.prototype, "actual", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BasicDurationsDisplayComponent.prototype, "target", void 0);
    BasicDurationsDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'basic-durations-display',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\basic-durations-display\basic-durations-display.html"*/'<div class="indicatorParent" *ngIf="actual && target">\n    <span [ngStyle]="firstStyle" [class]="firstClass">\n      <time-display [duration]="isLongerThanAvg ? target : actual"[showSeconds]=false *ngIf="showFirst"></time-display>\n    </span>\n    <span [ngStyle]="secondStyle"  [class]="secondClass">\n        <time-display [duration]="isLongerThanAvg ? diffToActual : diffToTarget"[showSeconds]=false *ngIf="showSecond"></time-display>\n    </span>\n  </div>'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\basic-durations-display\basic-durations-display.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicDurationsDisplayComponent);
    return BasicDurationsDisplayComponent;
}());

//# sourceMappingURL=basic-durations-display.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTimeDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BasicTimeDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BasicTimeDisplayComponent = (function () {
    function BasicTimeDisplayComponent() {
    }
    Object.defineProperty(BasicTimeDisplayComponent.prototype, "currentAsMoment", {
        get: function () {
            return this.moment ? this.moment : __WEBPACK_IMPORTED_MODULE_1_moment__(this.date);
        },
        enumerable: true,
        configurable: true
    });
    BasicTimeDisplayComponent.prototype.formatNumber = function (number) {
        return ("0" + number).slice(-2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Date)
    ], BasicTimeDisplayComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BasicTimeDisplayComponent.prototype, "moment", void 0);
    BasicTimeDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'basic-time-display',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\basic-time-display\basic-time-display.html"*/'<!-- Generated template for the BasicTimeDisplayComponent component -->\n<span>{{formatNumber(currentAsMoment.hours())}}:{{formatNumber(currentAsMoment.minutes())}}</span>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\basic-time-display\basic-time-display.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicTimeDisplayComponent);
    return BasicTimeDisplayComponent;
}());

//# sourceMappingURL=basic-time-display.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_sizeMorph__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExpandableContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableContainerComponent = (function () {
    function ExpandableContainerComponent() {
        this.isExpanded = false;
    }
    Object.defineProperty(ExpandableContainerComponent.prototype, "expanded", {
        get: function () {
            return this.isExpanded.toString();
        },
        enumerable: true,
        configurable: true
    });
    ExpandableContainerComponent.prototype.toggleExpanded = function () {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ExpandableContainerComponent.prototype, "title", void 0);
    ExpandableContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'expandable-container',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\expandable-container\expandable-container.html"*/'<div>\n  <ion-item class="containerTitle" (click)="toggleExpanded()" no-lines>\n    <ion-title>{{ title }}</ion-title>\n    <ion-icon [@iconFlip]="expanded" name="ios-arrow-up" item-end></ion-icon>\n  </ion-item>\n  <div [@expand]="expanded">\n    <ng-content></ng-content>\n  </div>\n</div>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\expandable-container\expandable-container.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_sizeMorph__["a" /* expandTransition */], __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__["a" /* iconFlip */]]
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableContainerComponent);
    return ExpandableContainerComponent;
}());

//# sourceMappingURL=expandable-container.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(70);

var expandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('expand', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        height: '*'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        overflow: 'hidden',
        height: '0px',
        opacity: 0
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.25s ease-in-out'))
]);
//# sourceMappingURL=sizeMorph.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonutChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DonutChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DonutChartComponent = (function () {
    function DonutChartComponent() {
        this.items = [];
        this.radius = 50;
        this.width = 20;
        this.fontColor = "black";
        this.fontSize = 10;
    }
    Object.defineProperty(DonutChartComponent.prototype, "perimeter", {
        get: function () {
            return Math.PI * 2 * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonutChartComponent.prototype, "total", {
        get: function () {
            return this.items.map(function (a) { return a.count; }).
                reduce(function (x, y) { return x + y; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonutChartComponent.prototype, "center", {
        get: function () {
            return this.radius + (this.width / 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonutChartComponent.prototype, "viewBox", {
        get: function () {
            return "0 0 " + (this.center * 2).toString() + " " + (this.center * 2).toString();
        },
        enumerable: true,
        configurable: true
    });
    DonutChartComponent.prototype.getOffset = function (index) {
        var percent = index === 0 ? 0 : this.items.slice(0, index).map(function (a) { return a.count; }).
            reduce(function (x, y) { return x + y; });
        return this.perimeter * percent / this.total;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DonutChartComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DonutChartComponent.prototype, "radius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DonutChartComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DonutChartComponent.prototype, "centerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DonutChartComponent.prototype, "fontColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DonutChartComponent.prototype, "fontSize", void 0);
    DonutChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'donut-chart',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\donut-chart\donut-chart.html"*/'<div class="container">\n<svg height="100%" width="100%" [attr.viewBox]="viewBox">  \n  <g>  \n   <circle *ngFor="let item of items;let i=index" [attr.cx]="center" \n   [attr.cy]="center" [attr.r]="radius" fill="transparent" [attr.stroke-width]="width"\n   [attr.stroke-dasharray]="perimeter" [attr.stroke-dashoffset]="getOffset(i)" [attr.stroke]="item.color"/> \n   </g> \n</svg>\n<div class="testText">\n  <ng-content></ng-content>\n</div>\n</div>'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\donut-chart\donut-chart.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DonutChartComponent);
    return DonutChartComponent;
}());

//# sourceMappingURL=donut-chart.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationDisplayDonutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DurationDisplayDonutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DurationDisplayDonutComponent = (function () {
    function DurationDisplayDonutComponent() {
        this.radius = 50;
        this.width = 20;
        this.target = 1;
        this.actual = .5;
        this.items = [
            {
                count: this.biggerThanTarget ? this.actual - this.target : this.target - this.actual,
                color: this.biggerThanTarget ? '#f3ffbd' : '#cc1243'
            },
            {
                count: this.biggerThanTarget ? this.target : this.actual,
                color: this.biggerThanTarget ? '#70c1b3' : '#247ba0'
            }
        ];
        console.log('Hello DurationDisplayDonutComponent Component');
        this.text = 'Hello World';
    }
    DurationDisplayDonutComponent.prototype.ngOnChanges = function () {
        this.items[0].count = this.biggerThanTarget ? this.actual - this.target : this.target - this.actual;
        this.items[0].color = this.biggerThanTarget ? '#F3FFBD' : '#E8144D';
        this.items[1].count = this.biggerThanTarget ? this.target : this.actual,
            this.items[1].color = this.biggerThanTarget ? '#70C1B3' : '#247BA0';
    };
    Object.defineProperty(DurationDisplayDonutComponent.prototype, "biggerThanTarget", {
        get: function () {
            return this.actual > this.target;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DurationDisplayDonutComponent.prototype, "radius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DurationDisplayDonutComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DurationDisplayDonutComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DurationDisplayDonutComponent.prototype, "actual", void 0);
    DurationDisplayDonutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'duration-display-donut',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\duration-display-donut\duration-display-donut.html"*/'<donut-chart [items]="items" [radius]="radius" [width]="width"\n  [fontSize]="30"><ng-content></ng-content></donut-chart>'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\components\duration-display-donut\duration-display-donut.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DurationDisplayDonutComponent);
    return DurationDisplayDonutComponent;
}());

//# sourceMappingURL=duration-display-donut.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralTimerTriggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeneralTimerTriggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeneralTimerTriggerProvider = (function () {
    function GeneralTimerTriggerProvider() {
        this.generalTimerTrigger = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].interval(1000);
    }
    GeneralTimerTriggerProvider.prototype.subsribeToTrigger = function (destroyObservable, callback) {
        this.generalTimerTrigger.takeUntil(destroyObservable.first()).subscribe(callback);
    };
    GeneralTimerTriggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GeneralTimerTriggerProvider);
    return GeneralTimerTriggerProvider;
}());

//# sourceMappingURL=general-timer-trigger.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingCalculationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tracking_storage_tracking_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TrackingCalculationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrackingCalculationProvider = (function () {
    function TrackingCalculationProvider(trackingStorage) {
        this.trackingStorage = trackingStorage;
    }
    TrackingCalculationProvider.prototype.getRunningDuration = function (timerId) {
        return this.trackingStorage.getAllTrackingsByTimerId(timerId)
            .then(function (trackings) { return trackings.find(function (tracking) { return tracking.endTime === undefined; }); })
            .then(function (tracking) {
            if (tracking) {
                return __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](__WEBPACK_IMPORTED_MODULE_2_moment__().diff(tracking.startTime));
            }
            else
                return __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](0);
        })
            .catch(function (_) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](0);
        });
    };
    TrackingCalculationProvider.prototype.getRangeDuration = function (timerId, startMoment, endMoment) {
        return this.trackingStorage.getAllTrackingsByTimerId(timerId)
            .then(function (trackings) {
            var sumSeconds = 0;
            trackings.forEach(function (tracking) {
                var startInRange = __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.startTime).isBetween(startMoment, endMoment);
                var endInRange = __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.endTime).isBetween(startMoment, endMoment);
                if (startInRange || endInRange) {
                    var startDate = startInRange ? __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.startTime) : startMoment;
                    var endDate = endInRange ? __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.endTime) : endMoment;
                    sumSeconds += endDate.diff(startDate);
                }
            });
            return __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](sumSeconds);
        })
            .catch(function (_) { return __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](0); });
    };
    TrackingCalculationProvider.prototype.getDayDuration = function (timerId, day) {
        return this.getRangeDuration(timerId, day.clone().hour(0).minute(0).second(0).millisecond(0), day.clone().hour(0).minute(0).second(0).millisecond(0).add(1, 'day'));
    };
    TrackingCalculationProvider.prototype.getWeekDuration = function (timerId, calenderWeek) {
        return this.getRangeDuration(timerId, this.getStartOfWeek(calenderWeek), this.getEndOfWeek(calenderWeek));
    };
    TrackingCalculationProvider.prototype.getStartOfWeek = function (calendarWeek) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().week(calendarWeek).startOf('isoWeek');
    };
    TrackingCalculationProvider.prototype.getEndOfWeek = function (calendarWeek) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().week(calendarWeek).endOf('isoWeek');
    };
    TrackingCalculationProvider.prototype.isSameDate = function (date1, date2) {
        return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
    };
    TrackingCalculationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */]])
    ], TrackingCalculationProvider);
    return TrackingCalculationProvider;
}());

//# sourceMappingURL=tracking-calculation.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconFlip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(70);

var iconSwitch = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('iconSwitch', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 1
        }))
    ])
]);
var iconFlip = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('iconFlip', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        transform: 'rotate(0deg)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        transform: 'rotate(180deg)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.25s ease-in-out'))
]);
//# sourceMappingURL=iconSwitch.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_timer_settings__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_single_timer__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TimerSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimerSettingsPage = (function () {
    function TimerSettingsPage(navCtrl, navParams, settingStorage, timerStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingStorage = settingStorage;
        this.timerStorage = timerStorage;
        this.addNew = true;
        this.editTimer = this.navParams.get('timer');
        if (this.editTimer) {
            this.addNew = false;
            this.editTimer = JSON.parse(JSON.stringify(this.editTimer));
            this.settingStorage.getTimerSettingByTimerId(this.editTimer.id)
                .then(function (settings) { return _this.timerSettings = JSON.parse(JSON.stringify(settings)); })
                .then(function (setting) { return _this.settingStorage.parseSettingDurationFields(setting); })
                .catch(function (err) { return _this.timerSettings = new __WEBPACK_IMPORTED_MODULE_2__classes_timer_settings__["a" /* TimerSetting */](); });
        }
        else {
            this.editTimer = new __WEBPACK_IMPORTED_MODULE_3__classes_single_timer__["a" /* SingleTimer */]();
            this.timerSettings = new __WEBPACK_IMPORTED_MODULE_2__classes_timer_settings__["a" /* TimerSetting */]();
        }
    }
    TimerSettingsPage.prototype.save = function () {
        if (!this.fieldsValid)
            return;
        if (!this.addNew) {
            this.timerStorage.modifyTimer(this.editTimer);
        }
        else {
            this.timerStorage.addTimer(this.editTimer);
        }
        this.settingStorage.setTimerSettingByTimerId(this.editTimer.id, this.timerSettings)
            .catch(function (err) { return console.error(err); });
        this.navCtrl.pop();
    };
    TimerSettingsPage.prototype.parseAsDuration = function (property) {
        if (this.timerSettings[property]) {
            this.timerSettings[property] = __WEBPACK_IMPORTED_MODULE_6_moment__["duration"](this.timerSettings[property]);
        }
    };
    Object.defineProperty(TimerSettingsPage.prototype, "fieldsValid", {
        get: function () {
            var valid = true;
            valid = this.editTimer.name && this.editTimer.name.length > 0;
            valid = valid ? this.timerSettings.targetDayTime && this.timerSettings.targetDayTime.asHours() > 0 : valid;
            valid = valid ? this.timerSettings.targetWeekTime && this.timerSettings.targetWeekTime.asHours() > 0 : valid;
            return valid;
        },
        enumerable: true,
        configurable: true
    });
    TimerSettingsPage.prototype.ionViewDidLoad = function () { };
    TimerSettingsPage.prototype.updateDayTimer = function (value) {
        this.timerSettings.targetDayTime = __WEBPACK_IMPORTED_MODULE_6_moment__["duration"](parseFloat(value), 'hours');
    };
    Object.defineProperty(TimerSettingsPage.prototype, "avgDayTime", {
        get: function () {
            return this.timerSettings.targetDayTime ? this.timerSettings.targetDayTime.asHours() : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimerSettingsPage.prototype, "avgWeekTime", {
        get: function () {
            return this.timerSettings.targetWeekTime ? this.timerSettings.targetWeekTime.asHours() : 0;
        },
        enumerable: true,
        configurable: true
    });
    TimerSettingsPage.prototype.updateWeekTimer = function (value) {
        this.timerSettings.targetWeekTime = __WEBPACK_IMPORTED_MODULE_6_moment__["duration"](parseFloat(value), 'hours');
    };
    TimerSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-timer-settings',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\timer-settings\timer-settings.html"*/'<!--\n  Generated template for the TimerSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="lightSecondary">\n    <ion-title>{{ addNew ? \'Add a new Timer\' : \'Edit timer \' + editTimer.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="primary" (click)="save()">\n        <ion-icon name="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input [(ngModel)]="editTimer.name" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="timerSettings">\n        <ion-label floating>Target daily time (in hours)</ion-label>\n        <!-- <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="targetDayTimeInput"></ion-datetime> -->\n        <ion-input (input)="updateDayTimer($event.target.value)" type="number" [value]="avgDayTime"></ion-input>\n\n    </ion-item>\n    <ion-item *ngIf="timerSettings">\n        <ion-label floating>Target weekly time (in hours)</ion-label>        \n        <ion-input (input)="updateWeekTimer($event.target.value)" type="number" [value]="avgWeekTime"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\timer-settings\timer-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */]])
    ], TimerSettingsPage);
    return TimerSettingsPage;
}());

//# sourceMappingURL=timer-settings.js.map

/***/ })

},[483]);
//# sourceMappingURL=main.js.map