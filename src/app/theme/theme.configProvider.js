(function () {
  'use strict';

  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };
  // pie chart color
  var colorPie = {
    first : '#26A69A',
    second : '#EC407A',
    third : '#29B6F6',
    fourth : '#FF8058',
  };
  // main functional color scheme
  var colorScheme = {
    primary: '#26A69A',
    info: '#23B7E5',
    success: '#27C24C',
    warning: '#FAD733',
    danger: '#F05050',
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#30d0c1',
    surfieGreen: '#26a67a',
    silverTree: '#186860',
    gossip: '#1d7d74',
    white: '#10c48e',
  };

  angular.module('OwlAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 30),
        infoLight: colorHelper.tint(colorScheme.info, 30),
        successLight: colorHelper.tint(colorScheme.success, 30),
        warningLight: colorHelper.tint(colorScheme.warning, 30),
        dangerLight: colorHelper.tint(colorScheme.danger, 30),

        primaryDark: colorHelper.shade(colorScheme.primary, 15),
        infoDark: colorHelper.shade(colorScheme.info, 15),
        successDark: colorHelper.shade(colorScheme.success, 15),
        warningDark: colorHelper.shade(colorScheme.warning, 15),
        dangerDark: colorHelper.shade(colorScheme.danger, 15),

        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
        pie: {
          pie1 : colorPie.first,
          pie2 : colorPie.second,
          pie3 : colorPie.third,
          pie4 : colorPie.fourth,
        }
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
