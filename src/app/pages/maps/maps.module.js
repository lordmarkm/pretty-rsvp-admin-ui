(function () {
  'use strict';

  angular.module('OwlAdmin.pages.maps', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('maps', {
          url: '/maps',
          templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: 'Maps',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 600,
          },
        })
        .state('maps.gmap', {
          url: '/gmap',
          templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          controller: 'GmapPageCtrl',
          title: 'Google Maps',
          sidebarMeta: {
            order: 0,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    "app/pages/maps/google-maps/GmapPageCtrl.js"
                  ]);
              }
          }
        })
        .state('maps.leaflet', {
          url: '/leaflet',
          templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          controller: 'LeafletPageCtrl',
          title: 'Leaflet Maps',
          sidebarMeta: {
            order: 100,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    '../libs/css/leaflet/dist/leaflet.css',
                    '../libs/jquery/leaflet/dist/leaflet-src.js',
                    'app/pages/maps/leaflet/LeafletPageCtrl.js',
                    'app/pages/maps/leaflet/LeafletPageCtrl.js',
                  ]);
              }
          }
        })
        .state('maps.bubble', {
          url: '/bubble',
          templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
          controller: 'MapBubblePageCtrl',
          title: 'Bubble Maps',
          sidebarMeta: {
            order: 200,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    "app/pages/maps/map-bubbles/MapBubblePageCtrl.js",
                  ]);
              }
          }
        })
        .state('maps.line', {
          url: '/line',
          templateUrl: 'app/pages/maps/map-lines/map-lines.html',
          controller: 'MapLinesPageCtrl',
          title: 'Line Maps',
          sidebarMeta: {
            order: 300,
          },
          resolve: {
              lazyLoad: function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    "app/pages/maps/map-lines/MapLinesPageCtrl.js"
                  ]);
              }
          }
        });
  }

})();
