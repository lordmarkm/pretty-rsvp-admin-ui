(function () {
    'use strict';

    angular.module('OwlAdmin.theme.components')
        .controller('pageTopCtrl', pageTopCtrl);

    function pageTopCtrl($scope, localStorageService, $window, authService) {
        var vm = this;
        authService.authenticate().then(function (auth) {
          vm.user = auth;
        });
    }

})();

