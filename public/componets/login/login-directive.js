(function(){

  angular
    .module('jac.login.login-directive', [])
    .directive('login', login);
    function login(){
      var directive = {
      restrict: 'E',
      templateUrl: 'templates/login.html',

      scope: {},
      controller: loginController,
      controllerAs: 'loginController'
    };
    return directive;
  }

  loginController.$inject = ['loginService', '$scope'];

  function loginController(loginService, $scope) {
    _init = function(){
    };

    $scope.submit = function(username, password) {
      loginService.loginUser(username, password);
    };

    _init();
  }

})();
