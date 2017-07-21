(function() { 'use strict'; 
    
    angular.module('app')
        .directive('userCard', UserCard);
    
    function UserCard() {
        var dd = {
            restrict: 'E',
            templateUrl: '/app/user-card/user-card.html',
            controller: UserCardController,
            controllerAs: 'vmUC',
            bindToController: true,
            scope: {
                user: '=', // two way binding for passing `data` 
                collapsed: '@', // one way binding for passing `simple value - string`
                someMethod: '&' // for function binding  
            }
        };

        return dd;
    }

    function UserCardController() {
        var vm = this;

        vm.collapsed = (vm.collapsed === 'true');
        vm.knightMe = function (user) {
            user.rank = 'knight';
        };

        vm.collapse = function () {
            vm.collapsed = !vm.collapsed;
        }

        vm.removeFriend = function (friend) {
            var idx = vm.user.friends.indexOf(friend);
            if (idx > -1) {
                vm.user.friends.splice(idx, 1);
            }
        }
    }
    
})();