angular.module('TeacherCtrl', [])
    .controller('TeacherController', ['$scope', "Teacher", function($scope, Teacher) {
        $scope.teachers;
        (function() {
            Teacher.getAllTeachers()
            .success(function(data) {
                $scope.teachers = JSON.parse(JSON.stringify(data));
            });
        })();

}]);