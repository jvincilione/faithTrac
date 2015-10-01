angular.module("UserCtrl", [])
    .controller("UserController", ["$scope", "$routeParams", "User", "Info", function($scope, $routeParams ,User, Info) {
        "use strict";
        $scope.users = undefined;
        $scope.role = 1;
        $scope.newUser = undefined;
        $scope.userId = $routeParams && $routeParams.id;
        $scope.curUser = {};

        var init = function() {
            if ($scope.userId) {
                User.getUser($scope.userId)
                    .success(function(response) {
                        $scope.curUser = response;
                    })
                    .error(function(response) {
                        throw response;
                    });
            } else {
                $scope.allUsers();
            }
        };

        $scope.allUsers = function() {
            User.allUsers()
                .success(function(response) {
                    $scope.users = response;
                });
        };

        $scope.addUser = function() {
            var user = $scope.newUser,
                password = user.password,
                pass2 = user.password2;

            if (password === pass2) {
                // service call to create with callback
                User.createUser(user).
                    success(function(response) {
                        throw (response);
                    })
                    .error(function(response) {
                        Info.logError(response);
                    });
            } else {
                $scope.error = {
                    message: "asswords do not match",
                    type: "error",
                    identifier: "password"
                };
            }
        };

        $scope.updateUser = function() {
            var user = $scope.curUser;
            user._id = $scope.userId;
            User.createUser(user)
                .success(function(response) {
                    throw (response);
                })
                .error(function(response) {
                    Info.logError(response);
                });
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
]);