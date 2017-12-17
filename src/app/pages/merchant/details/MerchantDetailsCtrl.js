(function () {
    'use strict';

    angular.module('OwlAdmin.pages.merchant')
        .controller('MerchantDetailsCtrl', MerchantDetailsCtrl);

    /** @ngInject */
    function MerchantDetailsCtrl($stateParams, $uibModal, $q, toastr, merchantProfileService, merchantWalletService, merchant, permissions) {
        var vm = this;
        var page;
        var sort;
        var term;
        vm.merchantCode = $stateParams.merchantCode;
        vm.merchant = merchant;
        vm.walletList = [];
        vm.tablePageSize = 10;
        vm.permissions = setupPermission(permissions);
        vm.settings = setupSettings();

        function setupPermission(permissionList) {
            var currentPermissions = merchant.permissions;
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

        vm.reload = function () {
            var d = $q.defer();
            merchantProfileService.get({term: 'code==' + vm.merchantCode}, function(data){
                if (data.content && data.content.length) {
                    vm.merchant = data.content[0];
                    d.resolve(merchant);
                }
            }, function (error) {
                $rootScope.$broadcast('ajaxError', error);
                d.resolve({});
            });
            vm.permissions = setupPermission(permissions);
            vm.settings = setupSettings();
        };

        vm.saveMerchant = function() {
            vm.merchant.permissions = savePermissions();
            vm.merchant.settings = saveSettings();
            merchantProfileService.save(vm.merchant, function (savedMerchant) {
                vm.merchant = savedMerchant;
                toastr.success('Successfully updated merchant!');
            }, function (err) {
                toastr.error('Error updating merchant. Please contact your system administrator');
            });
        };

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

        vm.getWalletList = function (tableState) {
            tableState = tableState || vm.tableState;
            vm.tableState = tableState;

            if (!tableState.sort.predicate) {
                return;
            }

            page = tableState.pagination.start == 0 ? 0 : parseInt(tableState.pagination.start/tableState.pagination.number, 10);
            var pageSize = tableState.pagination.number;
            sort = tableState.sort.predicate ?
                (tableState.sort.predicate + ',' + (tableState.sort.reverse ? 'DESC' : 'ASC')) : '';
            term = 'deleted==false;code==' + vm.merchant.merchantCode;
            merchantWalletService.get({page: page, size: pageSize, sort: sort, term: term}, function (data) {
                vm.walletList = data.content;
                vm.totalElements = data.totalElements;
                vm.totalPages = data.totalPages;
                tableState.pagination.numberOfPages = data.totalPages;
            });
        };

        vm.addOrUpdateWallet = function(isAdd, wallet) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/merchant/widgets/add-wallet.html',
                size: 'md',
                controller: function ($scope, $uibModalInstance, editableOptions, editableThemes) {
                    $scope.wallet;
                    if (isAdd) {
                        $scope.wallet = {
                            merchantProfile: {
                                id: vm.merchant.id
                            },
                            active: true,
                            walletId: '',
                            walletName: '',
                            walletType: 'GCASH'
                        }
                    } else {
                        $scope.wallet = wallet;
                    }
                    $scope.isAdd = isAdd;

                    $scope.saveWallet = function() {
                        if (!$scope.wallet.walletId || !$scope.wallet.walletName || !$scope.wallet.walletType) {
                            toastr.error('Please fill up all required fields');
                            return;
                        }

                        merchantWalletService.save($scope.wallet, function (savedWallet) {
                            $scope.wallet = savedWallet;
                            toastr.success('Successfully saved wallet!');
                            vm.getWalletList();
                            $uibModalInstance.close();
                        }, function (err) {
                            toastr.error('Error saving wallet. Please contact your system administrator');
                        })
                    }

                    editableOptions.theme = 'bs3';
                    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkJhon-round"></i></button>';
                    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
                }
            });
        };

        vm.deleteWallet = function(id) {
            toastr.warning("<br/><br/>" +
                "<button type='button' id='confirmationRevertYes' class='btn clear'>Yes</button> " +
                "&nbsp; <button type='button' id='confirmationRevertNo' class='btn clear'>No</button>"
                ,'Are you sure you want to delete this merchant wallet?',
                {
                    closeButton: false,
                    allowHtml: true,
                    onShown: function (toast) {
                        $("#confirmationRevertYes").click(function() {
                            merchantWalletService.delete({id: id}, function () {
                                vm.getWalletList();
                                toastr.success('Successfully deleted wallet!');
                            }, function (err) {
                                toastr.error('Error deleting wallet. Please contact your system administrator');
                            });
                        });
                    }
            });
        };

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
        };

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