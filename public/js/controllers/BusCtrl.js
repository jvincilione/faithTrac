angular.module('BusCtrl', [])
    .controller('BusController', ['$scope', "Bus", function($scope, Bus) {
        $scope.busses;

        (function() {
            Bus.getAllBusses()
            .success(function(data) {
                $scope.busses = data;
            });
        })();

}]);