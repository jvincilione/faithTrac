angular.module('AttendeeService', []).factory('Attendee', ['$http', function($http) {
    'use strict';
    return {
        // call to get all teachers
        getAttendee: function(type) {
            return $http.get('/api/classes/?type=' + encodeURIComponent(type));
        },

        // call to get specific class
        addAttendaceRecord: function(postData) {
            return $http.post('/api/classes/create/', postData);
        },

        //create a class
        createClass: function(teacherData) {
            return $http.post('/api/classes/new/', teacherData);
        },

        // call to DELETE a class
        deleteClass: function(id) {
            return $http.delete('/api/classes/?id=' + id);
        }
    };

}]);
