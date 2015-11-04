'use strict';
angular.module(
    'faithTrac', [
        'ngRoute',
        'ngCookies',
        // services
        'ClassService',
        'MemberService',
        'UserService',
        'AttendeeService',
        'InfoService',
        // controllers
        'MainCtrl',
        'ClassCtrl',
        'MemberCtrl',
        'NavigationCtrl',
        'UserCtrl',
        // routes
        'appRoutes'
    ]
);
