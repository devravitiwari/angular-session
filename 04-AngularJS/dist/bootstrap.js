(function () {
    'use strict';

    var loadCount;

    angular.element(document).ready(function () {
        bootStrapApplication();
    });

    function bootStrapApplication() {
        loadConfiguration()
            .then(function (configuration) {
                if (configuration) {
                    bootstrap(configuration);
                }
            });
    }

    function loadConfiguration() {
        return jQuery
            .get('/api/config.json')
            .done(function (response) {
                return response.data;
            })
            .fail(function (error) {
                loadCount = loadCount ? ++loadCount : 1;
                console.log('Try reloading application in a second', loadCount);
                setTimeout(loadConfiguration, 5e2); // 5e2 = 500 (milliseconds)
            });

        // var httpService = angular.injector(['ng']).get('$http');
        //
        // return httpService.get('/data/configuration.json')
        //     .then(
        //         function(response) {
        //             return response.data;
        //         },
        //         function(error) {
        //             loadCount = loadCount ? ++loadCount : 1;
        //             console.log('Try reloading application in a second', loadCount);
        //             setTimeout(loadConfiguration, 5e2); // 5e2 = 500 (milliseconds)
        //         }
        //     );
    }

    function bootstrap(configuration) {
        angular
            .module('app')
            .constant('configurations', Object.freeze(configuration));

        angular.bootstrap(document, ['app'], { strictDi: true });
    }

})();