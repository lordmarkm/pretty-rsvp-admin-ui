(function () {
  'use strict';

  angular.module('OwlAdmin.pages.components.tree', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components.tree', {
          url: '/tree',
          templateUrl: 'app/pages/components/tree/tree.html',
          title: 'Tree View',
          sidebarMeta: {
            order: 400,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'ngJsTree'
                  ]);
              }
          }
        });
  }

})();
