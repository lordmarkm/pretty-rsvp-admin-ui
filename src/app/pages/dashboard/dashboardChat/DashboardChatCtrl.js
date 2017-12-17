(function () {
  'use strict';

  angular.module('OwlAdmin.pages.dashboard')
      .controller('DashboardChatCtrl', DashboardChatCtrl);

  /** @ngInject */
  function DashboardChatCtrl($scope) {
    $scope.data = [
      {
        position : 'left',
        name: 'Nasta Linnie',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac nunc. Vivamus luctus convallis mauris, eu gravida tortor aliquam ultricies.',
        ago: '25 minutes ago',
        image:'assets/img/app/profile/Nasta.png'
      },
      {
        position : 'right',
        name: 'Nick Cat',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante turpis, rutrum ut ullamcorper sed, dapibus ac nunc. Vivamus luctus convallis mauris, eu gravida tortor aliquam ultricies.',
        ago: '25 minutes ago',
        image:'assets/img/app/profile/Nick.png'
      }
    ];

    $scope.chat = function (msg) {
      $scope.data.push({
        position : 'left',
        name: 'Nasta Linnie',
        message: msg,
        ago: 'few secondes ago',
        image:'assets/img/app/profile/Nasta.png'
      });
      $scope.message ='';
    };
  }
})();
