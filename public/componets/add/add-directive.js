(function(){

  angular
    .module('jac.add.add-directive', [])
    .directive('add', add);
    function add(){
      var directive = {
      restrict: 'E',
      templateUrl: 'templates/add.html',

      scope: {},
      controller: addController,
      controllerAs: 'addController'
    };
    return directive;
  }

  addController.$inject = ['addService', '$scope'];

  function addController(addService, $scope) {
    _init = function(){
      _getCategory();
    };

    _getCategory = function(){
      addService.getCategory()
      .then(function(data){
        $scope.names = data.allData;
        console.log('**************** names',$scope.names);
      });
    };

    $scope.addSubmit = function() {
      addService.add();
    };

    _init();
  }

})();
