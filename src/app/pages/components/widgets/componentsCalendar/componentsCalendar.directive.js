(function () {
  'use strict';

  angular.module('OwlAdmin.pages.components')
      .directive('componentsCalendar', componentsCalendar);

  /** @ngInject */
  function componentsCalendar() {
    return {
      restrict: 'E',
      controller: 'ComponentsCalendarCtrl',
      templateUrl: 'app/pages/components/widgets/componentsCalendar/componentsCalendar.html'
    };
  }
})();
