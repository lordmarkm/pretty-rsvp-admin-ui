(function () {
    'use strict';

    angular.module('OwlAdmin.pages.pinpad-integrator')
        .controller('ViewPinpadIntegratorCtrl', ViewPinpadIntegratorCtrl);

    /** @ngInject */
    function ViewPinpadIntegratorCtrl($state, $q, $stateParams, toastr, pinpadIntegratorService, profile, permissions) {
        var vm = this;
        vm.profileId = $stateParams.integratorId;
        vm.integratorProfile = profile;
        vm.permissions = setupPermissions(permissions);
        vm.settings = setupSettings();

        function setupPermissions(permissionList) {
            var currentPermissions = profile.integratorPermission;
            var allPermissions = [];

            for (var i in permissionList) {
                var active = false;
                for (var j in currentPermissions) {
                    if (permissionList[i].value === currentPermissions[j].code) {
                        active = true;
                    }
                }
                allPermissions.push({label: permissionList[i].label,
                    value: permissionList[i].value, active: active});
            }

            return allPermissions;
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

        vm.reload = function () {
            var deferred = $q.defer();
            pinpadIntegratorService.findByIntegratorProfileId({integratorId: $stateParams.integratorId}, function (response) {
                deferred.resolve(response);
            });
            vm.permissions = setupPermissions(permissions);
            vm.settings = setupSettings();
        };


        vm.updateProfile = function () {
            vm.integratorProfile.integratorPermission = savePermissions();
            vm.integratorProfile.integratorSetting = saveSettings();
            pinpadIntegratorService.save(
                vm.integratorProfile,
                function () {
                    toastr.success('Integrator Successfully updated');
                    $state.go('pinpad-integrator');
                }, function() {
                    toastr.error('Error encountered while updating Integrator');
                });
        };

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
                })
            }

            return settings;
        }
    }

})();