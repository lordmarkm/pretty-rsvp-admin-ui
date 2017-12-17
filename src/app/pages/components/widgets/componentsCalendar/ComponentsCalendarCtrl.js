(function() {
    'use strict';

    angular.module('OwlAdmin.pages.components')
        .controller('ComponentsCalendarCtrl', ComponentsCalendarCtrl)
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);
    /** @ngInject */
    function ComponentsCalendarCtrl($scope, baConfig, $uibModal, $q, $log) {
        var componentsColors = baConfig.colors.dashboard;
        var $element = $('#calendar').fullCalendar({
            height: 1000,
            contentHeight: 450,
            handleWindowResize: true,
            header: {
                left: 'prev,next,today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2017-01-20',
            selectable: true,
            selectHelper: true,
            eventRender: function(event, element) {
                element.append("<div title='Delete event' class='closeon'><span id='delete'>X</span></div>");
                element.find("#delete").click(function() {
                    $('#calendar').fullCalendar('removeEvents', event._id);
                });
            },
            select: function(start, end) {
                open('app/pages/calendar/newEvent.html', 'sm').then(function(data) {
                    var title = data;
                    var eventData;
                    if (title) {
                        eventData = {
                            title: title,
                            start: start,
                            color: componentsColors.surfieGreen,
                            end: end
                        };
                        $element.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $element.fullCalendar('unselect');
                });
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [{
                    title: 'All Day Event',
                    start: '2017-01-01',
                    color: componentsColors.silverTree
                },
                {
                    title: 'Long Event',
                    start: '2017-01-03',
                    end: '2017-01-07',
                    color: componentsColors.blueStone
                },
                {
                    title: 'Meeting',
                    start: '2017-01-14T20:00:00',
                    color: componentsColors.surfieGreen
                },
                {
                    title: 'Play game',
                    start: '2017-01-18T07:00:00',
                    color: componentsColors.gossipDark
                },
                {
                    title: 'Repeating Event',
                    start: '2017-01-16T07:00:00',
                    color: componentsColors.surfieGreen
                },
                {
                    title: 'Repeating Event 2',
                    start: '2017-01-27T09:00:00',
                    color: componentsColors.silverTree
                }
            ]
        });

        function open(page, size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                controller: 'ModalInstanceCtrl'

            });
            var deferred = $q.defer();
            deferred.resolve(
                modalInstance.result.then(function(result) {
                    return result;
                }, function() {
                    $log.info('Modal dismissed at: ' + new Date());
                })
            );
            return deferred.promise;

        }
    }

    function ModalInstanceCtrl($scope, $uibModalInstance) {
        $scope.save = function() {
            $uibModalInstance.close($scope.title);
        };
    }

})();
