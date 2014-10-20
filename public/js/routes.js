angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // teachers page that will use the TeacherController
        .when('/teachers', {
            templateUrl: 'views/teachers.html',
            controller: 'TeacherController'
        })

        .when('/classes', {
            templateUrl: 'views/classes.html',
            controller: 'ClassController'
        })

        .when('/busses', {
            templateUrl: 'views/busses.html',
            controller: 'BussController'
        })

        .when('/master-clubs', {
            templateUrl: 'views/master-clubs.html',
            controller: 'MasterClubController'
        })

        .when('/members', {
            templateUrl: 'views/members.html',
            controller: 'MemberController'
        });

    $locationProvider.html5Mode(true);

}]);
