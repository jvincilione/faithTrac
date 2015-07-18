angular.module("UserCtrl", [])
    .controller("UserController", function($scope) {
        "use strict";
        $scope.users = undefined;
        $scope.role = 1;
        $scope.newUser = undefined;

        var init = function() {

        };

        $scope.allUsers = function() {
            
        };

        $scope.newUser = function(newUser) {
            throw (newUser);
            // service call to create with callback
        };

        $scope.deleteUser = function(userId) {
            if ($scope.role > 1) {
                $scope.errorMessage = "You do not have permission to delete users.";
                // timeout to remove error message
                // $scope.errorMessage = null;
                return;
            }
            throw (userId);
            // service call to delete the user
            // if the user is an admin, return error:
            // "must be superadmin to delete other administrators"

        };
        init();
    }
);