'use strict';

angular
    .module('my-app.services')
    .factory('calculatorService', function() {
        return {
            add: function(a, b) {
                return parseInt(a) + parseInt(b);
            }
        };
    });