angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the TeacherController
        .when('/teachers', {
            templateUrl: 'views/teachers.html',
            controller: 'TeacherController'
        });

    $locationProvider.html5Mode(true);

}]);
