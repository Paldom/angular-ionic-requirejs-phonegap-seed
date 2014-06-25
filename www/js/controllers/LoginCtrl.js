/*global define, console */

define(function () {
    'use strict';

    function ctrl($scope, $state) {

        $scope.login = function () {
            $state.go('tab.pet-index');
        };
        
    }

    ctrl.$inject = ['$scope', '$state'];
    return ctrl;
    
});