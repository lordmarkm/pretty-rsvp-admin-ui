(function() {
    'use strict';

    angular.module('OwlAdmin.pages.components', [
            'OwlAdmin.pages.components.timeline',
            'OwlAdmin.pages.components.tree',
            'OwlAdmin.pages.components.todo',
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Apps',
                sidebarMeta: {
                    icon: 'ion-ios-color-wand',
                    order: 100,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                          'app/pages/components/todo/TodoCtrl.js',
                          'app/pages/components/timeline/TimelineCtrl.js',
                          'app/pages/components/tree/treeCtrl.js',
                        ]);
                    }
                }
            });
    }

})();
