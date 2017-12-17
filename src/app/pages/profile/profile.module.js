(function () {
  'use strict';

  angular.module('OwlAdmin.pages.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl',
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/css/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
                    '../libs/jquery/bootstrap-switch/dist/js/bootstrap-switch.js',
                    'app/theme/inputs/baSwitcher/baSwitcher.js',
                    'app/pages/profile/ProfileModalCtrl.js',
                    'app/pages/profile/ProfilePageCtrl.js',
                    'app/theme/services/fileReader.js',
                    'app/theme/directives/ngFileSelect.js'
                  ]);
              }
          }
        });
  }

})();
