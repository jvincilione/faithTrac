angular.module('TeacherCtrl', [])
    .controller('TeacherController', ['$scope', '$location', "Teacher", function($scope, $location, Teacher) {
        //define variables
        $scope.teachers;
        $scope.teacher;

        //functions to get data
        $scope.getTeachers = function() {
            //if we're not on the main teachers page return
            //there is no need to query the db
            if($location.$$path.indexOf('id') > -1 ) return;

            //query database to get all teachers
            Teacher.getAllTeachers()
                .success(function(data) {
                    $scope.teachers = data;
                }
            );
        }

        $scope.getSingleTeacher = function() {
            //if we're not on a single teacher page, return
            //there is no need to query the db
            if($location.$$path.indexOf('id') < 0 ) return;

            //split the url on the "=" to get the numerical id
            //query database for teacher with that id.
            var path = $location.$$path.split('=');
            Teacher.getTeacher(path[path.length - 1])
                .success(function(data) {
                    $scope.teacher = data[0];
                }
            );
        }

        $scope.getTeachers();
        $scope.getSingleTeacher();
}]);