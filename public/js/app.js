
(function(){
  angular
    .module('jac',[
     'ui.router',
     'ui.bootstrap',
     'jac.sidenav',
     'jac.rightportal',
     'jac.mobileNav',
     'jac.work'
    //  'jac.topName'

   ])

   .run([
       "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
         $rootScope.$state = $state;
         return $rootScope.$stateParams = $stateParams;
       }
     ])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider){

      $urlRouterProvider.otherwise('/about');

      $stateProvider
        .state('home',{
          url: '/about',
          templateUrl: '/templates/home.html',
        });
        $stateProvider
          .state('work',{
            url: '/work',
            templateUrl: '/templates/work.html',
          });
          $stateProvider
            .state('contact',{
              url: '/contact',
              templateUrl: '/templates/contact.html',
            });
      });
})();
