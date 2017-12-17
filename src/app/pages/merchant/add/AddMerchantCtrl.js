(function () {
    'use strict';

    angular.module('OwlAdmin.pages.merchant')
        .controller('AddMerchantCtrl', AddMerchantCtrl);

    /** @ngInject */
    function AddMerchantCtrl($state, $uibModal, toastr, merchantProfileService, permissions) {
        var vm = this;
        vm.merchant = {
            merchantCode: '',
            name: '',
            password: '',
            active: true,
            merchantNotification: {
                host: '',
                port: '',
                path: ''
            },
            settings: [],
            permissions: []
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
            vm.merchant.settings.push({code: 'OTP_ENABLED', value: 'FALSE'});
            vm.merchant.settings.push({code: 'BLOCKING', value: 'FALSE'});
        }

        function setupSettings() {
            var allSettings = {
                otp: {},
                blocking: {}
            };
            for (var i in vm.merchant.settings) {
                if (vm.merchant.settings[i].code === 'OTP_ENABLED') {
                    allSettings.otp = {code: vm.merchant.settings[i].code, value: decodeValue(vm.merchant.settings[i].value)};
                } else if (vm.merchant.settings[i].code === 'BLOCKING') {
                    allSettings.blocking = {code: vm.merchant.settings[i].code, value: decodeValue(vm.merchant.settings[i].value)};
                }
            }

            return allSettings
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

        vm.addMerchant = function () {
            vm.merchant.permissions = savePermissions();
            vm.merchant.settings = saveSettings();
            merchantProfileService.save(vm.merchant, function (savedMerchant) {
                vm.merchant = savedMerchant;
                toastr.success('Successfully added merchant!');
                $state.go('merchant-details', {merchantCode: savedMerchant.merchantCode});
            }, function (err) {
                toastr.error('Error adding merchant. Please contact your system administrator');
            })
        }

        function saveSettings() {
            var settings = [];
            for (var i in vm.settings) {
                settings.push({code: vm.settings[i].code, value: decodeValue(vm.settings[i].value)})
            }
            return settings;
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

        vm.addOrUpdateSettings = function(isAdd, settings) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/merchant/widgets/add-settings.html',
                size: 'md',
                controller: function ($scope, $uibModalInstance, editableOptions, editableThemes) {
                    $scope.settings;
                    if (isAdd) {
                        $scope.settings = {
                            code: '',
                            value: ''
                        }
                    } else {
                        $scope.settings = settings;
                    }
                    $scope.isAdd = isAdd;

                    $scope.saveSettings = function() {
                        if (!$scope.settings.code || !$scope.settings.value) {
                            toastr.error('Please fill up all required fields');
                            return;
                        }

                        if (isAdd) {
                            vm.merchant.settings.push($scope.settings);
                        }
                        toastr.success('Successfully added settings!');
                        $uibModalInstance.close();
                    };
                    editableOptions.theme = 'bs3';
                    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkJhon-round"></i></button>';
                    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
                }
            });
        }

        vm.deleteSettings = function(index) {
            toastr.warning("<br/><br/>" +
                "<button type='button' id='confirmationRevertYes' class='btn clear'>Yes</button> " +
                "&nbsp; <button type='button' id='confirmationRevertNo' class='btn clear'>No</button>"
                ,'Are you sure you want to delete this merchant settings?',
                {
                    closeButton: false,
                    allowHtml: true,
                    onShown: function (toast) {
                        $("#confirmationRevertYes").click(function() {
                            vm.merchant.settings.splice(index, 1);
                            toastr.success('Successfully deleted merchant settings. Please update merchant to permanently delete the settings');
                        });
                    }
                });
        }
    }
})();