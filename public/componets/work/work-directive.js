(function(){
  angular
    .module('jac.work.work-directive', [])
    .directive('work', work);

    function work(){
      var directive = {
        restrict: 'E',
        templateUrl: '/templates/jacWork.html',
        scope: {},
        controller: workController,
        controllerAs: 'workController'
      };
      return directive;
}

  workController.$inject = ['workService', '$scope'];

  function workController(workService, $scope) {

    _init = function() {
      _getdata();
    };


    _getdata = function(){
      workService.getInfo()
      .then(function(data){
        $scope.albumInfo = data;
      });

    };

    _init();
  }
})();
