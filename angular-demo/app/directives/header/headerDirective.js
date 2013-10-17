'use strict';

angular
    .module('my-app.directives')
    .directive('myHeader', function () {
        return {
            restrict: 'A',
            scope: {},
            controller: 'headerController',
            templateUrl: '/app/directives/header/headerView.html',
            replace: true
        };
    });