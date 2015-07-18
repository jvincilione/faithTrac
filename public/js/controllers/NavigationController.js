angular.module('NavigationCtrl', []).controller('NavigationController', function($scope) {

    $scope.nav = [
        {
            title: "Classes",
            url: '/classes/',
            icon: 'th-large',
            show: true
        },
        {
            title: "Workers",
            url: '/teachers/',
            icon: 'user',
            show: true
        },
        {
            title: "Members",
            url: '/members/',
            icon: 'user',
            show: true
        },
        {
            title: "Busses",
            url: '/busses/',
            icon: 'road',
            show: true
        },
        {
            title: "Master Clubs",
            url: '/master-clubs/',
            icon: 'book',
            show: true
        }
    ];

});