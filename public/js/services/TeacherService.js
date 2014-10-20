angular.module('TeacherService', []).factory('Teacher', ['$http', function($http) {

    return {
        // call to get all teachers
        getAllTeachers : function() {
            return $http.get('/api/teachers/getAllTeachers')
            .error(function(data, status, headers, config) {
                console.log('error');
            });
        },

        // call to get specific teacher
        getTeacher : function(id) {
            return $http.get('/api/teachers/' + id);
        },

        //create a teacher
        createTeacher : function(teacherData) {
            return $http.post('/api/teachers', teacherData);
        },

        // call to DELETE a teacher
        deleteTeacher : function(id) {
            return $http.delete('/api/teachers/' + id);
        }
    }       

}]);
