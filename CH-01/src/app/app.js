(function () {
    'use strict'; 
    
    angular.module('app', [],
        [
            '$compileProvider',
            '$logProvider',
            function ($compileProvider, $logProvider) { 
                $compileProvider.debugInfoEnabled(false);
                $compileProvider.commentDirectivesEnabled(false);
                $compileProvider.cssClassDirectivesEnabled(false);

                $logProvider.debugEnabled(true);
            }
        ]);

})();