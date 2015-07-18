angular.module('MemberCtrl', [])
    .controller('MemberController', ['$scope', '$location', "Member",
        function ($scope, $location, Member) {
            //define variables
            $scope.members;

            init = function () {

                //query database to get all teachers
                Member.getAllMembers()
                    .success(function (data) {
                        $scope.members = data;
                    });
            };

            init();
        }
    ]);