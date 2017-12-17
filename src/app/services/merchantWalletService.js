(function () {
    'use strict';

    angular.module('mynt.service')
        .service('merchantWalletService', merchantWalletService);

    function merchantWalletService($resource, constants) {
        return $resource(constants.paymentGatewayUrl + '/api/payment/merchant-wallet', {}, {
            delete: { method: 'DELETE', id: '@id', url: constants.paymentGatewayUrl + '/api/payment/merchant-wallet/:id'}
        });
    }

})();
