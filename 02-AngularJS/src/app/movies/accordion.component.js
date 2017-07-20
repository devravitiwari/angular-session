(function () {
    "use strict";

    var module = angular.module("app");

    module.component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        require: {
            "parent": "^accordion"
        },
        transclude: true,
        controllerAs: "model",
        controller: function () {
            var model = this;
            model.selected = false;

            model.$onInit = function () {
                model.parent.addPanel(model);
            };

            model.select = function () {
                model.parent.selectPanel(this);
            };

            model.turnOn = function () {
                model.selected = true;
            };

            model.turnOff = function () {
                model.selected = false;
            };
        },
        templateUrl: "/movies/accordion-panel.component.html"
    });

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controller: function () {
            var model = this;
            model.panels = [];

            model.selectPanel = function (panel) {
                for (var i in model.panels) {
                    if (panel === model.panels[i]) {
                        model.panels[i].turnOn();
                    }
                    else {
                        model.panels[i].turnOff();
                    }
                }
            };

            model.addPanel = function (panel) {
                model.panels.push(panel);
                if (model.panels.length > 0) {
                    model.panels[0].turnOn();
                }
            };

        }
    });

}());