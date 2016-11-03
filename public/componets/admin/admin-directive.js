(function(){
  angular
    .module('jac.admin.admin-directive', [])
    .directive('admin', admin);

    function admin(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/admin.html',
        scope: {},
        controller: adminController,
        controllerAs: 'adminController'
      };
      return directive;
}

  adminController.$inject = ['adminService', '$scope'];

  function adminController(adminService, $scope) {

    _init = function() {
    };


    _init();
  }
})();
