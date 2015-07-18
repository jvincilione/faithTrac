angular.module("TeacherCtrl", [])
    .controller("TeacherController", ["$scope", "$location", "Teacher",
        function ($scope, $location, Teacher) {
            "use strict";
            //define variables
            $scope.teachers = undefined;
            $scope.teacher = undefined;
            $scope.newTeacher = undefined;

            var init = function () {
                // if we're not on the main teachers page
                // there is no need to query the db
                if ($location.$$path.indexOf("id") === -1) {
                    $scope.getAllTeachers();
                }

                // if we're not on a single teacher page
                // there is no need to query the db
                if ($location.$$path.indexOf("id") > -1) {
                    // split the url on the "=" to get the numerical id
                    // query database for teacher with that id.
                    var path = $location.$$path.split("=");
                    $scope.getTeacher(path[path.length - 1]);
                }
            };

            $scope.getAllTeachers = function() {
                //query database to get all teachers
                Teacher.getAllTeachers()
                    .success(function (data) {
                        $scope.teachers = data;
                    });
            };

            $scope.getTeacher = function(id) {
                Teacher.getTeacher(id)
                    .success(function (data) {
                        $scope.teacher = data[0];
                    });
            };

            $scope.newTeacher = function() {
                Teacher.createTeacher($scope.newTeacher)
                    .success(function(response) {
                        throw response;
                    });
            };

            init();
        }
    ]);