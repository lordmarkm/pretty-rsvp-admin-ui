(function () {
  'use strict';

  angular.module('mynt.service', [], function ($provide, $httpProvider) {



    //ajax error handling
    $provide.factory('httpInterceptor', function($rootScope, $q) {
      return {
       'requestError': function(rejection) {
         return $q.reject(rejection);
        },
       'responseError': function(rejection) {
         $rootScope.$broadcast('ajaxError', rejection);
         return $q.reject(rejection);
        }
      };
    });
    $httpProvider.interceptors.push('httpInterceptor');
  });

})();
