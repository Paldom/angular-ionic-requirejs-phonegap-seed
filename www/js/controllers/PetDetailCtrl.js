/*global define*/

define(function () {
    'use strict';

    function ctrl($scope, $stateParams, PetService) {
        $scope.pet = PetService.get($stateParams.petId);
    }

    ctrl.$inject = ['$scope', '$stateParams', 'PetService'];
    return ctrl;
    
});