angular.module('ClassCtrl', [])
    .controller('ClassController', ['$scope', '$location', "Class", "$routeParams",
        function ($scope, $location, Class, $routeParams) {
            $scope.person = {};
            $scope.allClasses;
            $scope.person.classId = $routeParams && $routeParams.classId || null;

            init = function () {

                //query database to get all teachers
                Class.getClasses('Sunday School')
                    .success(function (data) {
                        $scope.allClasses = data;
                    });
            };

            $scope.newClass = function() {
                Class.createClass($scope.class)
                    .success(function(response) {
                        console.log(response);
                    });
            }

            init();
        }
    ]);