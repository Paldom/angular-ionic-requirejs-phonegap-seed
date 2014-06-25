/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, PetService) {
        $scope.pets = PetService.all();
    }

    ctrl.$inject = ['$scope', 'PetService'];
    return ctrl;
    
});