angular.module('TeacherService', []).factory('Teacher', ['$http', function($http) {

    return {
        // call to get all teachers
        get : function() {
            return $http.get('/api/teachers');
        },

        //create a teacher
        create : function(teacherData) {
            return $http.post('/api/teachers', teacherData);
        },

        // call to DELETE a teacher
        delete : function(id) {
            return $http.delete('/api/teachers/' + id);
        }
    }       

}]);
