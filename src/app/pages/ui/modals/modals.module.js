(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.modals', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.modals', {
          url: '/modals',
          templateUrl: 'app/pages/ui/modals/modals.html',
          controller: 'ModalsPageCtrl',
          title: 'Modals',
          sidebarMeta: {
            order: 300,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/ui/modals/ModalsPageCtrl.js',
                    'app/pages/ui/modals/progressModal/ProgressModalCtrl.js',
                    'app/pages/ui/modals/notifications/NotificationsCtrl.js',
                    'app/theme/services/baProgressModal.js'
                  ]);
              }
          }
        });
  }

})();
