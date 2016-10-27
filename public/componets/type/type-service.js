(function(){
  angular
  .module('jac.type.type-service', [])
  .service('typeService', typeService);
  typeService.$inject = ['$http', '$q', '$state'];
      function typeService($http, $q, $state){

          return {
            getInfo: getInfo,
          };

        function getInfo(id){
          var deferred = $q.defer();
          $http({
            method: 'get',
           url: 'http://localhost:3000/api/hair/' + id
         }).then(function successCallback(response) {
           console.log(response);
          deferred.resolve(response);
          }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
      }

      }
})();
