  (function(){
  angular
    .module('jac.home.home-directive', [])
    .directive('home', home);

    function home(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/home.html',
        scope: {},
        controller: homeController,
        controllerAs: 'homeController'
      };
      return directive;
    }



    function homeController() {

    }

})();
