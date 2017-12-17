(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.icons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.icons', {
          url: '/icons',
          templateUrl: 'app/pages/ui/icons/icons.html',
          controller: 'IconsPageCtrl',
          title: 'Icons',
          sidebarMeta: {
            order: 200,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/ui/icons/IconsPageCtrl.js'
                  ]);
              }
          }
        });
  }

})();
