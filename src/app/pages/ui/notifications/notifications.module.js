(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.notifications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.notifications', {
          url: '/notifications',
          templateUrl: 'app/pages/ui/notifications/notifications.html',
          controller: 'NotificationsPageCtrl',
          title: 'Notifications',
          sidebarMeta: {
            order: 700,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/ui/notifications/NotificationsPageCtrl.js'
                  ]);
              }
          }
        });
  }

})();
