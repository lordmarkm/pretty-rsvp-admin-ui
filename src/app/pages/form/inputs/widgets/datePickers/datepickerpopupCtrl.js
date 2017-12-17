(function() {
    'use strict';

    angular.module('OwlAdmin.pages.form')
        .controller('datepickerpopupCtrl', datepickerpopupCtrl);

    /** @ngInject */
    function datepickerpopupCtrl($scope) {

        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = true;
        }
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.setDate = function(year, month, day) {
          $scope.dt = new Date(year, month, day);
        };
        $scope.clear = function() {
            $scope.dt = null;
        };
    }
})();
