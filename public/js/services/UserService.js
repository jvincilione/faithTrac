angular.module('UserService', []).factory('User', ['$http', function($http) {
    'use strict';
    return {
        // get all users
        allUsers: function() {
            return $http.get('/api/users/all/');
        },
        // call to get specific user
        getUser: function(id) {
            return $http.get('/api/users/?id=' + encodeURIComponent(id));
        },

        //create a user... also used to update the user
        createUser: function(data) {
            return $http.post('/api/users/update/', data);
        },

        // call to DELETE a user
        deleteUser: function(id) {
            return $http.delete('/api/users/?id=' + id);
        },

        // users by role (mainly used to get all teachers)
        getUsersByRole: function(role) {
            return $http.get('api/users/?role=' + role);
        }

    };
}]);
