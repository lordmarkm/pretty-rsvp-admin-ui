(function () {
  'use strict';

  angular.module('OwlAdmin.pages.payment-entry', ['mynt.service'])
    .constant('paymentStatuses', [
      {label: 'Requested',  value: 'REQUESTED'},
      {label: 'Order viewed', value: 'ORDER_VIEWED'},
      {label: 'Order confirmed', value: 'ORDER_CONFIRMED'},
      {label: 'OTP requested', value: 'OTP_REQUESTED'},
      {label: 'OTP request failed', value: 'OTP_REQUEST_FAILED'},
      {label: 'OTP verified', value: 'OTP_VERIFIED'},
      {label: 'OTP verify failed', value: 'OTP_VERIFY_FAILED'},
      {label: 'MPin viewed', value: 'MPIN_VIEWED'},
      {label: 'MPin verified', value: 'MPIN_VERIFIED'},
      {label: 'MPin verify failed', value: 'MPIN_VERIFY_FAILED'},
      {label: 'GCash confirm failed', value: 'CONFIRM_FAILED'},
      {label: 'GCash confirm success', value: 'CONFIRM_OK'},
      {label: 'Merchant notify success', value: 'MERCHANT_NOTIFY_SUCCESS'},
      {label: 'Merchant notify failed', value: 'MERCHANT_NOTIFY_FAILED'}
    ])
    .constant('paymentResults', [
        {label: 'Pending', value: 'PENDING'},
        {label: 'Success', value: 'SUCCESS'},
        {label: 'For Recon', value: 'FOR_RECON'},
        {label: 'Expired', value: 'EXPIRED'},
        {label: 'Failed', value: 'FAILED'}
    ])
    .constant('paymentMethods', [
        {label: 'Pay via GCash App', value: 'GCASH'},
        {label: 'Pay via Pinpad', value: 'PINPAD'},
        {label: 'Pay via SMS', value: 'SMS'}
    ])
    .constant('auditCode', [
        {label: 'Create Payment Token', value: 'CREATE_PAYMENT_TOKEN'},
        {label: 'Order Confirm', value: 'ORDER_CONFIRM'},
        {label: 'Payment Confirm', value: 'PAYMENT_CONFIRM'},
        {label: 'Otp Request', value: 'OTP_REQUEST'},
        {label: 'Otp Verify', value: 'OTP_VERIFY'},
        {label: 'Mpin Verify', value: 'MPIN_VERIFY'},
        {label: 'Sms Direct Verify', value: 'SMSDIRECT_VERIFY'},
        {label: 'GCash Bill Pay', value: 'GCASH_BILLPAY'},
        {label: 'GCash Bill Collect', value: 'GCASH_BILLCOLLECT'},
        {label: 'GCash Confirm', value: 'GCASH_CONFIRM'},
        {label: 'Merchant Notify', value: 'MERCHANT_NOTIFY'},
        {label: 'Direct Verify', value: 'DIRECT_VERIFY'}
    ])
    .filter('displayAuditCode', ['auditCode', function(auditCode) {
        return function(rawStatus) {
            for (var i in auditCode) {
                if (auditCode[i].value === rawStatus) {
                    return auditCode[i].label;
                }
            }
        }
    }])
    .filter('displayPaymentStatus', ['paymentStatuses', function(paymentStatuses){
        return function(rawStatus) {
            for (var i in paymentStatuses) {
                if (paymentStatuses[i].value === rawStatus) {
                    return paymentStatuses[i].label;
                }
            }
        }
    }])
    .filter('displayPaymentMethods', ['paymentMethods', function(paymentMethods){
          return function(rawMethod) {
              for (var i in paymentMethods) {
                  if (paymentMethods[i].value === rawMethod) {
                      return paymentMethods[i].label;
                  }
              }
          }
      }])
    .filter('displayPaymentResult', ['paymentResults', function(paymentResults){
        return function(rawStatus) {
            for (var i in paymentResults) {
                if (paymentResults[i].value === rawStatus) {
                    return paymentResults[i].label;
                }
            }
        }
    }])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('payment-entry-list', {
        url: '/payment-entry-list',
        templateUrl: 'app/pages/payment-entry/list.html',
        title: 'Payment Entry List',
        sidebarMeta: {
          icon: 'fa fa-money',
          order: 80,
        },
        controller: 'PaymentEntryListCtrl',
        controllerAs: 'vm',
        access: ['ROLE_ADMIN', 'PAYMENTS_VIEW'],
        resolve: {
            lazyLoad: function($ocLazyLoad) {
                return $ocLazyLoad.load([
                  'smart-table',
                  'app/pages/payment-entry/PaymentEntryListCtrl.js'
                ]);
            }
        }
      }).state('payment-entry-details', {
        url: '/payment-entry-details/{paymentToken}',
        templateUrl: 'app/pages/payment-entry/details.html',
          title: 'Payment Entry Details',
          controller: 'PaymentEntryDetailsCtrl',
          controllerAs: 'vm',
          resolve: {
            lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'smart-table',
                    'app/pages/payment-entry/PaymentEntryDetailsCtrl.js'
                  ]);
            },
            paymentEntry: function ($stateParams, paymentEntryService) {
              return paymentEntryService.findByPaymentToken({paymentToken: $stateParams.paymentToken});
            },
            paymentAudit: function($q, $stateParams, paymentAuditService) {
              return paymentAuditService.findAuditByToken({paymentToken: $stateParams.paymentToken});
            }
          }
      });
  }
})();
