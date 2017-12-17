(function () {
  'use strict';

  angular.module('OwlAdmin.pages.payment-entry')
      .controller('PaymentEntryListCtrl', PaymentEntryListCtrl);

  /** @ngInject */
  function PaymentEntryListCtrl($scope, $rootScope, $window, paymentStatuses, paymentMethods, paymentEntryService, localStorageService) {
   var vm = this;
   var page;
   var sort;
   var term;
   vm.payments = [];
   vm.tablePageSize = 10;
   vm.paymentStatuses = paymentStatuses;
   vm.paymentMethods = paymentMethods;

   if (localStorageService.isSupported) {
     if (localStorageService.get('policyListFilter') !== null) {
       vm.filters = localStorageService.get('policyListFilter');
     } else {
       vm.filters = defaultFilterValues();
     }
    } else {
        vm.filters = defaultFilterValues();
    }

   vm.getPayments = function (tableState) {
     tableState = tableState || vm.tableState;
     vm.tableState = tableState;

     if (!tableState.sort.predicate) {
       return;
     }

     page = tableState.pagination.start == 0 ? 0 : parseInt(tableState.pagination.start/tableState.pagination.number, 10);
     var pageSize = tableState.pagination.number;
     sort = tableState.sort.predicate ?
           (tableState.sort.predicate + ',' + (tableState.sort.reverse ? 'DESC' : 'ASC')) : '';

     term = composeTerm(tableState.search.predicateObject);

     paymentEntryService.get({page: page, size: pageSize, sort: sort, term: term}, function (data) {
       vm.payments = data.content;
       vm.totalElements = data.totalElements;
       vm.totalPages = data.totalPages;
       tableState.pagination.numberOfPages = data.totalPages;
     });

       if (localStorageService.isSupported) {
           localStorageService.set('paymentListFilter', vm.filters);
       }
   };

   function composeTerm(predicateObject) {
     if (!predicateObject && !vm.filters.paymentStatus && !vm.filters.paymentMethod) {
       return;
     }
     var term = '';
     for (var i in predicateObject) {
       append(i + '=like="' + predicateObject[i] + '"');
     };
     if (vm.filters.paymentMethod) {
         append('paymentMethod==' + vm.filters.paymentMethod);
     }
     if (vm.filters.paymentStatus) {
       append('paymentStatus==' + vm.filters.paymentStatus);
     }
     function append(predicate) {
       if (term.length) {
         term += ';';
       }
       term += predicate;
     }
     return term;
   }

   vm.exportPolicies = function() {
       var url = '/policy/report/all/export';
       url += "?";

       if (sort) {
           url += "sort=" + sort.toString() + "&";
       }
       if (term) {
           url += "term=" + encodeURIComponent(term.toString());
       }

       window.open(url);
   };

   vm.clearFilter = function() {
       vm.tablePageSize = 10;
       vm.filters = defaultFilterValues();
       vm.getPolicies();
   };

   function defaultFilterValues() {
       return {
           ageComparator: '==',
           age: '',
           activity: '',
           agent: ''
       };
   }

  }
})();

