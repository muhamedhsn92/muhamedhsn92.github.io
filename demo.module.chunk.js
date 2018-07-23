webpackJsonp(["demo.module"],{

/***/ "./src/app/demo/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buttons',
            template: "\n\n\n<button mat-button>\n  <mat-icon>face</mat-icon>\n  Click me!\n</button><br>\n\n<mat-checkbox>Check me!</mat-checkbox>\n\n\n\n\n\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flex_flex_component__ = __webpack_require__("./src/app/demo/flex/flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__ = __webpack_require__("./src/app/demo/buttons/buttons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__["a" /* ButtonsComponent */] },
    { path: 'flexBox', component: __WEBPACK_IMPORTED_MODULE_2__flex_flex_component__["a" /* FlexComponent */] },
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_routing_module__ = __webpack_require__("./src/app/demo/demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buttons_buttons_component__ = __webpack_require__("./src/app/demo/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flex_flex_component__ = __webpack_require__("./src/app/demo/flex/flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__demo_routing_module__["a" /* DemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__buttons_buttons_component__["a" /* ButtonsComponent */], __WEBPACK_IMPORTED_MODULE_6__flex_flex_component__["a" /* FlexComponent */]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo/flex/flex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"flex-item\">1</div>\n  <div class=\"flex-item\">2</div>\n  <div class=\"flex-item\">3</div>\n  <div class=\"flex-item\">4</div>\n  <div class=\"flex-item\">5</div>\n  <div class=\"flex-item\">6</div>\n  <div class=\"flex-item\">7</div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/flex/flex.component.scss":
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.flex-container {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.flex-item {\n  width: 200px;\n  height: 150px;\n  margin-top: 5px;\n  background: tomato;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  text-align: center;\n  line-height: 150px; }\n"

/***/ }),

/***/ "./src/app/demo/flex/flex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexComponent = /** @class */ (function () {
    function FlexComponent() {
    }
    FlexComponent.prototype.ngOnInit = function () {
    };
    FlexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flex',
            template: __webpack_require__("./src/app/demo/flex/flex.component.html"),
            styles: [__webpack_require__("./src/app/demo/flex/flex.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexComponent);
    return FlexComponent;
}());



/***/ })

});
//# sourceMappingURL=demo.module.chunk.js.map