angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // teachers 
        // TeacherController
        // ================================
        .when('/teachers/', {
            templateUrl: 'views/teachers/list.html',
            controller: 'TeacherController'
        })
        .when('/teachers/:id/', {
            templateUrl: 'views/teachers/single.html',
            controller: 'TeacherController'
        })
        .when('/teachers/:id/edit/', {
            templateUrl: 'views/teachers/edit.html',
            controller: 'TeacherController'
        })

        // users 
        // UsersController
        // ================================
        .when('/users/', {
            templateUrl: 'views/users/list.html',
            controller: 'UsersController'
        })
        .when('/users/new/', {
            templateUrl: 'views/users/new.html',
            controller: 'UsersController'
        })
        .when('/users/:id/', {
            templateUrl: 'views/users/single.html',
            controller: 'UsersController'
        })
        .when('/users/:id/edit/', {
            templateUrl: 'views/users/edit.html',
            controller: 'UsersController'
        })

        // classes 
        // ClassController
        // ================================
        // class type = Sunday School
        .when('/classes/', {
            templateUrl: 'views/classes/list.html',
            controller: 'ClassController'
        })
        .when('/classes/new/', {
            templateUrl: 'views/classes/new.html',
            controller: 'ClassController'
        })
        .when('/classes/:id/', {
            templateUrl: 'views/classes/single.html',
            controller: 'ClassController'
        })
        .when('/classes/:id/edit/', {
            templateUrl: 'views/classes/edit.html',
            controller: 'ClassController'
        })

        // members 
        // MemberController
        // ================================
        .when('/members/', {
            templateUrl: 'views/members/list.html',
            controller: 'MemberController'
        })
        .when('/members/new/', {
            templateUrl: 'views/members/new.html',
            controller: 'MembersController'
        })
        .when('/members/:id/', {
            templateUrl: 'views/members/single.html',
            controller: 'MembersController'
        })
        .when('/members/:id/edit/', {
            templateUrl: 'views/members/edit.html',
            controller: 'MembersController'
        });

    $locationProvider.html5Mode(true);

}]);
