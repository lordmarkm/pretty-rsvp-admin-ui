(function () {
  'use strict';

  angular.module('OwlAdmin.pages.charts', [
      'OwlAdmin.pages.charts.amCharts',
      'OwlAdmin.pages.charts.chartJs',
      'OwlAdmin.pages.charts.chartist',
      'OwlAdmin.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-ios-pie-outline',
            order: 500,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([

                  ]);
              }
          }
        });
  }

})();
