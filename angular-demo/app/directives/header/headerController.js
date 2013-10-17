'use strict';

angular
    .module('my-app.controllers')
    .controller('headerController', function ($scope, headerService) {
        $scope.service = headerService;
    });