angular.module(
    'faithTrac', [
        'ngRoute', 
        // services
        'TeacherService', 
        'ClassService', 
        'MemberService', 
        'UserService',
        'AttendeeService',
        'InfoService',
        // controllers
        'MainCtrl', 
        'TeacherCtrl', 
        'ClassCtrl',
        'MemberCtrl', 
        'NavigationCtrl', 
        // routes
        'appRoutes'
    ]
);