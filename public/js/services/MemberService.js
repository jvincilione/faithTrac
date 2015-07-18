angular.module('MemberService', []).factory('Member', ['$http', function($http) {

    return {
        // call to get all teachers
        getAllMembers : function() {
            return $http.get('/api/members/all/')
            .error(function(data, status, headers, config) {
                console.log('error');
            });
        },

        // call to get specific teacher
        getMember : function(id) {
            return $http.get('/api/members/?id=' + id);
        },

        //create a teacher
        createMember : function(teacherData) {
            return $http.post('/api/members/', teacherData);
        },

        // call to DELETE a teacher
        deleteMember : function(id) {
            return $http.delete('/api/members/?id=' + id);
        }
    }       

}]);
