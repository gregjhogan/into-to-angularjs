'use strict';

angular
    .module('my-app.controllers')
    .controller('presidentsController', function ($http, $scope, headerService) {
        headerService.setBackUrl('/#/calculator');

        $scope.search = '';

        $scope.customFilter = function (person) {
            return person.name.toUpperCase().indexOf($scope.search.toUpperCase()) != -1;
        };

        $http
            .get("/app/controllers/presidents/presidents.json")
            .success(function (data) {
                $scope.list = data;
            });
    });