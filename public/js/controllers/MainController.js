/* globals angular */
angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', 'Info', '$cookies', '$timeout', 'User',
        function($scope, Info, $cookies, $timeout, User) {
            'use strict';
            $scope.tagline = undefined;
            $scope.churchName = 'King\'s Way';//undefined;
            $scope.loggedInUser = $cookies.get('FaithTracUserId') || null;
            $scope.login = {};
            $scope.errorMessage = false;
            $scope.user = Info.getUser();

            var init = function() {
                if ($scope.loggedInUser && !$scope.user) {
                    User.getUser($scope.loggedInUser)
                        .success(function(response) {
                            Info.setUser(response);
                            $scope.user = response;
                        });
                }
                if ($scope.user && window.location.pathname.indexOf('logout') > -1) {
                    logout();
                }

                if (!$scope.churchName) {
                     // get church info
                    Info.getInfo().success(function(response) {
                        $scope.tagline = response.tagline;
                        $scope.churchName = response.title;
                    }).error(function(response) {
                        Info.logError(response);
                    });
                }
            };

            $scope.loginUser = function() {
                Info.loginUser($scope.login)
                    .success(function(response) {
                        if (response.success === true) {
                            $cookies.put('FaithTracUserId', response.user.id);
                            Info.setUser(response.user);
                            $scope.user = response.user;
                        } else {
                            $scope.errorMessage = response.message;
                            $scope.messageType = 'error';
                            $timeout(function() {
                                $scope.errorMessage = false;
                                $scope.messageType = null;
                            }, 3000);
                        }
                    });
            };

            var logout = function() {
                $cookies.remove('FaithTracUserId');
                Info.setUser(null);
                $scope.user = null;
            };

            init();
        }
    ]
);
