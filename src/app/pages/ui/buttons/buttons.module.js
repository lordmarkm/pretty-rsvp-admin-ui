(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.buttons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.buttons', {
          url: '/buttons',
          templateUrl: 'app/pages/ui/buttons/buttons.html',
          controller: 'ButtonPageCtrl',
          title: 'Buttons',
          sidebarMeta: {
            order: 100,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/ui/buttons/ButtonPageCtrl.js',
                    'angular-progress-button-styles'
                  ]);
              }
          }
        });
  }

})();
