(function () {
  'use strict';

  angular.module('OwlAdmin.pages.components.todo', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.todo', {
        url: '/todo',
        templateUrl: 'app/pages/components/todo/todo.html',
          title: 'Todo',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 0,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/pages/components/widgets/componentsTodo/componentsTodo.directive.js',
                    'app/pages/components/widgets/componentsTodo/ComponentsTodoCtrl.js'

                  ]);
              }
          }
      });
  }
})();
