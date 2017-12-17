(function () {
  'use strict';

  angular.module('OwlAdmin.pages.merchant', ['mynt.service'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('merchant', {
        url: '/merchant/list',
        templateUrl: 'app/pages/merchant/list.html',
          title: 'Merchant Profile List',
          sidebarMeta: {
            icon: 'fa fa-shopping-basket',
            order: 79,
          },
          controller: 'MerchantListCtrl',
          controllerAs: 'vm',
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'smart-table',
                    'app/pages/merchant/MerchantListCtrl.js',
                    'app/services/merchantProfileService.js',
                    'app/services/merchantWalletService.js'
                  ]);
              }
          },
          access: ['ROLE_ADMIN', 'MERCHANT_LIST']
      }).state('merchant-add', {
            url: '/merchant/add',
            templateUrl: 'app/pages/merchant/add/add.html',
            title: 'Add Merchant',
            controller: 'AddMerchantCtrl',
            controllerAs: 'vm',
            resolve: {
                lazyLoad: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'xeditable',
                        'app/theme/inputs/baSwitcher/baSwitcher.js',
                        'app/pages/merchant/add/AddMerchantCtrl.js'
                    ]);
                }
            }
        }).state('merchant-details', {
          url: '/merchant/details/{merchantCode}',
          templateUrl: 'app/pages/merchant/details/details.html',
          title: 'Merchant Details',
          controller: 'MerchantDetailsCtrl',
          controllerAs: 'vm',
          resolve: {
                lazyLoad: function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                       'smart-table',
                       'xeditable',
                       'app/theme/inputs/baSwitcher/baSwitcher.js',
                       'app/pages/merchant/details/MerchantDetailsCtrl.js'
                    ]);
                },
                merchant: function($rootScope, $q, $stateParams, merchantProfileService) {
                    var d = $q.defer();
                    merchantProfileService.get({term: 'code==' + $stateParams.merchantCode}, function(data){
                        console.log('data', data);
                        if (data.content && data.content.length) {
                            var merchant = data.content[0];
                            d.resolve(merchant);
                        }
                    }, function (error) {
                        $rootScope.$broadcast('ajaxError', error);
                        d.resolve({});
                    });
                    return d.promise;
                }
          }
      });
    $urlRouterProvider.when('/merchant/', 'merchant/list');
    $urlRouterProvider.when('/merchant', 'merchant/list');
  }
})();
