(function () {
    'use strict';

    angular.module('OwlAdmin.pages.pinpad-integrator')
        .controller('AddPinpadIntegratorCtrl', AddPinpadIntegratorCtrl);

    /** @ngInject */
    function AddPinpadIntegratorCtrl($scope, $rootScope, toastr, $state, $window, pinpadIntegratorService, permissions, localStorageService) {
        var vm = this;
        vm.integratorProfile = {
            integratorCode: '',
            name: '',
            password: '',
            active: true,
            tokenValidity: 10,
            integratorNotification: {
                host: '',
                port: '',
                path: ''
            },
            integratorSetting: [],
            integratorPermission: []
        };

        vm.permissions = setupPermissions(permissions);
        createSettings();
        vm.settings = setupSettings();

        function setupPermissions(permissionList) {
            var allPermissions = [];

            for (var i in permissionList) {
                var active = false;
                allPermissions.push({label: permissionList[i].label,
                    value: permissionList[i].value, active: active});
            }

            return allPermissions;
        }

        function createSettings() {
            vm.integratorProfile.integratorSetting.push({
                code: 'MAX_RESEND_OTP',
                value: '3'
            });
        }

        function setupSettings() {
            var allSettings = {
                resendOtp: {}
            };

            for (var i in vm.integratorProfile.integratorSetting) {
                if (vm.integratorProfile.integratorSetting[i].code === 'MAX_RESEND_OTP') {
                    allSettings.resendOtp = {
                        code: vm.integratorProfile.integratorSetting[i].code,
                        value: decodeValue(vm.integratorProfile.integratorSetting[i].value)
                    }
                }
            }

            return allSettings;
        }

        function decodeValue(value) {
            switch (value) {
                case 'TRUE':
                    return true;
                case 'FALSE':
                    return false;
                case true:
                    return 'TRUE';
                case false:
                    return 'FALSE';
            }

            if (angular.isNumber(value)) {
                return value.toString();
            } else if (angular.isNumber(parseInt(value))) {
                return parseInt(value);
            } else {
                return value;
            }
        }

        vm.saveIntegratorProfile = function () {
            vm.integratorProfile.integratorPermission = savePermissions();
            vm.integratorProfile.integratorSetting = saveSettings();
            pinpadIntegratorService.save(
                vm.integratorProfile,
                function () {
                    toastr.success('Integrator Successfully added');
                    $state.go('pinpad-integrator');
                }, function() {
                    toastr.error('Error encountered while adding Integrator');
            });
        }

        function savePermissions() {
            var permissions = [];
            for (var i in vm.permissions) {
                if (vm.permissions[i].active) {
                    permissions.push({code: vm.permissions[i].value});
                }
            }

            return permissions;
        }

        function saveSettings() {
            var settings = [];
            for (var i in vm.settings) {
                settings.push({
                    code: vm.settings[i].code,
                    value: decodeValue(vm.settings[i].value)
                });
            }

            return settings;
        }
    }
}) ();