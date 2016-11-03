(function(){
  angular
  .module('jac.admin.admin-service', [])
  .service('adminService', adminService);
  adminService.$inject = ['$http', '$q', '$state'];
      function adminService($http, $q, $state){

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
