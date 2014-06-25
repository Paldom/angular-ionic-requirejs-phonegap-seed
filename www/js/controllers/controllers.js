/*global define, require */

define(function (require) {

    'use strict';

    var angular = require('angular'),
        services = require('services/services'),
        config = require('config'),
        controllers = angular.module('app.controllers', ['app.services', 'app.config']);

    controllers.controller('LoginCtrl', require('controllers/LoginCtrl'));
    controllers.controller('PetIndexCtrl', require('controllers/PetIndexCtrl'));
    controllers.controller('PetDetailCtrl', require('controllers/PetDetailCtrl'));
    
    controllers.run(['$rootScope', function ($rootScope) {
        $rootScope.sampleParam = "value";
    }]);
    
    return controllers;

});