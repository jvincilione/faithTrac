angular.module("MainCtrl", [])
    .controller("MainController", ["$scope", "Info", "$cookies", "$timeout",
        function($scope, Info, $cookies, $timeout) {
            "use strict";
            $scope.tagline = undefined;
            $scope.churchName = "King's Way";//undefined;
            $scope.user = undefined;
            $scope.login = {};
            $scope.errorMessage = false;

            var init = function() {
                // get church info
                Info.getInfo().success(function(response) {
                    $scope.tagline = response.tagline;
                    $scope.churchName = response.title;
                }).error(function(response) {
                    Info.logError(response);
                });
            };

            $scope.loginUser = function() {
                Info.loginUser($scope.login)
                    .success(function(response) {
                        if (response.success === true) {
                            $cookies.put("FaithTracUserId", response.user.id);
                            $scope.user = response.user;
                        } else {
                            $scope.errorMessage = response.message;
                            $scope.messageType = "error";
                            $timeout(function() {
                                $scope.errorMessage = false;
                                $scope.messageType = null;
                            },3000);
                        }
                    });
            };

            init();
        }
    ]
);