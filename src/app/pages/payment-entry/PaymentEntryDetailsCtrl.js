(function () {
  'use strict';

  angular.module('OwlAdmin.pages.payment-entry')
      .controller('PaymentEntryDetailsCtrl', PaymentEntryDetailsCtrl);

  /** @ngInject */
  function PaymentEntryDetailsCtrl($stateParams, paymentEntryService, paymentEntry, paymentAudit, paymentAuditService) {
   var vm = this;
   vm.paymentToken = $stateParams.paymentToken;
   vm.paymentEntry = paymentEntry;
   vm.paymentAudit = paymentAudit;
   vm.reload = function () {
     vm.paymentEntry = paymentEntryService.findByPaymentToken({paymentToken: vm.paymentToken});
     vm.paymentAudit = paymentAuditService.findAuditByToken({paymentToken: vm.paymentToken});
   };
  }

})();

