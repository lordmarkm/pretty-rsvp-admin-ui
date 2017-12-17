(function () {
  'use strict';

  angular.module('OwlAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: 'pageTopCtrl',
      controllerAs: 'vm'
    };
  }

})();
