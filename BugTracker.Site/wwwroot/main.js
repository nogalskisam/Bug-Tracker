(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-bug/create-bug.component */ "./src/app/create-bug/create-bug.component.ts");
/* harmony import */ var _bug_list_bug_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bug-list/bug-list.component */ "./src/app/bug-list/bug-list.component.ts");





var routes = [
    { path: '', component: _bug_list_bug_list_component__WEBPACK_IMPORTED_MODULE_4__["BugListComponent"] },
    { path: 'create', component: _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_3__["CreateBugComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent() {
        this.title = 'Bug Tracker';
        this.apiAvailability = false;
        this.apiUri = "";
    }
    AppComponent.prototype.testApi = function () {
        this.apiAvailability = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bug_list_bug_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bug-list/bug-list.component */ "./src/app/bug-list/bug-list.component.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-bug/create-bug.component */ "./src/app/create-bug/create-bug.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _bug_list_bug_list_component__WEBPACK_IMPORTED_MODULE_6__["BugListComponent"],
                _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_8__["CreateBugComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bug-list/bug-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/bug-list/bug-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"!getBugsError\">\r\n    <div *ngIf=\"retrievedBugs && !bugs\">\r\n      <h2>Great news! There aren't any open bugs right now.</h2>\r\n    </div>\r\n    <div *ngIf=\"retrievedBugs && bugs\">\r\n      <h3>Open Bugs</h3>\r\n      <ul class=\"bugs\">\r\n        <li *ngFor=\"let bug of bugs\" class=\"bug\">\r\n          {{bug.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"getBugsError\">\r\n    Oops! An error occurred when retrieving bugs. Please try again later.\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/bug-list/bug-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/bug-list/bug-list.component.ts ***!
  \************************************************/
/*! exports provided: BugListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugListComponent", function() { return BugListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bug.service */ "./src/app/services/bug.service.ts");



var BugListComponent = /** @class */ (function () {
    function BugListComponent(bugService) {
        this.bugService = bugService;
        this.getBugsError = false;
        this.retrievedBugs = false;
    }
    BugListComponent.prototype.ngOnInit = function () {
        this.getBugs();
    };
    BugListComponent.prototype.getBugs = function () {
        var _this = this;
        this.retrievedBugs = false;
        this.bugService.getBugs().subscribe(function (e) {
            _this.retrievedBugs = true;
            _this.bugs = e;
        }, function () {
            _this.getBugsError = true;
        });
    };
    BugListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bug-list',
            template: __webpack_require__(/*! ./bug-list.component.html */ "./src/app/bug-list/bug-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"]])
    ], BugListComponent);
    return BugListComponent;
}());



/***/ }),

/***/ "./src/app/create-bug/create-bug.component.css":
/*!*****************************************************!*\
  !*** ./src/app/create-bug/create-bug.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1idWcvY3JlYXRlLWJ1Zy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-bug/create-bug.component.html":
/*!******************************************************!*\
  !*** ./src/app/create-bug/create-bug.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h1>Create new bug</h1>\r\n  <h3>Please fill in the form below to create a new bug in the tracker</h3>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"createBug()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Title</label>\r\n      <input id=\"title\"\r\n        name=\"bugTitle\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"title\"\r\n        #titleField=\"ngModel\"\r\n        class=\"form-control\"\r\n        placeholder=\"Title\"\r\n        maxlength=\"100\"\r\n        required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea id=\"description\"\r\n        name=\"bugDesc\"\r\n        [(ngModel)]=\"description\"\r\n        #descriptionField=\"ngModel\"\r\n        class=\"form-control\"\r\n        placeholder=\"Description\"\r\n        required>\r\n      </textarea>\r\n    </div>\r\n\r\n    <button type=\"submit\" name=\"submit\" [disabled]=\"(!form.valid)\" [ngClass]=\"form.valid ? 'btn-primary' : 'btn-disabled'\" class=\"btn\">Submit</button>\r\n\r\n    <span *ngIf=\"error\">An error occurred while saving your bug. Please try again later.</span>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-bug/create-bug.component.ts":
/*!****************************************************!*\
  !*** ./src/app/create-bug/create-bug.component.ts ***!
  \****************************************************/
/*! exports provided: CreateBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBugComponent", function() { return CreateBugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bug.service */ "./src/app/services/bug.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateBugComponent = /** @class */ (function () {
    function CreateBugComponent(bugService, router) {
        this.bugService = bugService;
        this.router = router;
        this.error = false;
    }
    CreateBugComponent.prototype.ngOnInit = function () {
    };
    CreateBugComponent.prototype.createBug = function () {
        var _this = this;
        var request = {
            'title': this.title,
            'description': this.description
        };
        this.bugService.createBug(request).subscribe(function () {
            _this.router.navigate(['']);
        }, function (error) {
            _this.error = true;
        });
        // redirect to list page
    };
    CreateBugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-bug',
            template: __webpack_require__(/*! ./create-bug.component.html */ "./src/app/create-bug/create-bug.component.html"),
            styles: [__webpack_require__(/*! ./create-bug.component.css */ "./src/app/create-bug/create-bug.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateBugComponent);
    return CreateBugComponent;
}());



/***/ }),

/***/ "./src/app/services/bug.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/bug.service.ts ***!
  \*****************************************/
/*! exports provided: BugService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugService", function() { return BugService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BugService = /** @class */ (function () {
    function BugService(http) {
        this.http = http;
        this.bugApiUri = 'http://localhost:55810/api/bugs';
        // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
    BugService.prototype.getBugs = function () {
        return this.http.get(this.bugApiUri + '/true');
    };
    BugService.prototype.createBug = function (request) {
        return this.http.post(this.bugApiUri, request);
    };
    BugService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BugService);
    return BugService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\Bug-Tracker\BugTracker.Site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map