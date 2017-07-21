(function () {
    'use strict'; 
    
    var appModule = angular.module('app', ['ngComponentRouter'],
        [
            '$compileProvider',
            '$locationProvider',
            '$logProvider',
            function ($compileProvider, $locationProvider, $logProvider) {
                $compileProvider.debugInfoEnabled(false);
                $compileProvider.commentDirectivesEnabled(false);
                $compileProvider.cssClassDirectivesEnabled(false);

                // $locationProvider.html5Mode({
                //     enabled: true,
                //     requireBase: false
                // });

                $logProvider.debugEnabled(true);
            }
        ]);
    
    appModule.value('$routerRootComponent', 'movieApp');

})();