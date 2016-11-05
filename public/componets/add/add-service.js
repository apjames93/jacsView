(function(){
  angular
    .module('jac.add.add-service', [])
    .service('addService', addService);
    addService.$inject = ['$http', '$q', 'loginService', '$state'];

    function addService($http, $q, loginService, $state){

      return {
        add: add,
        getCategory: getCategory
      };


      function add(description, img, lookUp){
        var deferred = $q.defer();
        $http({
          method: 'put',
          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          params: {
          description: description,
          img: img,
          lookUp: lookUp
          },
          url: 'http://localhost:3000/api/'
        }).then(function successCallback(response) {
          deferred.resolve(response);
          $state.go($state.$current, null, { reload: true });
        }, function errorCallback(err) {

          deferred.reject(err);
        });
          return deferred.promise;
      }


      function getCategory(){
        var deferred = $q.defer();
        $http({
          method: 'get',
          url: 'http://localhost:3000/api/category/'
          }).then(function successCallback(response) {
            console.log(response);
           deferred.resolve(response.data);
          }, function errorCallback(err) {
           deferred.reject(err);
          });
        return deferred.promise;
      }


    }
})();
