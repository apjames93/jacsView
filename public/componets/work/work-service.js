(function(){
  angular
  .module('jac.work.work-service', [])
  .service('workService', workService);
  workService.$inject = ['$http', '$q', '$state'];
      function workService($http, $q, $state){

          return {
            getInfo: getInfo,
          };

        function getInfo(){
          var deferred = $q.defer();
          $http({
            method: 'get',
           url: 'http://localhost:3000/api/hair/'
         }).then(function successCallback(response) {
          deferred.resolve(response.data.allData);
          }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
      }

      }
})();
