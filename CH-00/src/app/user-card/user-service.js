(function() { 'use strict'; 
    
    angular.module('app')
        .service('userService', UserService);
    
    UserService.$inject = [
        '$http',
        '$log'
    ];

    function UserService($http, $log) {
        var endPoint = '/app/user-card/users.json';
        var service = {
            getDefaultUsers: getUsers,
            getNullObject: getNullObject
        };

        init();
        return service;
        
        ///////////////

        function init() {
            
        }

        function getUsers() {
            return $http({
                method: 'get',
                url: endPoint
            }).then(function (response) {
                $log.debug('Resonse for endpoint :: ', endPoint);
                $log.debug(response);
                return response.data;
            });
        }

        function getNullObject() {
            return {
                "name": "Dummy User",
                "address": {
                    "street": "...",
                    "city": "...",
                    "planet": "..."
                },
                "friends": []
            }
        }
    }
    
})();