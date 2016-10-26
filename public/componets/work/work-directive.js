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

  workController.$inject = ['workService', '$scope', '$filter'];

  function workController(workService, $scope, $filter) {

    _init = function() {
      _getdata();
      _category();
    };

    _sortData = function(array){
      var sortArray = [];
      for(var i = 0; i < array.length; i++){
          if(sortArray.indexOf(array[i]) == -1){
          sortArray.push(array[i]);
          }
      }
      return sortArray;
    };


    _category = function(){
      workService.getInfo()
      .then(function(data){
        var category = [];
        for (var i = 0; i < data.length; i++) {
          category.push(data[i].lookUp);
        }
        $scope.lookUpId = _sortData(category);
        _ShowData($scope.lookUpId);

      });
    };

    _getdata = function(){
      workService.getInfo()
      .then(function(data){
        $scope.work = data;
      });
    };

    _ShowData = function(data){
      var id = data;
      var cat = [];
      workService.getInfo()
      .then(function(data){
        for (var i = 0; i < data.length; i++) {
          var curent = this[i];
          if(data[i].lookUp === id[i]){
            cat.push(data[i]);
          }
        }
        $scope.mainCategory = cat;
        console.log($scope.mainCategory);
      });
    };

    _init();
  }
})();
