(function(){
  angular
    .module('jac.mobileNav.mobileNav-directive', [])
    .directive('navMobile', navMobile);

    function navMobile(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/navMobile.html',
        scope: {},
      };
      return directive;
    }
})();
