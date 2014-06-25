/*global requirejs, document, cordova, window, navigator, console */

requirejs.config({
    paths: {
        angular:          '../lib/js/angular/angular.min',
        angularAnimate:   '../lib/js/angular/angular-animate.min',
        angularSanitize:  '../lib/js/angular/angular-sanitize.min',
        uiRouter:         '../lib/js/angular-ui/angular-ui-router.min',
        ionic:            '../lib/js/ionic.min',
        ionicAngular:     '../lib/js/ionic-angular.min',
        text:             '../lib/js/text'
    },
    shim: {
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']}
    },
    priority: [
        'angular',
        'ionic'
    ],
    deps: [
        'bootstrap'
    ]
});