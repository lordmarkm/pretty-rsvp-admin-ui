(function () {
    'use strict';

    angular.module('OwlAdmin.pages', [
        'OwlAdmin.pages.dashboard',
      /* Added by mark */
        'OwlAdmin.pages.merchant',
        'OwlAdmin.pages.payment-entry',
        'OwlAdmin.pages.pinpad-integrator'
    ])
    //Todo: Add legit permissions
    /* initially perceived permissions, can be changed */
        .constant('permissions', [
            {label: 'View OTP', value: 'VIEW_OTP'},
            {label: 'View Mpin', value: 'VIEW_MPIN'},
            {label: 'SMS Enabled', value: 'SMS_ENABLED'},
            {label: 'Direct Enabled', value: 'DIRECT_ENABLED'},
            {label: 'Pinpad Enabled', value: 'PINPAD_ENABLED'}
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }

})();
