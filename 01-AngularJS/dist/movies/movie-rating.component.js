(function () {
    "use strict";

    var module = angular.module("app");

    module.component("movieRating", {
        templateUrl: "/movies/movie-rating.component.html",
        bindings: {
            value: "<" // Input Binding - i.e. it will come from the outside world, kind of one-way 
        },
        transclude: true,
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entries = new Array(model.value);
            };

            model.$onChanges = function () {
                model.entries = new Array(model.value);
            };
        }
    });

}());