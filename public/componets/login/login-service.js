(function(){
  angular
    .module('jac.login.login-service', [])
    .service('loginService', loginService);
    loginService.$inject = ['$http', '$location'];

    function loginService($http, $location){
      var user = {};

      return {
        getToken: getToken,
        getUserId : getUserId,
        loginUser: loginUser,
        getUserName : getUserName
      };

      function _setUserData(data) {
        user = data;
      }

      function getToken() {
        return user.token;
      }

      function getUserId(){
        return user.userId;
      }

      function getUserName(){
        return user.username;
      }

      function loginUser(username, password) {
        $http({
          method: 'post',
          params: {
          username: username,
          password: password
        },
          url: 'http://localhost:3000/auth/login'
        })
        .then(function successCallback(response) {
          console.log(response);
          _setUserData(response.data);
          $location.path('/edit');
        }, function errorCallback(err) {
          console.log('login err', err);
        });
      }
    }

})();
