'use strict';

angular
    .module('my-app.controllers')
    .controller('calculatorController', function($scope) {
        $scope.left = 0;
        $scope.right = 0;
        $scope.result = function() {
            return parseInt($scope.left) + parseInt($scope.right);
        };
    });