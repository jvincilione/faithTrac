angular.module('faithTrac', ['ngRoute', 'TeacherService', 'MainCtrl', 'TeacherCtrl', 'appRoutes']);


// (function() {
//     var app = angular.module('church', []);

//     app.controller('ClassController', function() {
//         this.ssClasses = ssClasses;
//     });

//     app.controller('BusController', function() {
//         this.busses = busses;
//     });

//     var ssClasses = [
//         {
//             id: '10-12-B',
//             teachers: [
//                 'Jacques Vincilione',
//                 'Jennifer Vincilione'
//             ],
//             students: [
//                 {
//                     name        : "Alysia Boler",
//                     address     : "3184 Pilgrims Dr",
//                     address2    : undefined,
//                     city        : "Douglasville",
//                     state       : "GA",
//                     postal      : 30135,
//                     phone       : "678.591.9848",
//                     birthdate   : "Oct. 21, 1998",
//                     grade       : 10,
//                     parentName  : undefined,
//                     salvation   : "Unknown",
//                     baptizim    : "Unknown"
//                 }
//             ],
//         }
//     ]

//     var busses = [
//         {
//             id : 'John the Baptist',
//             captain : 'Ricky Shuler',
//             driver : "Steve Vetromile", 
//             workers : [
//                 "Brianna Jesser"
//             ],
//             riders: [
//                 {
//                     name        : "Alysia Boler",
//                     address     : "3184 Pilgrims Dr",
//                     address2    : undefined,
//                     city        : "Douglasville",
//                     state       : "GA",
//                     postal      : 30135,
//                     phone       : "678.591.9848",
//                     birthdate   : "10211998",
//                     grade       : 10,
//                     parentName  : undefined,
//                     salvation   : "Unknown",
//                     baptizim    : "Unknown"
//                 }
//             ],
//         }
//     ]
// })();