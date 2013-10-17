'use strict';

angular.module('my-app', ['ngRoute', 'my-app.directives', 'my-app.services', 'my-app.controllers']);
angular.module('my-app.services', []);
angular.module('my-app.directives', ['my-app.services']);
angular.module('my-app.controllers', ['my-app.services']);

angular
    .module("my-app")
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'defaultController',
                templateUrl: 'app/controllers/default/defaultView.html'
            })
            .when('/calculator', {
                controller: 'calculatorController',
                templateUrl: 'app/controllers/calculator/calculatorView.html'
            })
            .when('/calculator2', {
                controller: 'calculator2Controller',
                templateUrl: 'app/controllers/calculator2/calculator2View.html'
            })
            .when('/presidents', {
                controller: 'presidentsController',
                templateUrl: 'app/controllers/presidents/presidentsView.html'
            })
            .otherwise({ redirectTo: '/' });
    });
