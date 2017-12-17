(function () {
  'use strict';

  angular.module('mynt.service')
    .service('paymentEntryService', paymentEntryService);

  function paymentEntryService($resource, constants) {
    return $resource(constants.paymentGatewayUrl + '/api/payment/payment-entry', {}, {
      findByPaymentToken: {
        url: constants.paymentGatewayUrl + '/api/payment/payment-entry/paymentToken/:paymentToken',
        isArray: false
      }
    });
  }

})();
