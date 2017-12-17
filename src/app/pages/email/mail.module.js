(function() {
    'use strict';

    angular.module('OwlAdmin.pages.mail', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mail', {
                url: '/mail',
                abstract: true,
                templateUrl: 'app/pages/email/mail.html',
                controller: "MailTabCtrl",
                controllerAs: "tabCtrl",
                title: 'Inbox',
                sidebarMeta: {
                    icon: 'fa fa-envelope-o',
                    order: 50,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/pages/email/mailMessages.js',
                            'app/pages/email/MailTabCtrl.js',
                            'app/pages/email/composeBox/composeBoxCtrl.js',
                            'app/pages/email/composeBox/composeModal.js',
                            'app/pages/email/detail/MailDetailCtrl.js',
                            'app/pages/email/list/MailListCtrl.js',
                        ]);
                    }
                }
            }).state('mail.label', {
                url: '/:label',
                templateUrl: 'app/pages/email/list/mailList.html',
                title: 'Inbox',
                controller: "MailListCtrl",
                controllerAs: "listCtrl",
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/theme/filters/text/removeHtml.js'
                        ]);
                    }
                }
            }).state('mail.detail', {
                url: '/:label/:id',
                templateUrl: 'app/pages/email/detail/mailDetail.html',
                title: 'Inbox',
                controller: "MailDetailCtrl",
                controllerAs: "detailCtrl"
            });
        $urlRouterProvider.when('/mail', '/mail/inbox');
    }

})();
