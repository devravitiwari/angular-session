(function() { 'use strict'; 
    
    angular.module('app')
        .directive('removeFriend', RemoveFriend);
    
    
    RemoveFriend.$inject = ['$parse'];
    
    function RemoveFriend($parse) {
        return {
            restrict: 'E',
            templateUrl: '/app/user-card/remove-friend.html',
            scope: {
                notifyParent: '&action'
            },
            controller: ['$scope', function ($scope) {
                $scope.removing = false;
                $scope.startRemove = function () {
                    $scope.removing = true;
                }
                $scope.cancelRemove = function () {
                    $scope.removing = false;
                }
                $scope.confirmRemove = function () {
                    $scope.notifyParent();
                }
            }]
        }
    }
    
})();