webpackJsonp(["contactmanager.module"],{

/***/ "./src/app/contactmanager/components/maincontent/maincontent.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!user\">\n  <mat-spinner></mat-spinner>\n</div> -->\n<div *ngIf=\"user\">\n  <mat-card>\n    <mat-card-header>\n      <mat-icon mat-card-avatar svgIcon=\"{{user.avatar}}\"></mat-icon>\n      <mat-card-title>{{user.name}}</mat-card-title>\n      <mat-card-subtitle>Birthday {{user.birthDate | date:'d LLLL'}} </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group>\n        <mat-tab label=\"Bio\">\n          <p> {{user.bio}} </p>\n        </mat-tab>\n        <mat-tab label=\"Notes\">\n          <app-notes [notes]=\"user.notes\"></app-notes>\n        </mat-tab>\n      </mat-tab-group>\n\n    </mat-card-content>\n  </mat-card>\n</div>\n<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, natus?</h2>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/contactmanager/components/maincontent/maincontent.component.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n\nbody {\n  font-family: sans-serif;\n  color: #ffffff;\n  background-color: #f0f0f0; }\n\na {\n  color: #a0f6aa;\n  text-decoration: none; }\n\n.cd-accordion-menu {\n  width: 90%;\n  background: #4d5158;\n  margin: 4em auto;\n  -webkit-box-shadow: 0 4px 40px #70ac77;\n          box-shadow: 0 4px 40px #70ac77; }\n\n.cd-accordion-menu ul {\n  /* by default hide all sub menus */\n  display: none; }\n\n.cd-accordion-menu li {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.cd-accordion-menu input[type=checkbox] {\n  /* hide native checkbox */\n  position: absolute;\n  opacity: 0; }\n\n.cd-accordion-menu label,\n.cd-accordion-menu a {\n  position: relative;\n  display: block;\n  background: #4d5158;\n  -webkit-box-shadow: inset 0 -1px #565a60;\n          box-shadow: inset 0 -1px #565a60;\n  color: #ffffff; }\n\n.no-touch .cd-accordion-menu label:hover,\n.no-touch .cd-accordion-menu a:hover {\n  background: #52565d; }\n\n.cd-accordion-menu label::before,\n.cd-accordion-menu label::after,\n.cd-accordion-menu a::after {\n  /* icons */\n  content: '';\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.cd-accordion-menu label {\n  cursor: pointer; }\n\n.cd-accordion-menu label::before,\n.cd-accordion-menu label::after {\n  background-image: url(https://codyhouse.co/demo/multi-level-accordion-menu/img/cd-icons.svg);\n  background-repeat: no-repeat; }\n\n.cd-accordion-menu label::before {\n  /* arrow icon */\n  left: 18px;\n  background-position: 0 0;\n  -webkit-transform: translateY(-50%) rotate(-90deg);\n  transform: translateY(-50%) rotate(-90deg); }\n\n.cd-accordion-menu label::after {\n  /* folder icons */\n  left: 41px;\n  background-position: -16px 0; }\n\n.cd-accordion-menu a::after {\n  /* image icon */\n  left: 36px;\n  background: url(https://codyhouse.co/demo/multi-level-accordion-menu/img/cd-icons.svg) no-repeat -48px 0; }\n\n.cd-accordion-menu input[type=checkbox]:checked + label::before {\n  /* rotate arrow */\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.cd-accordion-menu input[type=checkbox]:checked + label::after {\n  /* show open folder icon if item is checked */\n  background-position: -32px 0; }\n\n.cd-accordion-menu input[type=checkbox]:checked + label + ul,\n.cd-accordion-menu input[type=checkbox]:checked + label:nth-of-type(n) + ul {\n  /* use label:nth-of-type(n) to fix a bug on safari (<= 8.0.8) with multiple adjacent-sibling selectors*/\n  /* show children when item is checked */\n  display: block; }\n\n.cd-accordion-menu ul label,\n.cd-accordion-menu ul a {\n  background: #35383d;\n  -webkit-box-shadow: inset 0 -1px #41444a;\n          box-shadow: inset 0 -1px #41444a;\n  padding-left: 82px; }\n\n.no-touch .cd-accordion-menu ul label:hover,\n.no-touch .cd-accordion-menu ul a:hover {\n  background: #3c3f45; }\n\n.cd-accordion-menu > li:last-of-type > label,\n.cd-accordion-menu > li:last-of-type > a,\n.cd-accordion-menu > li > ul > li:last-of-type label,\n.cd-accordion-menu > li > ul > li:last-of-type a {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.cd-accordion-menu ul label::before {\n  left: 36px; }\n\n.cd-accordion-menu ul label::after,\n.cd-accordion-menu ul a::after {\n  left: 59px; }\n\n.cd-accordion-menu ul ul label,\n.cd-accordion-menu ul ul a {\n  padding-left: 100px; }\n\n.cd-accordion-menu ul ul label::before {\n  left: 54px; }\n\n.cd-accordion-menu ul ul label::after,\n.cd-accordion-menu ul ul a::after {\n  left: 77px; }\n\n.cd-accordion-menu ul ul ul label,\n.cd-accordion-menu ul ul ul a {\n  padding-left: 118px; }\n\n.cd-accordion-menu ul ul ul label::before {\n  left: 72px; }\n\n.cd-accordion-menu ul ul ul label::after,\n.cd-accordion-menu ul ul ul a::after {\n  left: 95px; }\n\n@media only screen and (min-width: 600px) {\n  .cd-accordion-menu label,\n  .cd-accordion-menu a {\n    padding: 24px 24px 24px 82px; }\n  .cd-accordion-menu label::before {\n    left: 24px; }\n  .cd-accordion-menu label::after {\n    left: 53px; }\n  .cd-accordion-menu ul label,\n  .cd-accordion-menu ul a {\n    padding-left: 106px; }\n  .cd-accordion-menu ul label::before {\n    left: 48px; }\n  .cd-accordion-menu ul label::after,\n  .cd-accordion-menu ul a::after {\n    left: 77px; }\n  .cd-accordion-menu ul ul label,\n  .cd-accordion-menu ul ul a {\n    padding-left: 130px; }\n  .cd-accordion-menu ul ul label::before {\n    left: 72px; }\n  .cd-accordion-menu ul ul label::after,\n  .cd-accordion-menu ul ul a::after {\n    left: 101px; }\n  .cd-accordion-menu ul ul ul label,\n  .cd-accordion-menu ul ul ul a {\n    padding-left: 154px; }\n  .cd-accordion-menu ul ul ul label::before {\n    left: 96px; }\n  .cd-accordion-menu ul ul ul label::after,\n  .cd-accordion-menu ul ul ul a::after {\n    left: 125px; } }\n\n.cd-accordion-menu.animated label::before {\n  /* this class is used if you're using jquery to animate the accordion */\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n"

/***/ }),

/***/ "./src/app/contactmanager/components/maincontent/maincontent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaincontentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/contactmanager/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {} from '@angular/tree';
var MaincontentComponent = /** @class */ (function () {
    function MaincontentComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    MaincontentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            _this.service.users.subscribe(function (users) {
                if (users.length === 0) {
                    return;
                }
                _this.user = _this.service.userById(id);
            });
        });
    };
    MaincontentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maincontent',
            template: __webpack_require__("./src/app/contactmanager/components/maincontent/maincontent.component.html"),
            styles: [__webpack_require__("./src/app/contactmanager/components/maincontent/maincontent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], MaincontentComponent);
    return MaincontentComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/new-contact/new-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new contact</h2>\n<mat-dialog-content>\n\n  <div class=\"example-container\">\n    <mat-form-field>\n      <mat-select placeholder=\"Avatar\" [(ngModel)]=\"user.avatar\">\n        <mat-select-trigger>\n          <mat-icon svgIcon=\"{{user.avatar}}\"></mat-icon>{{user.avatar}}\n        </mat-select-trigger>\n        <mat-option *ngFor=\"let avatar of avatars \" [value]=\"avatar\">\n          <mat-icon svgIcon=\"{{avatar}}\"></mat-icon>{{avatar}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Name\" [formControl]=\"name\" [(ngModel)]=\"user.name\" required>\n      <mat-error *ngIf=\"name.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Born\" [(ngModel)]=\"user.birthDay\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Bio\" [(ngModel)]=\"user.bio\"></textarea>\n    </mat-form-field>\n\n  </div>\n\n\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"save()\">\n    <mat-icon>save</mat-icon> Save\n  </button>\n  <button mat-button color=\"primary\" (click)=\"dismiss()\">\n    <mat-icon>cancel</mat-icon> Cancel\n  </button>\n</mat-dialog-actions>\n\n<!-- \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"save()\">\n    <mat-icon>save</mat-icon> Save\n  </button>\n  <button mat-button color=\"primary\" (click)=\"dismiss()\">\n    <mat-icon>cancel</mat-icon> Cancel\n  </button>\n</mat-dialog-actions> -->\n"

/***/ }),

/***/ "./src/app/contactmanager/components/new-contact/new-contact.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/contactmanager/components/new-contact/new-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("./src/app/contactmanager/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/contactmanager/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewContactComponent = /** @class */ (function () {
    function NewContactComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.avatars = [
            'svg-1', 'svg-2', 'svg-3', 'svg-4',
        ];
        this.name = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]);
    }
    NewContactComponent.prototype.getErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    };
    NewContactComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
    };
    NewContactComponent.prototype.save = function () {
        var _this = this;
        this.userService.addUser(this.user).then(function (user) {
            _this.dialogRef.close(_this.user);
        });
    };
    NewContactComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    NewContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-contact',
            template: __webpack_require__("./src/app/contactmanager/components/new-contact/new-contact.component.html"),
            styles: [__webpack_require__("./src/app/contactmanager/components/new-contact/new-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], NewContactComponent);
    return NewContactComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let note\"> {{note.id}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td mat-cell *matCellDef=\"let note\"> {{note.title}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"date\">\n    <th mat-header-cell *matHeaderCellDef> Date </th>\n    <td mat-cell *matCellDef=\"let note\"> {{note.date | date:'yyyy-MM-dd'}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table> -->\n\n<!-- \n<mat-table #table [dataSource]=\"dataSource\" matSort>\n<ng-container matColumnDef=\"id\">\n<mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n<mat-cell *matCellDef=\"let note\"> {{note.id}} </mat-cell>\n</ng-container>\n<ng-container matColumnDef=\"title\">\n<mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n<mat-cell *matCellDef=\"let note\"> {{note.title}} </mat-cell>\n</ng-container>\n<ng-container matColumnDef=\"date\">\n<mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\n<mat-cell *matCellDef=\"let note\"> {{note.date | date:'yyyy-MM-dd'}} </mat-cell>\n</ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table> --> \n\n\n<!-- <mat-table #table [dataSource]=\"dataSource\" matSort>\n  <ng-container matColumnDef=\"{{column.id}}\" *ngFor=\"let column of columnNames\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.value}} </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element[column.id]}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table> -->\n\n\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let note\"> {{note.id}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"title\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n      <mat-cell *matCellDef=\"let note\"> {{note.title}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\n      <mat-cell *matCellDef=\"let note\"> {{note.date | date:'yyyy-MM-dd'}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator [pageSize]=\"2\" [pageSizeOptions]=\"[2, 5, 10]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/contactmanager/components/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
// import { Component, OnInit, Input } from '@angular/core';
// import { Note } from '../../model/note';
// // import { MatTableDataSource } from '@angular/material';
// // import { DataSource } from '@angular/cdk/table';
// import { MatTableDataSource } from '@angular/material/table';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-notes',
//   templateUrl: './notes.component.html',
//   styleUrls: ['./notes.component.scss']
// })
// export class NotesComponent implements OnInit {
//   @Input() notes: Note[];
//   displayedColumns = ['position', 'title', 'date'];
//   dataSource: MatTableDataSource<Note>;
//   constructor() { }
//   ngOnInit() {
//     this.dataSource = new MatTableDataSource<Note>(this.notes);
//     // this.dataSource = new MatTableDataSource(tableArr);
//   }
// }


var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.displayedColumns = ['position', 'title', 'date'];
    }
    // tslint:disable-next-line:use-life-cycle-interface
    NotesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    NotesComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatTableDataSource */](this.notes);
    };
    NotesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NotesComponent.prototype, "notes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginator */])
    ], NotesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSort */])
    ], NotesComponent.prototype, "sort", void 0);
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes',
            template: __webpack_require__("./src/app/contactmanager/components/notes/notes.component.html"),
            styles: [__webpack_require__("./src/app/contactmanager/components/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-sidenav-container \" [class.dark.theme]=\"isDarkTheme\">\n\n\n  <mat-sidenav style=\"width: 250px\n \" #sidenav mode=\"side\" class=\"mat-elevation-z10\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">\n    <!--  [opend]=\"isScreenSmall()\" [mode]=\"isScreenSmall() ? 'over' : 'side'\"\n -->\n    <mat-toolbar color=\"primary\"><span>Users</span></mat-toolbar>\n\n\n    <!--  accordion  -->\n\n    <!-- <div id=\"accordion\">\n      <div class=\"card\">\n        <div class=\"card-header btn p-0 \" id=\"headingOne\">\n          <h5 class=\"m-0 p-0\">\n            <a class=\"btn w-100 \" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              Collapsible\n              <span>\n                <i class=\"fa fa-home \"></i>\n              </span>\n            </a>\n          </h5>\n        </div> -->\n\n        <!-- <div id=\"collapseOne\" class=\"collapse \" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n          <div class=\"card-body p-0 m-0\">\n            \n            <div class=\"card-header text-center m-0 p-0 bg-success\" id=\"headingsub\">\n              <h5 class=\"m-0 p-0 \">\n                <a class=\"btn \" data-toggle=\"collapse\" data-target=\"#collapsesub\" aria-expanded=\"true\" aria-controls=\"collapsesub\">\n                  Collapsible\n                </a>\n              </h5>\n              <h5 class=\"m-0 p-0 \">\n                <a class=\"btn \" data-toggle=\"collapse\" data-target=\"#collapsesub\" aria-expanded=\"true\" aria-controls=\"collapsesub\">\n                  Collapsible\n                </a>\n              </h5>\n            </div>\n            <div id=\"collapsesub\" class=\"collapse \" aria-labelledby=\"headingOne\" data-parent=\"#headingsub\">\n              <div class=\"card-body\">\n                <a class=\"btn text-center w-100 bg-dark\">this is awsome </a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div> -->\n    <!-- End of accordion  -->\n\n\n    <mat-list> \n     <mat-nav-list>\n      <mat-list-item *ngFor=\"let user of users | async\">\n        <a matLine [routerLink]=\"['/contactmanager', user.id]\">\n          <mat-icon svgIcon=\"{{user.avatar}}\"></mat-icon>{{ user.name }}</a>\n      </mat-list-item>\n    </mat-nav-list> \n     </mat-list>  \n\n<!-- <app-acc-a></app-acc-a> -->\n     <!-- accordion  -->\n\n \n\n\n\n\n\n    <mat-accordion>\n     \n      <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header >\n          <mat-panel-title  >\n            Self \n          </mat-panel-title>\n        \n        </mat-expansion-panel-header>\n        <p>I'm visible because I am open</p>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n  </mat-sidenav>\n  <mat-sidenav-content style=\"display: flex; flex-direction: column\">\n\n    <!-- <button mat-button (click)=\"Sidenav.toggle()\" style=\"position: fixed; top: 0; right:-0px \">\n      <mat-icon>menu</mat-icon> sidenav\n    </button> -->\n\n    <app-toolbar (toggleSidenav)=\"sidenav.toggle()\">\n    </app-toolbar>\n\n    <!-- (toggleSidenav)=\"Sidenav.toggle()\" -->\n    <div class=\"wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- <p>\n      <button mat-button (click)=\"Sidenav.toggle()\">\n        <mat-icon>menu</mat-icon> sidenav\n      </button>\n    </p> -->\n    \n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.wrapper {\n  margin: 50px; }\n"

/***/ }),

/***/ "./src/app/contactmanager/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/contactmanager/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {} from '';
// import { Route } from '@angular/router';
// const SMALL_WIDTH_BREAKPOINT = 720;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // private mediaMatcher: MediaQueryList = matchMedia('(max-width: ${SMALL_WIDTH_BREAKPOINT}px');
        this.events = [];
        // tslint:disable-next-line:no-inferrable-types
        this.isDarkTheme = false;
    }
    SidenavComponent.prototype.toggleTheme = function () {
        this.isDarkTheme = !this.isDarkTheme;
    };
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.users;
        this.userService.loadAll();
        this.users.subscribe(function (data) {
            if (data.length > 0) {
                _this.router.navigate(['/contactmanager', data[0].id]);
            }
        });
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/contactmanager/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/contactmanager/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n<button mat-button class=\"sidenav-toggle\" (click)=\"toggleSidenav.emit()\">\n  <mat-icon>menu</mat-icon>\n</button>\n\n  <span>Contact Manager</span>\n\n<span class=\"example-spacer\"></span>\n<button mat-button [matMenuTriggerFor]=\"menu\">\n<mat-icon class=\"\">more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n<button mat-menu-item (click)=\"openAddContactDialog()\">New Contact</button>\n  <button mat-menu-item (click)=\"toggleTheme.emit()\">Toggle Theme</button>\n  \n</mat-menu>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/contactmanager/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_contact_new_contact_component__ = __webpack_require__("./src/app/contactmanager/components/new-contact/new-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(dialog, snackBar, router) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        // @Output() toggleSidenav = new EventEmitter<void>();
        // @Output() toggleSidenav = new EventEmitter<void>();
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.toggleTheme = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.events = [];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.openAddContactDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__new_contact_new_contact_component__["a" /* NewContactComponent */], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    ToolbarComponent.prototype.if = function (result) {
        var _this = this;
        this.openSnackBar('Contact Added', 'Navigate').onAction().subscribe(function () {
            _this.router.navigate(['/contactmanager', result.id]);
        });
    };
    ToolbarComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleTheme", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("./src/app/contactmanager/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("./src/app/contactmanager/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/contactmanager-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactmanagerAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactmanagerAppComponent = /** @class */ (function () {
    function ContactmanagerAppComponent(iconRegistery, sanitizer) {
        iconRegistery.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
    ContactmanagerAppComponent.prototype.ngOnInit = function () {
    };
    ContactmanagerAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactmanager-app',
            template: "\n    <app-sidenav></app-sidenav>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ContactmanagerAppComponent);
    return ContactmanagerAppComponent;
}());



/***/ }),

/***/ "./src/app/contactmanager/contactmanager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmanagerModule", function() { return ContactmanagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contactmanager_app_component__ = __webpack_require__("./src/app/contactmanager/contactmanager-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_toolbar_toolbar_component__ = __webpack_require__("./src/app/contactmanager/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_maincontent_maincontent_component__ = __webpack_require__("./src/app/contactmanager/components/maincontent/maincontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sidenav_sidenav_component__ = __webpack_require__("./src/app/contactmanager/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("./src/app/contactmanager/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_notes_notes_component__ = __webpack_require__("./src/app/contactmanager/components/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_new_contact_new_contact_component__ = __webpack_require__("./src/app/contactmanager/components/new-contact/new-contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_6__contactmanager_app_component__["a" /* ContactmanagerAppComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__components_maincontent_maincontent_component__["a" /* MaincontentComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_maincontent_maincontent_component__["a" /* MaincontentComponent */] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var ContactmanagerModule = /** @class */ (function () {
    function ContactmanagerModule() {
    }
    ContactmanagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__contactmanager_app_component__["a" /* ContactmanagerAppComponent */], __WEBPACK_IMPORTED_MODULE_7__components_toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_8__components_maincontent_maincontent_component__["a" /* MaincontentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_sidenav_sidenav_component__["a" /* SidenavComponent */], __WEBPACK_IMPORTED_MODULE_12__components_notes_notes_component__["a" /* NotesComponent */], __WEBPACK_IMPORTED_MODULE_13__components_new_contact_new_contact_component__["a" /* NewContactComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__components_new_contact_new_contact_component__["a" /* NewContactComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */]]
        })
    ], ContactmanagerModule);
    return ContactmanagerModule;
}());



/***/ }),

/***/ "./src/app/contactmanager/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.notes = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/contactmanager/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.dataStore = { users: [] };
        this._users = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            return this._users.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return new Promise(function (resolver, reject) {
            user.id = _this.dataStore.users.length + 1;
            _this.dataStore.users.push(user);
            resolver(user);
        });
    };
    UserService.prototype.userById = function (id) {
        // tslint:disable-next-line:triple-equals
        return this.dataStore.users.find(function (x) { return x.id == id; });
    };
    UserService.prototype.loadAll = function () {
        var _this = this;
        var userUrl = 'https://angular-material-api.azurewebsites.net/users';
        return this._http.get(userUrl).subscribe(function (data) {
            _this.dataStore.users = data;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) {
            console.log('failed to fetch data ');
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ })

});
//# sourceMappingURL=contactmanager.module.chunk.js.map