"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import Component and ngOnInit dependenicies
var app_services_1 = require('./app.services'); // Import AppService 
var AppComponent = (function () {
    function AppComponent(_appServives) {
        this._appServives = _appServives;
        this.cartoons = [{}]; //Declare an array of objects
    } //Declare a private variable of the type AppServices
    AppComponent.prototype.ngOnInit = function () {
        this.cartoons = this._appServives.getData(); //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
    };
    AppComponent = __decorate([
        // Import AppService 
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container container-fluid\">\n             <h2>Directives and styling using structural directives</h2><br>\n             <h4>The data for the below table is provided by a service and is styled by a structural directive</h4><br><br>\n             <table class=\"table table-bordered\">\n                <thead>\n                    <tr [ngClass]=\"{classTableHead:true}\">\n                        <th>Name</th>\n                        <th>DOB</th>\n                        <th>Email</th>\n                        <th>Status</th>\n                        <th>Enroll link</th>\n                </thead>\n                <tbody>\n                    <tr  *ngFor=\"let cartoon of cartoons\" [ngClass]=\"{classTableBody:true}\">\n                        <td>{{cartoon.name}}</td>\n                        <td>{{cartoon.DOB}}</td>\n                        <td>{{cartoon.email}}</td>\n                        <td>{{cartoon.status}}</td>\n                        <td>{{cartoon.enroll}}</td>\n                    </tr>\n                </tbody>\n             </table>\n             </div>",
            styles: ["\n            .classTableHead {background-color:\t#ffa69f;\n                             border: 3px solid #ffb69f}\n            .classTableBody {background-color:\t#ffe69f;\n                             border: 3px solid #ffd69f}\n         "] // Two styles are defined, one for the table head and one for the table body
        }), 
        __metadata('design:paramtypes', [app_services_1.AppServices])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map