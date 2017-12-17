(function () {
  'use strict';

  angular.module('OwlAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-ios-list-outline',
            order: 300,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/tables/TablesPageCtrl.js',
                    'xeditable'
                  ]);
              }
          }
        }).state('tables.basic', {
          url: '/basic',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('tables.smart', {
          url: '/smart',
          templateUrl: 'app/pages/tables/smart/tables.html',
          title: 'Smart Tables',
          sidebarMeta: {
            order: 100,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'smart-table'
                  ]);
              }
          }
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
