(function() {
    'use strict';

    angular.module('OwlAdmin.pages.form', ['ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('form', {
                url: '/form',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Form Elements',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 400,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'ui.select'
                        ]);
                    }
                }
            })
            .state('form.inputs', {
                url: '/inputs',
                templateUrl: 'app/pages/form/inputs/inputs.html',
                title: 'Form Inputs',
                sidebarMeta: {
                    order: 0,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            '../libs/css/bootstrap-select/dist/css/bootstrap-select.css',
                            '../libs/css/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
                            '../libs/css/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                            '../libs/jquery/bootstrap-select/dist/js/bootstrap-select.js',
                            '../libs/jquery/bootstrap-switch/dist/js/bootstrap-switch.js',
                            '../libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                            'app/pages/form/inputs/widgets/datePickers/datepickerCtrl.js',
                            'app/pages/form/inputs/widgets/timePickers/timepickerCtrl.js',
                            'app/pages/form/inputs/widgets/datePickers/datepickerpopupCtrl.js',
                            'app/pages/form/inputs/widgets/oldSelect/OldSelectpickerPanelCtrl.js',
                            'app/pages/form/inputs/widgets/oldSelect/selectpicker.directive.js',
                            'app/pages/form/inputs/widgets/oldSwitches/OldSwitchPanelCtrl.js',
                            'app/pages/form/inputs/widgets/oldSwitches/switch.directive.js',
                            'app/pages/form/inputs/widgets/select/GroupSelectpickerOptions.js',
                            'app/pages/form/inputs/widgets/select/SelectpickerPanelCtrl.js',
                            'app/pages/form/inputs/widgets/switches/SwitchDemoPanelCtrl.js',
                            'app/pages/form/inputs/widgets/tagsInput/tagsInput.directive.js',
                            'app/theme/inputs/baSwitcher/baSwitcher.js'
                        ]);
                    }
                }
            })
            .state('form.layouts', {
                url: '/layouts',
                templateUrl: 'app/pages/form/layouts/layouts.html',
                title: 'Form Layouts',
                sidebarMeta: {
                    order: 100,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([

                        ]);
                    }
                }
            })
            .state('form.wizard', {
                url: '/wizard',
                templateUrl: 'app/pages/form/wizard/wizard.html',
                controller: 'WizardCtrl',
                controllerAs: 'vm',
                title: 'Form Wizard',
                sidebarMeta: {
                    order: 200,
                },
                resolve: {
                    lazyLoad: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                          'app/pages/form/wizard/wizrdCtrl.js'
                        ]);
                    }
                }
            });
    }
})();
