(function() {
    'use strict';

    angular.module('OwlAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/pages/dashboard/dashboard.html',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-ios-home',
                    order: 0,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                          'app/pages/dashboard/blurFeed/blurFeed.directive.js',
                          'app/pages/dashboard/blurFeed/BlurFeedCtrl.js',
                          'app/pages/dashboard/calendar/dashboardCalendar.js',
                          'app/pages/dashboard/dashboardLineChart/dashboardLineChart.directive.js',
                          'app/pages/dashboard/dashboardLineChart/DashboardLineChartCtrl.js',
                          'app/pages/dashboard/dashboardMap/dashboardMap.directive.js',
                          'app/pages/dashboard/dashboardChat/dashboardChat.directive.js',
                          'app/pages/dashboard/dashboardMap/DashboardMapCtrl.js',
                          'app/pages/dashboard/dashboardChat/DashboardChatCtrl.js',
                          'app/pages/dashboard/dashboardPieChart/dashboardPieChart.directive.js',
                          'app/pages/dashboard/dashboardPieChart/DashboardPieChartCtrl.js',
                          'app/pages/dashboard/pieCharts/dashboardPieChart.js',
                          'app/pages/dashboard/dashboardWidgets/dashboardWidgets.directive.js',
                          'app/pages/dashboard/trafficChart/trafficChart.directive.js',
                          'app/pages/dashboard/trafficChart/TrafficChartCtrl.js',
                          'app/pages/dashboard/dashboardTable/DashboardTable.js',
                        ]);
                    }
                }
            });
    }

})();
