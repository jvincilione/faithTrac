angular.module('ClassService', []).factory('Class', ['$http', function($http) {

    return {
        // call to get all teachers
        getAllClasses : function() {
            return $http.get('/api/classes/getAllClasses')
            .error(function(data, status, headers, config) {
                console.log('error');
            });
        },

        // call to get specific teacher
        getClass : function(id) {
            return $http.get('/api/classes/id=' + id);
        },

        //create a teacher
        createClass : function(teacherData) {
            return $http.post('/api/classes', teacherData);
        },

        // call to DELETE a teacher
        deleteClass : function(id) {
            return $http.delete('/api/classes/' + id);
        }
    }       

}]);
