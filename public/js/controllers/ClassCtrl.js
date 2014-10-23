angular.module('ClassCtrl', [])
    .controller('ClassController', ['$scope', '$location', "Class", function($scope, $location, Class) {
        //define variables
        $scope.allClasses;

        //functions to get data
        $scope.getClasses = function() {

            //query database to get all teachers
            Class.getAllClasses()
                .success(function(data) {
                    $scope.allClasses = data;
                }
            );
        }

        $scope.getClasses();
}]);