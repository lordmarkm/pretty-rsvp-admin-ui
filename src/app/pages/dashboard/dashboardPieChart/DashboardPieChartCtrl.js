(function () {
  'use strict';

  angular.module('OwlAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    $scope.charts = [{
      color: baUtil.hexToRGB(baConfig.colors.pie.pie1, 0.4),
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {
      color: baUtil.hexToRGB(baConfig.colors.pie.pie2, 0.4),
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    }, {
      color: baUtil.hexToRGB(baConfig.colors.pie.pie3, 0.4),
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: baUtil.hexToRGB(baConfig.colors.pie.pie4, 0.4),
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();
