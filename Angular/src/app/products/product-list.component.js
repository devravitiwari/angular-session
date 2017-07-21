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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 200;
        this.imageMargin = 2;
        this.showImage = true;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.showImage = this.route.snapshot.queryParams['showImage'] === 'true';
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: './app/products/product-list.component.html',
            styleUrls: ['./app/products/product-list.component.css']
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map