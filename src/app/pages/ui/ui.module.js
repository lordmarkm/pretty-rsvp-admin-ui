(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui', [
    'OwlAdmin.pages.ui.typography',
    'OwlAdmin.pages.ui.buttons',
    'OwlAdmin.pages.ui.icons',
    'OwlAdmin.pages.ui.modals',
    'OwlAdmin.pages.ui.grid',
    'OwlAdmin.pages.ui.alerts',
    'OwlAdmin.pages.ui.progressBars',
    'OwlAdmin.pages.ui.notifications',
    'OwlAdmin.pages.ui.tabs',
    'OwlAdmin.pages.ui.slider',
    'OwlAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
