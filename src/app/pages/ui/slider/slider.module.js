(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.slider', {
          url: '/slider',
          templateUrl: 'app/pages/ui/slider/slider.html',
          title: 'Sliders',
          sidebarMeta: {
            order: 1000,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/css/ionrangeslider/css/ion.rangeSlider.css',
                    '../libs/css/ionrangeslider/css/ion.rangeSlider.skinFlat.css',
                    '../libs/jquery/ionrangeslider/js/ion.rangeSlider.js',
                    'app/theme/directives/ionSlider.js'
                  ]);
              }
          }
        });
  }

})();
