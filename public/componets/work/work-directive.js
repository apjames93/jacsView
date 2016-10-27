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
      _category();
    };

    _sortData = function(array){
      var sortArray = [];
      for(var i = 0; i < array.length; i++){
          if(sortArray.indexOf(array[i]) == -1){
          sortArray.push(array[i]);
          }
      }
      // console.log(sortArray);
      return sortArray;
    };


    _category = function(){
      workService.getInfo()
      .then(function(data){
        var category = [];
        for (var i = 0; i < data.length; i++) {
          category.push(data[i].lookUp);
        }
        // console.log($scope.lookUpId);
        var temp = _sortData(category);
        var categoryId = [];
        for (var i = 0; i < temp.length; i++) {
          categoryId.push({ info: temp[i], lookUpId : undefined});
        }
        $scope.lookUpId = categoryId;

        _ShowData($scope.lookUpId);

      });
    };


    _ShowData = function(data){
      var id = data;
      workService.getInfo()
      .then(function(data){
        var temp = [];
        for (var i = 0; i < id.length; i++) {
          for (var j = 0; j < data.length; j++) {
            if (id[i].info === data[j].lookUp && id[i].lookUpId === undefined) {
              id[i].lookUpId = data[j];
              temp.push({category_name: id[i].lookUpId.category_name, img : id[i].lookUpId.img })
              $scope.mainCategory = temp


            }
          }

        }

      });
    };

    _init();
  }
})();
