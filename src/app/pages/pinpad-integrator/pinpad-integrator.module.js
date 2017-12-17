(function () {
  'use strict';

  angular.module('OwlAdmin.pages.pinpad-integrator', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('pinpad-integrator', {
        url: '/pinpad-integrator/list',
        templateUrl: 'app/pages/pinpad-integrator/list.html',
          title: 'Pinpad Integrator List',
          controller: 'PinpadIntegratorListCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
              icon: 'fa fa-shopping-cart',
              order: 80,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'smart-table',
                    'app/pages/pinpad-integrator/PinpadIntegratorListCtrl.js',
                    'app/services/pinpadIntegratorService.js'
                  ]);
              }
          }
      })
      .state('pinpad-integrator-add', {
          url: '/pinpad-integrator/add',
          templateUrl: 'app/pages/pinpad-integrator/add/add.html',
          title: 'Add Pinpad Integrator Profile',
          controller: 'AddPinpadIntegratorCtrl as vm',
          resolve: {
              lazyLoad: function ($ocLazyLoad) {
                  return $ocLazyLoad.load([
                      'app/pages/pinpad-integrator/add/AddPinpadIntegratorCtrl.js',
                      'app/services/pinpadIntegratorService.js',
                      'app/theme/inputs/baSwitcher/baSwitcher.js'
                  ]);
              }
          }
      })
      .state('pinpad-integrator-view', {
          url: '/pinpad-integrator/{integratorId}',
          templateUrl: 'app/pages/pinpad-integrator/view/view.html',
          title: 'Pinpad Integrator Profile Details',
          controller: 'ViewPinpadIntegratorCtrl as vm',
          resolve: {
              lazyLoad: function ($ocLazyLoad) {
                  return $ocLazyLoad.load([
                      'app/pages/pinpad-integrator/view/ViewPinpadIntegratorCtrl.js',
                      'app/services/pinpadIntegratorService.js',
                      'app/theme/inputs/baSwitcher/baSwitcher.js'
                  ]);
              },
              profile: function ($stateParams, $q, pinpadIntegratorService) {
                  var deferred = $q.defer();
                  pinpadIntegratorService.findByIntegratorProfileId({integratorId: $stateParams.integratorId}, function (response) {
                      deferred.resolve(response);
                  });
                  return deferred.promise;
              }
          }
      });
    $urlRouterProvider.when('/pinpad-integrator/', '/pinpad-integrator/list');
    $urlRouterProvider.when('/pinpad-integrator', '/pinpad-integrator/list');
  }
})();
