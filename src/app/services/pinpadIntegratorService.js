(function () {
  'use strict';

  angular.module('mynt.service')
    .service('pinpadIntegratorService', pinpadIntegratorService);

  function pinpadIntegratorService($resource, constants) {
    return $resource(constants.pinpadProviderUrl + '/api/integrator-profile', {}, {
      findByIntegratorProfileId: {
        url: constants.pinpadProviderUrl + '/api/integrator-profile/:integratorId',
        isArray: false
      },
      deleteIntegrator: {
        method: 'DELETE',
        url: constants.pinpadProviderUrl + '/api/integrator-profile/:integratorId',
        isArray: false
      }
    });
  }

})();
