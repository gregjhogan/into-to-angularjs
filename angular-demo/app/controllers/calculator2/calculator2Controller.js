'use strict';

angular
    .module('my-app.controllers')
    .controller('calculator2Controller', function($scope, calculatorService) {
        $scope.left = 0;
        $scope.right = 0;
        $scope.calculatorService = calculatorService;
    });