(function(){
  angular
    .module('jac.type.type-directive', [])
    .directive('type', type);

    function type(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/type.html',
        scope: {},
        controller: typeController,
        controllerAs: 'typeController'
      };
      return directive;
}

  typeController.$inject = ['typeService', '$scope', '$stateParams'];

  function typeController(typeService, $scope, $stateParams) {

    _init = function() {
      _getType();

    };

    _getType = function() {
      typeService.getInfo($stateParams.id)
      .then(function(data){
        console.log(data.data.catData);

        $scope.type = data.data.catData;
      })

    }



    _init();
  }
})();
