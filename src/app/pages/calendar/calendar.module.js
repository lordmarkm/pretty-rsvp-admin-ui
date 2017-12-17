(function () {
  'use strict';

  angular.module('OwlAdmin.pages.calendar', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/pages/calendar/calendar.html',
          title: 'Calendar',
          sidebarMeta: {
            icon: 'fa fa-calendar',
            order: 80,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/css/fullcalendar/dist/fullcalendar.css',
                    '../libs/jquery/fullcalendar/dist/fullcalendar.js',
                    'app/pages/calendar/CalendarCtrl.js',
                    'app/pages/components/widgets/componentsCalendar/componentsCalendar.directive.js',
                    'app/pages/components/widgets/componentsCalendar/ComponentsCalendarCtrl.js'

                  ]);
              }
          }
      });
  }
})();
