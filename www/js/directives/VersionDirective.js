/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directive = function (VERSION) {
        return function (scope, elm, attrs) {
            elm.text(VERSION);
        };
    };

    directive.$inject = ['VERSION'];
    return directive;
});