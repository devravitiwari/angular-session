(function () {
    'use strict'; 
    
    var appModule = angular.module('app', ['ngComponentRouter'],
        [
            '$compileProvider',
            '$locationProvider',
            '$logProvider',
            'configurations',
            function ($compileProvider,
                $locationProvider,
                $logProvider,
                configurations) {
                
                $compileProvider.debugInfoEnabled(configurations.isDevEnv);
                $compileProvider.commentDirectivesEnabled(configurations.isDevEnv);
                $compileProvider.cssClassDirectivesEnabled(configurations.isDevEnv);

                $locationProvider.html5Mode({
                    enabled: !configurations.isDevEnv,
                    requireBase: false
                });

                $logProvider.debugEnabled(configurations.isDevEnv);
            }
        ]);
    
    appModule.value('$routerRootComponent', 'movieApp');

})();