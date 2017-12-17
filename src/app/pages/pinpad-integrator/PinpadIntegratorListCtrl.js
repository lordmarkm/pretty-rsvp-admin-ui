(function () {
  'use strict';

  angular.module('OwlAdmin.pages.pinpad-integrator')
      .controller('PinpadIntegratorListCtrl', PinpadIntegratorListCtrl);

  /** @ngInject */
  function PinpadIntegratorListCtrl($scope, $rootScope, $window, pinpadIntegratorService, localStorageService, toastr, sweetAlert) {
      var vm = this;
      var page;
      var sort;
      var term;
      vm.merchants = [];
      vm.tablePageSize = 10;

      if (localStorageService.isSupported) {
          if (localStorageService.get('integratorListFilter') !== null) {
              vm.filters = localStorageService.get('integratorListFilter');
          } else {
              vm.filters = defaultFilterValues();
          }
      } else {
          vm.filters = defaultFilterValues();
      }

   vm.getIntegratorProfileList = function (tableState) {
     tableState = tableState || vm.tableState;
     vm.tableState = tableState;

     if (!tableState.sort.predicate) {
       return;
     }

     page = tableState.pagination.start == 0 ? 0 : parseInt(tableState.pagination.start/tableState.pagination.number, 10);
     var pageSize = tableState.pagination.number;
     sort = tableState.sort.predicate ?
           (tableState.sort.predicate + ',' + (tableState.sort.reverse ? 'DESC' : 'ASC')) : '';

     composeTerm(tableState.search.predicateObject);

     pinpadIntegratorService.get({page: page, size: pageSize,
         sort: sort, term: term ? 'deleted==false;' + term : 'deleted==false'}, function (data) {
       vm.integratorProfiles = data.content;
       vm.totalElements = data.totalElements;
       vm.totalPages = data.totalPages;
       tableState.pagination.numberOfPages = data.totalPages;
     });

       if (localStorageService.isSupported) {
           localStorageService.set('integratorListFilter', term);
       }
   };

   function composeTerm(predicateObject) {
     if (!predicateObject) {
       return;
     }
     var term = '';
     for (var i in predicateObject) {
       append(i + '=like=' + predicateObject[i]);
     }

     function append(predicate) {
         if (term.length) {
             term += ';';
         }
         term += predicate;
     }
     return term;
   }

   vm.delete = function (profile) {
       sweetAlert.swal({
           title: 'Are you sure you want to delete ' + profile.name + '?',
           text: 'You will not be able to recover this ' + profile.name,
           type: 'warning',
           showCancelButton: true,
           confirmButtonText: 'Yes, delete it!',
           cancelButtonText: 'No, keep it',
           allowOutsideClick: false
       }).then(function (result) {
           if (result.value) {
               profile.active = false;
               pinpadIntegratorService.save(profile, function () {
                   pinpadIntegratorService.deleteIntegrator({integratorId: profile.id}, function () {
                       toastr.success('Integrator Profile deleted!');
                       vm.getIntegratorProfileList();
                   }, function (error) {
                       toastr.error('Integrator Profile not deleted.')
                   });
               });
           } else if (result.dismiss === 'cancel') {
               toastr.warning('Integrator deletion was cancelled');
           }


       });
   };

   vm.clearFilter = function() {
       vm.tablePageSize = 10;
       vm.filters = defaultFilterValues();
       vm.getIntegratorProfileList();
   };

   function defaultFilterValues() {
       return {
           integratorCode: '',
           name: ''
       };
   }

  }
})();
