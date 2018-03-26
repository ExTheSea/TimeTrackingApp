webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_timer_settings__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_single_timer__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
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

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyOverviewPageModule", function() { return WeeklyOverviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weekly_overview__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WeeklyOverviewPageModule = (function () {
    function WeeklyOverviewPageModule() {
    }
    WeeklyOverviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__weekly_overview__["a" /* WeeklyOverviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__weekly_overview__["a" /* WeeklyOverviewPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WeeklyOverviewPageModule);
    return WeeklyOverviewPageModule;
}());

//# sourceMappingURL=weekly-overview.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weekly_overview_weekly_overview__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_settings_timer_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_more_actions_overview_more_actions__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_iconSwitch__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tracking_storage_tracking_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_timer_storage_timer_storage__ = __webpack_require__(44);
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
        this.currentDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
        this.dailyDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
        this.weeklyDuration = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](0);
        this.trackings = [];
        this.destroySubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subject"]();
        this.timer = this.navParams.get('timer');
        this.moreActionsPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__overview_more_actions_overview_more_actions__["a" /* OverviewMoreActionsPage */], {
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
        this.trackingCalc.getDayDuration(this.timer.id, __WEBPACK_IMPORTED_MODULE_10_moment__())
            .then(function (duration) { return _this.dailyDuration = duration; });
        this.trackingCalc.getWeekDuration(this.timer.id, __WEBPACK_IMPORTED_MODULE_10_moment__().weeks())
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
                return __WEBPACK_IMPORTED_MODULE_10_moment__(tracking.startTime).isAfter(__WEBPACK_IMPORTED_MODULE_10_moment__().hours(0).minutes(0).minutes(0));
            }).reverse();
        },
        enumerable: true,
        configurable: true
    });
    OverviewPage.prototype.openMoreActions = function (event) {
        this.moreActionsPopover.present({ ev: event });
    };
    OverviewPage.prototype.openEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__timer_settings_timer_settings__["a" /* TimerSettingsPage */], {
            timer: this.timer
        });
    };
    OverviewPage.prototype.getDurationByTracking = function (tracking) {
        return __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](__WEBPACK_IMPORTED_MODULE_10_moment__(tracking.endTime ? tracking.endTime : new Date()).diff(__WEBPACK_IMPORTED_MODULE_10_moment__(tracking.startTime)));
    };
    OverviewPage.prototype.getTrackingClass = function (tracking) {
        var classes = ['singleTracking'];
        if (!tracking.endTime)
            classes.push('runningTracking');
        return classes.join(' ');
    };
    OverviewPage.prototype.navigateToWeekly = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__weekly_overview_weekly_overview__["a" /* WeeklyOverviewPage */], {
            timer: this.timer
        });
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview\overview.html"*/'<!--\n  Generated template for the OverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ timer.name }}</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only color="primary" (click)="openEdit()">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n        <button ion-button icon-only color="primary" (click)="openMoreActions($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="overviewTop">\n      <div class="largeTimers">\n        <time-display [duration]="currentDuration"[showSeconds]=false></time-display>\n        <span class="timeSeparator">/</span>\n        <time-display [duration]="dailyDuration" [showSeconds]=false></time-display>\n      </div>\n      <button ion-button icon-only color="primary" (click)="playStop()" clear color="secondary">\n          <ion-icon [@iconSwitch]="runningIcon()" [name]="runningIcon()"></ion-icon>\n        </button>\n  </div>\n\n  <h1 class="subTitle">Daily</h1>\n\n  <div class="donutChartWrapper">\n      <duration-display-donut *ngIf="timerSettings" [radius]="70" [width]="10" [actual]="dailyDuration.asMilliseconds()" [target]="timerSettings.targetDayTime.asMilliseconds()">\n        <div class="donutText">\n            <time-display [duration]="dailyDuration"[showSeconds]=false label="logged"></time-display>\n            <span class="timeSeparator">/</span>\n            <time-display [duration]="timerSettings.targetDayTime" [showSeconds]=false label="target"></time-display>    \n        </div>\n      </duration-display-donut>\n    </div>\n\n  <!-- <basic-durations-display [actual]="dailyDuration" [target]="timerSettings.targetDayTime" *ngIf="timerSettings"></basic-durations-display> -->\n  <expandable-container title="Trackings" class="trackingContainer">\n    <div class="trackingList">\n      <div class="singleTracking trackingHeader">\n        <span>Start</span>\n        <span>Duration</span>\n        <span>End</span>\n      </div>\n        <div *ngFor="let tracking of dailyTrackings" [class]="getTrackingClass(tracking)">\n          <basic-time-display [date]="tracking.startTime"></basic-time-display>\n          -\n          <time-display [duration]="getDurationByTracking(tracking)" [showSeconds]=false></time-display>\n          -\n          <basic-time-display [date]="tracking.endTime"></basic-time-display>\n        </div>\n    </div>\n  </expandable-container>\n\n  <h1 class="subTitle">Weekly</h1>\n  <basic-durations-display [actual]="weeklyDuration" [target]="timerSettings.targetWeekTime" *ngIf="timerSettings"></basic-durations-display>\n  <button ion-button icon-right clear (click)="navigateToWeekly()" >\n    Weekly Overview\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\overview\overview.html"*/,
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations_iconSwitch__["b" /* iconSwitch */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* PopoverController */]])
    ], OverviewPage);
    return OverviewPage;
}());

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_sizeMorph__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_iconSwitch__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the WeeklyOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeeklyOverviewPage = (function () {
    function WeeklyOverviewPage(navCtrl, navParams, trackingCalc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trackingCalc = trackingCalc;
        this.startWeek = __WEBPACK_IMPORTED_MODULE_5_moment__();
        this.endWeek = __WEBPACK_IMPORTED_MODULE_5_moment__();
        this.basicDateFormat = "DD.MM.YY";
        this.weekDiff = 0;
        this.trackings = [];
        this.dayOfWeek = {
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat',
            7: 'Sun',
        };
        this.showMore = {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
        };
        this.trackingOfWeek = {};
        this.timer = this.navParams.get("timer");
    }
    WeeklyOverviewPage.prototype.ngOnInit = function () {
        this.calculateWeeks();
    };
    WeeklyOverviewPage.prototype.calculateWeeks = function () {
        var _this = this;
        var calcMoment = __WEBPACK_IMPORTED_MODULE_5_moment__().add(this.weekDiff, "weeks");
        this.startWeek = this.trackingCalc.getStartOfWeek(calcMoment.weeks());
        this.endWeek = this.trackingCalc.getEndOfWeek(calcMoment.weeks());
        this.trackingCalc.getRangeTrackings(this.timer.id, this.startWeek, this.endWeek)
            .then(function (trackings) {
            _this.trackings = trackings;
        });
        var _loop_1 = function (day) {
            this_1.trackingCalc.getRangeTrackings(this_1.timer.id, this_1.startWeek.clone().add(day - 1, "days"), this_1.startWeek.clone().add(day, "days")).then(function (trackings) { return _this.trackingOfWeek[day] = trackings; });
        };
        var this_1 = this;
        for (var day = 1; day < 8; day++) {
            _loop_1(day);
        }
    };
    WeeklyOverviewPage.prototype.toggleMore = function (dayIndex) {
        this.showMore[dayIndex] = !this.showMore[dayIndex];
    };
    Object.defineProperty(WeeklyOverviewPage.prototype, "startWeekFormat", {
        get: function () {
            return this.startWeek.format(this.basicDateFormat);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeeklyOverviewPage.prototype, "endtWeekFormat", {
        get: function () {
            return this.endWeek.format(this.basicDateFormat);
        },
        enumerable: true,
        configurable: true
    });
    WeeklyOverviewPage.prototype.navigateWeek = function (forward) {
        var _this = this;
        this.weekDiff += (forward ? 1 : -1);
        Object.keys(this.showMore).forEach(function (key) { return _this.showMore[key] = false; });
        this.calculateWeeks();
    };
    Object.defineProperty(WeeklyOverviewPage.prototype, "dayIndexes", {
        get: function () {
            return Object.keys(this.dayOfWeek);
        },
        enumerable: true,
        configurable: true
    });
    WeeklyOverviewPage.prototype.trackingOnWeekDay = function (index) {
        var trackings = this.trackingOfWeek[index];
        return trackings ? trackings.slice(0).reverse() : trackings;
    };
    WeeklyOverviewPage.prototype.trackingDuration = function (tracking) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](__WEBPACK_IMPORTED_MODULE_5_moment__(tracking.endTime ? tracking.endTime : new Date()).diff(__WEBPACK_IMPORTED_MODULE_5_moment__(tracking.startTime)));
    };
    WeeklyOverviewPage.prototype.trackingDurationPerDay = function (index) {
        var _this = this;
        var accumulator = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](0);
        this.trackingOnWeekDay(index)
            .forEach(function (tracking) {
            return accumulator.add(_this.trackingDuration(tracking));
        });
        return accumulator;
    };
    WeeklyOverviewPage.prototype.maxDurationPerWeek = function () {
        var _this = this;
        var maxDuration = __WEBPACK_IMPORTED_MODULE_5_moment__["duration"](0);
        Object.keys(this.trackingOfWeek)
            .forEach(function (dayIndex) {
            var dur = _this.trackingDurationPerDay(dayIndex);
            if (maxDuration.asMilliseconds() < dur.asMilliseconds())
                maxDuration = dur;
        });
        return maxDuration;
    };
    WeeklyOverviewPage.prototype.durationPercent = function (dayIndex, tracking) {
        return (this.trackingDuration(tracking).asMilliseconds() / this.maxDurationPerWeek().asMilliseconds()) * 100;
    };
    WeeklyOverviewPage.prototype.durationPercentCss = function (dayIndex, tracking) {
        return this.durationPercent(dayIndex, tracking) + "%";
    };
    WeeklyOverviewPage.prototype.showDuration = function (dayIndex, tracking) {
        return this.durationPercent(dayIndex, tracking) > 30;
    };
    WeeklyOverviewPage.prototype.durationStyle = function (dayIndex, tracking) {
        return {
            width: this.durationPercentCss(dayIndex, tracking),
            'flex-basis': this.durationPercentCss(dayIndex, tracking)
        };
    };
    WeeklyOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-weekly-overview',template:/*ion-inline-start:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\weekly-overview\weekly-overview.html"*/'<!--\n  Generated template for the WeeklyOverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageHeader">Weekly: {{timer.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n  <ion-toolbar color="secondary">\n    <ion-buttons left>\n        <button ion-button icon-only (click)="navigateWeek(false)">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n\n    <ion-title class="centerTitle" [@iconSwitch]="startWeek.date()">{{startWeekFormat}} - {{endtWeekFormat}}</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="navigateWeek(true)">\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n</div>\n\n<ion-grid>\n  <ng-container *ngFor="let dayIndex of dayIndexes">\n    <ion-row (click)="toggleMore(dayIndex)" [ngClass]="{weekdayRow: true, selectedRow: showMore[dayIndex]}">\n      <ion-col class="dayIdentifier">{{ dayOfWeek[dayIndex] }}</ion-col>\n      <ion-col col-9 class="durationsRow">\n        <div *ngFor="let tracking of trackingOnWeekDay(dayIndex)" class="singleDuration"\n        [ngStyle]="durationStyle(dayIndex, tracking)">\n        <time-display *ngIf="showDuration(dayIndex, tracking)" [duration]="trackingDuration(tracking)" [showSeconds]=false></time-display>\n      </div>  \n      </ion-col>\n    </ion-row>\n    <ion-row [@expand]="showMore[dayIndex]" #scrollElement>\n      <ion-col>\n          <div class="trackingList">\n                <div *ngFor="let tracking of trackingOnWeekDay(dayIndex)" class="singleTracking">\n                  <basic-time-display [date]="tracking.startTime"></basic-time-display>\n                  -\n                  <time-display [duration]="trackingDuration(tracking)" [showSeconds]=true></time-display>\n                  -\n                  <basic-time-display [date]="tracking.endTime"></basic-time-display>\n                </div>\n            </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Development\Workspace\Basic\Ionic\time-tracking\src\pages\weekly-overview\weekly-overview.html"*/,
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_iconSwitch__["b" /* iconSwitch */], __WEBPACK_IMPORTED_MODULE_0__animations_sizeMorph__["a" /* expandTransition */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */]])
    ], WeeklyOverviewPage);
    return WeeklyOverviewPage;
}());

//# sourceMappingURL=weekly-overview.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(72);

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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/overview-more-actions/overview-more-actions.module": [
		343
	],
	"../pages/overview/overview.module": [
		437
	],
	"../pages/timer-settings/timer-settings.module": [
		438
	],
	"../pages/weekly-overview/weekly-overview.module": [
		172
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
webpackAsyncContext.id = 342;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewMoreActionsPageModule", function() { return OverviewMoreActionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_more_actions__ = __webpack_require__(344);
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewMoreActionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_more_actions_overview_more_actions_module__ = __webpack_require__(343);
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

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerSettingsPageModule", function() { return TimerSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_settings__ = __webpack_require__(136);
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

/***/ 439:
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_storage_tracking_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_setting_storage_timer_setting_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(485);
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_settings_timer_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_array_helper__ = __webpack_require__(822);
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(491);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingCalculationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tracking_storage_tracking_storage__ = __webpack_require__(50);
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
    TrackingCalculationProvider.prototype.getRangeTrackings = function (timerId, startMoment, endMoment) {
        return this.trackingStorage.getAllTrackingsByTimerId(timerId)
            .then(function (trackings) { return trackings
            .filter(function (tracking) {
            var startInRange = __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.startTime).isBetween(startMoment, endMoment);
            var endInRange = __WEBPACK_IMPORTED_MODULE_2_moment__(tracking.endTime).isBetween(startMoment, endMoment);
            return startInRange || endInRange;
        }); });
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_weekly_overview_weekly_overview_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_overview_overview_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_tracking_storage_tracking_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_timer_settings_timer_settings_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(49);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/overview-more-actions/overview-more-actions.module#OverviewMoreActionsPageModule', name: 'OverviewMoreActionsPage', segment: 'overview-more-actions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overview/overview.module#OverviewPageModule', name: 'OverviewPage', segment: 'overview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timer-settings/timer-settings.module#TimerSettingsPageModule', name: 'TimerSettingsPage', segment: 'timer-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weekly-overview/weekly-overview.module#WeeklyOverviewPageModule', name: 'WeeklyOverviewPage', segment: 'weekly-overview', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_timer_settings_timer_settings_module__["TimerSettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_overview_overview_module__["OverviewPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_weekly_overview_weekly_overview_module__["WeeklyOverviewPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_timer_storage_timer_storage__["a" /* TimerStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_tracking_storage_tracking_storage__["a" /* TrackingStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_timer_setting_storage_timer_setting_storage__["a" /* TimerSettingStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_general_timer_trigger_general_timer_trigger__["a" /* GeneralTimerTriggerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_tracking_calculation_tracking_calculation__["a" /* TrackingCalculationProvider */]
            ],
            schemas: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_overview_overview__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tracking_storage_tracking_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_single_timer__ = __webpack_require__(439);
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

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerTracking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(494);
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

/***/ 494:
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

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 176,
	"./af.js": 176,
	"./ar": 177,
	"./ar-dz": 178,
	"./ar-dz.js": 178,
	"./ar-kw": 179,
	"./ar-kw.js": 179,
	"./ar-ly": 180,
	"./ar-ly.js": 180,
	"./ar-ma": 181,
	"./ar-ma.js": 181,
	"./ar-sa": 182,
	"./ar-sa.js": 182,
	"./ar-tn": 183,
	"./ar-tn.js": 183,
	"./ar.js": 177,
	"./az": 184,
	"./az.js": 184,
	"./be": 185,
	"./be.js": 185,
	"./bg": 186,
	"./bg.js": 186,
	"./bm": 187,
	"./bm.js": 187,
	"./bn": 188,
	"./bn.js": 188,
	"./bo": 189,
	"./bo.js": 189,
	"./br": 190,
	"./br.js": 190,
	"./bs": 191,
	"./bs.js": 191,
	"./ca": 192,
	"./ca.js": 192,
	"./cs": 193,
	"./cs.js": 193,
	"./cv": 194,
	"./cv.js": 194,
	"./cy": 195,
	"./cy.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de-at": 198,
	"./de-at.js": 198,
	"./de-ch": 199,
	"./de-ch.js": 199,
	"./de.js": 197,
	"./dv": 200,
	"./dv.js": 200,
	"./el": 201,
	"./el.js": 201,
	"./en-au": 202,
	"./en-au.js": 202,
	"./en-ca": 203,
	"./en-ca.js": 203,
	"./en-gb": 204,
	"./en-gb.js": 204,
	"./en-ie": 205,
	"./en-ie.js": 205,
	"./en-il": 206,
	"./en-il.js": 206,
	"./en-nz": 207,
	"./en-nz.js": 207,
	"./eo": 208,
	"./eo.js": 208,
	"./es": 209,
	"./es-do": 210,
	"./es-do.js": 210,
	"./es-us": 211,
	"./es-us.js": 211,
	"./es.js": 209,
	"./et": 212,
	"./et.js": 212,
	"./eu": 213,
	"./eu.js": 213,
	"./fa": 214,
	"./fa.js": 214,
	"./fi": 215,
	"./fi.js": 215,
	"./fo": 216,
	"./fo.js": 216,
	"./fr": 217,
	"./fr-ca": 218,
	"./fr-ca.js": 218,
	"./fr-ch": 219,
	"./fr-ch.js": 219,
	"./fr.js": 217,
	"./fy": 220,
	"./fy.js": 220,
	"./gd": 221,
	"./gd.js": 221,
	"./gl": 222,
	"./gl.js": 222,
	"./gom-latn": 223,
	"./gom-latn.js": 223,
	"./gu": 224,
	"./gu.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it.js": 232,
	"./ja": 233,
	"./ja.js": 233,
	"./jv": 234,
	"./jv.js": 234,
	"./ka": 235,
	"./ka.js": 235,
	"./kk": 236,
	"./kk.js": 236,
	"./km": 237,
	"./km.js": 237,
	"./kn": 238,
	"./kn.js": 238,
	"./ko": 239,
	"./ko.js": 239,
	"./ky": 240,
	"./ky.js": 240,
	"./lb": 241,
	"./lb.js": 241,
	"./lo": 242,
	"./lo.js": 242,
	"./lt": 243,
	"./lt.js": 243,
	"./lv": 244,
	"./lv.js": 244,
	"./me": 245,
	"./me.js": 245,
	"./mi": 246,
	"./mi.js": 246,
	"./mk": 247,
	"./mk.js": 247,
	"./ml": 248,
	"./ml.js": 248,
	"./mr": 249,
	"./mr.js": 249,
	"./ms": 250,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 250,
	"./mt": 252,
	"./mt.js": 252,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./tg": 279,
	"./tg.js": 279,
	"./th": 280,
	"./th.js": 280,
	"./tl-ph": 281,
	"./tl-ph.js": 281,
	"./tlh": 282,
	"./tlh.js": 282,
	"./tr": 283,
	"./tr.js": 283,
	"./tzl": 284,
	"./tzl.js": 284,
	"./tzm": 285,
	"./tzm-latn": 286,
	"./tzm-latn.js": 286,
	"./tzm.js": 285,
	"./ug-cn": 287,
	"./ug-cn.js": 287,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 290,
	"./uz-latn": 291,
	"./uz-latn.js": 291,
	"./uz.js": 290,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
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
webpackContext.id = 496;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_timer_tracking__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerSettingStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(79);
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconFlip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(72);

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

/***/ 802:
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

/***/ 822:
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

/***/ 823:
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

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyDurationIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_timer_storage_timer_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tracking_calculation_tracking_calculation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_timer_trigger_general_timer_trigger__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timer_setting_storage_timer_setting_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(79);
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

/***/ 825:
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

/***/ 826:
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

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_iconSwitch__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_sizeMorph__ = __webpack_require__(175);
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

/***/ 828:
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

/***/ 829:
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
        })
    ], DurationDisplayDonutComponent);
    return DurationDisplayDonutComponent;
}());

//# sourceMappingURL=duration-display-donut.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralTimerTriggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(79);
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_display_time_display__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daily_duration_indicator_daily_duration_indicator__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_durations_display_basic_durations_display__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_time_display_basic_time_display__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expandable_container_expandable_container__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__donut_chart_donut_chart__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__duration_display_donut_duration_display_donut__ = __webpack_require__(829);
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

/***/ })

},[486]);
//# sourceMappingURL=main.js.map