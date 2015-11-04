angular.module('ClassService', []).factory('Class', ['$http', function($http) {

    return {
        // call to get all teachers
        getClasses: function(type) {
            return $http.get('/api/classes/type=' + encodeURIComponent(type))
            .error(function(data, status, headers, config) {
                console.log('error');
            });
        },

        // call to get specific class
        getClass: function(id) {
            return $http.get('/api/classes/id=' + id);
        },

        //create a class
        createClass: function(teacherData) {
            return $http.post('/api/classes/new/', teacherData);
        },

        // call to DELETE a class
        deleteClass: function(id) {
            return $http.delete('/api/classes/' + id);
        }
    }

}]);
