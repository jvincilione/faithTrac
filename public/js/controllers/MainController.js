angular.module("MainCtrl", [])
    .controller("MainController", ["$scope", "Info", "$cookieStore", "$timeout",
        function($scope, Info, $cookieStore, $timeout) {
            "use strict";
            $scope.tagline = undefined;
            $scope.churchName = undefined;
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

            $scope.login = function() {
                Info.login($scope.login).success(function(response) {
                    if (response.success === true) {
                        $cookieStore.put("FaithTracUserId", response.user.userId);
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