(function () {
  'use strict';

  angular.module('mynt.service')
    .service('merchantProfileService', merchantProfileService);

  function merchantProfileService($resource, constants) {
    return $resource(constants.paymentGatewayUrl + '/api/payment/merchant-profile', {}, {
        delete: { method: 'DELETE', id: '@id', url: constants.paymentGatewayUrl + '/api/payment/merchant-profile/:id'}
    });
  }

})();
