angular.module('MemberCtrl', [])
    .controller('MemberController', ['$scope', '$location', "Member", function($scope, $location, Member) {
        //define variables
        $scope.members;

        //functions to get data
        $scope.getMembers = function() {

            //query database to get all teachers
            Member.getAllMembers()
                .success(function(data) {
                    $scope.members = data;
                }
            );
        }

        $scope.getMembers();
}]);