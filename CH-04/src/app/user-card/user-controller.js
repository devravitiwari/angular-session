(function() { 'use strict'; 
    
    angular.module('app')
        .controller('userController', UserController);

    UserController.$inject = [
        'userService',
        '$log'
    ];

    function UserController(UserService, Logger) {
        var vm = this,
            userService = UserService;    

        init();
        /////////

        function init() {
            // on controller activation
            getUsers()
                .then(function (users) {
                    vm.user1 = users.shift();
                    vm.user2 = users.shift();
                })
                .catch(function (err) {
                    vm.user1 = userService.getNullObject();
                    vm.user2 = userService.getNullObject();
                    Logger.error(err);
                })
            
        }
        
        function getUsers() {
            return userService.getDefaultUsers();
        }
    }

})();