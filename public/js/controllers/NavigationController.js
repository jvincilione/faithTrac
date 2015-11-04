/* globals angular */
angular.module('NavigationCtrl', []).controller('NavigationController', ['$scope', 'Info',
    function($scope, Info) {
        'use strict';
        $scope.info = Info;

        var init = function() {
            getNav();
        },
        getNav = function() {
            $scope.nav = [
                {
                    title: 'Classes',
                    url: '/classes/',
                    icon: 'th-large',
                    show: true
                },
                {
                    title: 'Workers',
                    url: '/teachers/',
                    icon: 'user',
                    show: true
                },
                {
                    title: 'Members',
                    url: '/members/',
                    icon: 'user',
                    show: true
                },
                {
                    title: 'Busses',
                    url: '/busses/',
                    icon: 'road',
                    show: true
                },
                {
                    title: 'Master Clubs',
                    url: '/master-clubs/',
                    icon: 'book',
                    show: true
                }
            ];
        };

        init();
}]);
