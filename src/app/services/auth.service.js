(function () {
    'use strict';

    angular.module('mynt.service')
        .service('authService', authService);

    function authService($resource, $q, constants, sweetAlert) {
        let service = $resource(constants.paymentGatewayUrl + '/api/auth');

        service.authenticate = function () {
          if (service.auth) {
            let defer = $q.defer();
            defer.resolve(service.auth);
            return defer.promise;
          } else {
            return service.get(function (auth) {
              service.auth = auth;
            }).$promise;
          }
        };

        service.isAuthorized = function (requiredAuths) {
          let resp = $q.defer();
          if (!requiredAuths || !requiredAuths.length) {
            //unsecured state
            resp.resolve(true);
            return resp.promise;
          }
          if (!service.userAuths) {
            console.debug(service.authenticate());
            service.authenticate().then(function (authResponse) {
              let userAuths = authResponse.authorities.map(function (authority) {
                return authority.authority;
              });
              service.userAuths = userAuths;
              //on auth success, check for authority intersection
              if (angular.isArray(requiredAuths)) {
                let intersection = requiredAuths.filter((n) => userAuths.includes(n));
                resp.resolve(intersection.length != 0);
              } else {
                resp.resolve(service.userAuths.indexOf(requiredAuths) != -1);
              }
            }, function () {
              //on auth failure
              sweetAlert.swal({
                title: 'Authentication Error',
                text: 'Could not retrieve user credentials!',
                type:'error'
              }).then(function () {
                window.location.href = '/auth.html?error=unauthorized';
              });
            });
          } else {
            if (angular.isArray(requiredAuths)) {
              let intersection = requiredAuths.filter((n) => service.userAuths.includes(n));
              resp.resolve(intersection.length != 0);
            } else {
              resp.resolve(service.userAuths.indexOf(requiredAuths) != -1);
            }
          }
          return resp.promise;
        };

        return service;
    }

})();