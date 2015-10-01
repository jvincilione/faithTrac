angular.module("InfoService", []).factory("Info", ["$http", function($http) {
    "use strict";
    return {
        // get all users
        getInfo : function() {
            return $http.get("/api/appInfo/");
        },

        update : function(data) {
            return $http.post("/api/appInfo/update/", data);
        },
        
        //login
        loginUser : function(data) {
            return $http.post("/api/users/login/", data);
        },

        logError: function(error) {
            // log error to console - dev
            throw new Error(error);

            // log error on server error log (store in database)
            // return $http.post("/api/appInfo/logError/", error);
        }
        
    } ;      

}]);