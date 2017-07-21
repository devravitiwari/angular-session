"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var product_data_1 = require("./products/product-data");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var page_not_found_component_1 = require("./page-not-found.component");
/* Feature Modules */
var user_module_1 = require("./user/user.module");
var message_module_1 = require("./messages/message.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(product_data_1.ProductData, { delay: 1000 }),
                user_module_1.UserModule,
                message_module_1.MessageModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map