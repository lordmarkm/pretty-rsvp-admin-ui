(function () {
  'use strict';

  angular.module('OwlAdmin.pages.charts.chartist', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.chartist', {
          url: '/chartist',
          templateUrl: 'app/pages/charts/chartist/chartist.html',
          title: 'Chartist',
          sidebarMeta: {
            order: 100,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/jquery/chartist/dist/chartist.min.css',
                    '../libs/jquery/chartist/dist/chartist.min.js',
                    'app/pages/charts/chartist/chartistCtrl.js'

                  ]);
              }
          }
        });
  }

})();
