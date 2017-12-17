(function () {
    'use strict';

    angular.module('mynt.service')
        .service('paymentAuditService', paymentAuditService);

    function paymentAuditService($resource, constants) {
        return $resource(constants.paymentGatewayUrl + '/api/payment/payment-audit', {}, {
            findAuditByToken: {
                url: constants.paymentGatewayUrl + '/api/payment/payment-audit/paymentToken/:paymentToken',
                isArray: true
            }
        });
    }

})();