(function () {
  'use strict';

  angular.module('OwlAdmin.pages.dashboard')
      .directive('dashboardMap', dashboardMap);

  /** @ngInject */
  function dashboardMap() {
    return {
      restrict: 'E',
      controller: 'DashboardMapCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
    };
  }
})();
