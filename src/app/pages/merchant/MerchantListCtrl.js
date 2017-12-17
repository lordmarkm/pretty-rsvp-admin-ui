(function () {
  'use strict';

  angular.module('OwlAdmin.pages.merchant')
      .controller('MerchantListCtrl', MerchantListCtrl);

  /** @ngInject */
  function MerchantListCtrl($scope, $rootScope, $window, toastr, merchantProfileService, localStorageService) {
   var vm = this;
   var page;
   var sort;
   var term;
   vm.merchants = [];
   vm.tablePageSize = 10;

   vm.activeFilters = [
    {value: '', label: 'All'},
    {value: 'false', label: 'Inactive'},
    {value: 'true', label: 'Active'}
   ];

   console.info(localStorageService);
   if (localStorageService.isSupported) {
     if (localStorageService.get('merchantListFilter') !== null) {
       vm.filters = localStorageService.get('merchantListFilter');
     }
    }

   vm.getMerchants = function (tableState) {
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

       merchantProfileService.get({page: page, size: pageSize, sort: sort, term: !term ? 'deleted==false' : term}, function (data) {
          vm.merchants = data.content;
          vm.totalElements = data.totalElements;
          vm.totalPages = data.totalPages;
          tableState.pagination.numberOfPages = data.totalPages;
       });

       if (localStorageService.isSupported) {
           localStorageService.set('merchantListFilter', vm.filters);
       }
   }

   vm.deleteMerchant = function (merchant) {
       toastr.warning("<br/><br/>" +
           "<button type='button' id='confirmationRevertYes' class='btn clear'>Yes</button> " +
           "&nbsp; <button type='button' id='confirmationRevertNo' class='btn clear'>No</button>"
           ,'Are you sure you want to delete merchant ' + merchant.name + '?',
           {
               closeButton: false,
               allowHtml: true,
               onShown: function (toast) {
                   $("#confirmationRevertYes").click(function() {
                       merchantProfileService.delete({id: merchant.id}, function () {
                           toastr.success('Merchant deleted Successfully', 'Success');
                           vm.getMerchants();
                       }, function (err) {
                           toastr.error('Error deleting merchant. Please contact your system administrator', 'Error');
                       });
                   });
               }
           });
   }

   function composeTerm(predicateObject) {
     if (!predicateObject) {
       return;
     }
     var term = 'deleted==false';
     for (var i in predicateObject) {
       append(i + '=like="' + predicateObject[i] + '"');
     };

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
       vm.getMerchants();
   };

  }
})();

