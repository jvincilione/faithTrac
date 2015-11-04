/* globals angular */
angular.module('InfoService', []).factory('Info', ['$http', function($http) {
    'use strict';
    var Service = function() {
        var self = this;
        self.user = null;
        self.getInfo = function() {
            return $http.get('/api/appInfo/');
        };

        self.update = function(data) {
            return $http.post('/api/appInfo/update/', data);
        };

        //login
        self.loginUser = function(data) {
            return $http.post('/api/users/login/', data);
        };

        self.logError = function(error) {
            // log error to console - dev
            throw new Error(error);

            // log error on server error log (store in database)
            // return $http.post("/api/appInfo/logError/", error);
        };

        self.setUser = function(val) {
            self.user = val;
        };

        self.getUser = function() {
            return self.user ? self.user : false;
        };
    };
    return new Service();
}]);
