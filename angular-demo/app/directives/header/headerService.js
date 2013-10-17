'use strict';

angular
    .module('my-app.services')
    .factory('headerService', function() {
        var backUrl = "/#/";

        return {
            setBackUrl: function(url) {
                backUrl = url;
            },
            getBackUrl: function() {
                return backUrl;
            }
        };
    });