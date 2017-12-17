(function () {
  'use strict';

  angular.module('OwlAdmin.pages.dashboard')
      .directive('dashboardChat', dashboardChat);

  /** @ngInject */
  function dashboardChat() {
    return {
      restrict: 'E',
      controller: 'DashboardChatCtrl',
      templateUrl: 'app/pages/dashboard/dashboardChat/dashboardChat.html'
    };
  }
})();
