(function () {
  'use strict';

  angular.module('OwlAdmin.pages.charts.morris', [])
    .config(routeConfig).config(function(baConfigProvider){
      var layoutColors = baConfigProvider.colors;
      Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
      Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
      Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.morris', {
          url: '/morris',
          templateUrl: 'app/pages/charts/morris/morris.html',
          title: 'Morris',
          sidebarMeta: {
            order: 300,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/jquery/morris.js/morris.css' ,
                    '../libs/jquery/morris.js/morris.js',
                    'app/pages/charts/morris/morrisCtrl.js'
                  ]);
              }
          }
        });
  }

})();
