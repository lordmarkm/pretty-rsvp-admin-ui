(function () {
  'use strict';

  angular.module('OwlAdmin.pages.components')
      .directive('componentsTodo', componentsTodo);

  /** @ngInject */
  function componentsTodo() {
    return {
      restrict: 'EA',
      controller: 'ComponentsTodoCtrl',
      templateUrl: 'app/pages/components/widgets/componentsTodo/componentsTodo.html'
    };
  }
})();
