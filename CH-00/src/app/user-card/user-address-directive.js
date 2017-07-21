(function() { 'use strict'; 
    
    angular.module('app')
        .directive('userAddress', UserAddress);
    
    function UserAddress() {
        return {
            restrict: 'E',
            templateUrl: '/app/user-card/user-address.html',
            scope: true,
            controller: [UserAddressController],
            controllerAs: 'vmUA',
            bindToController: true,
        }
    }

    function UserAddressController() {
        var vm = this;
        vm.collapsed = false;

        vm.expandAddress = function () {
            vm.collapsed = false;
        }

        vm.collapseAddress = function () {
            vm.collapsed = true;
        }
    }
    
})();