angular.module('ClassCtrl', [])
    .controller('ClassController', ['$scope', '$location', 'Class', '$routeParams', 'User', 'Info',
        function($scope, $location, Class, $routeParams, User, Info) {
            'use strict';
            $scope.person = {};
            $scope.allClasses = null;
            $scope.classInfo = null;
            $scope.teachers = null;
            $scope.notification = null;
            $scope.person.classId = $routeParams && $routeParams.classId || null;
            $scope.person.classId = $routeParams && $routeParams.classId || null;

            var init = function() {
                //query database to get all classes by class type
                Class.getClasses($scope.classType)
                    .success(function(data) {
                        $scope.allClasses = data;
                    });
                if ($scope.person.classId) {
                    User.getTeachers()
                        .success(function(response) {
                            $scope.teachers = response;
                        }).error(function(response) {
                            Info.logError(response);
                        });
                }
            };

            $scope.newClass = function() {
                Class.createClass($scope.classInfo)
                    .success(function() {
                        $scope.notification.message = 'Class \'' + $scope.classInfo.name + '\' created.';
                        $scope.notification.type = 'Success';
                    }).error(function(response) {
                        Info.logError(response);
                        $scope.notification.message = 'Class \'' + $scope.classInfo.name + '\' not created. Please Contact an administrator.';
                        $scope.notification.type = 'Error';
                    });
            };

            $scope.addTeacher = function(teacherId) {
                Class.addTeacher(teacherId)
                    .success(function() {
                        $scope.notification.message = 'The teacher has been added to this class.';
                        $scope.notification.type = 'Success';
                    }).error(function(response) {
                        Info.logError(response);
                        $scope.notification.message = 'The teacher has not been added to this class. Please Contact an administrator.';
                        $scope.notification.type = 'Error';
                    });
            };

            init();
        }
    ]);
