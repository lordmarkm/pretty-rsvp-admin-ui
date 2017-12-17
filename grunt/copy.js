module.exports = {
      dev: {
        files: [
          {src: 'src/app/services/config-local.js', dest: 'src/app/services/config.js'},
          {src: 'src/assets/js/auth-dev.js', dest: 'src/assets/js/auth.js'}
        ]
      },
      staging: {
        files: [
          {src: 'src/app/services/config-staging.js', dest: 'src/app/services/config.js'},
          {src: 'src/assets/js/auth-staging.js', dest: 'src/assets/js/auth.js'}
        ]
      },
      libs: {
          files: [{
                  cwd: 'bower_components',
                  src: [
                    'angular/**',
                    'angular-route/angular-route.js',
                    'angular-slimscroll/angular-slimscroll.js',
                    'angular-toastr/dist/angular-toastr.tpls.js',
                    'angular-touch/angular-touch.js',
                    'angular-ui-sortable/sortable.js',
                    'angular-ui-router/release/angular-ui-router.js',
                    'angular-chart.js/dist/angular-chart.js',
                    'angular-chartist.js/dist/angular-chartist.js',
                    'angular-morris-chart/src/angular-morris-chart.min.js',
                    'angular-bootstrap/ui-bootstrap-tpls.js',
                    'angular-animate/angular-animate.js',
                    'textAngular/dist/**',
                    'angular-ui-select/dist/select.js',
                    'oclazyload/dist/ocLazyLoad.js',
                    'angular-xeditable/dist/**',
                    'angular-progress-button-styles/dist/**',
                    'angular-smart-table/dist/smart-table.js',
                    'ng-js-tree/dist/ngJsTree.js',

                    //added by mark
                    'angular-resource/angular-resource.js',
                    'angular-local-storage/dist/angular-local-storage.js',
                    'sweetalert2/dist/sweetalert2.min.js',
                    'angular-sweetalert-2/SweetAlert.js'
                  ],
                  dest: 'src/libs/angular',
                  expand: true
              },
              {
                  cwd: 'bower_components',
                  src: [
                    'jquery/dist/jquery.js',
                    'jquery-ui/jquery-ui.js',
                    'jquery.easing/js/jquery.easing.js',
                    'jquery.easy-pie-chart/dist/jquery.easypiechart.js',
                    'chart.js/dist/Chart.js',
                    'amcharts/dist/amcharts/plugins/responsive/responsive.min.js',
                    'amcharts/dist/amcharts/**',
                    'amcharts-stock/dist/amcharts/amstock.js',
                    'ammap/dist/ammap/ammap.js',
                    'ammap/dist/ammap/maps/js/worldLow.js',
                    'slimScroll/jquery.slimscroll.js',
                    'bootstrap/js/dropdown.js',
                    'bootstrap-select/dist/**',
                    'bootstrap-switch/dist/**',
                    'bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                    'moment/moment.js',
                    'fullcalendar/dist/**',
                    'leaflet/dist/leaflet-src.js',
                    'eve-raphael/eve.js',
                    'raphael/raphael.min.js',
                    'mocha/mocha.js',
                    'morris.js/**',
                    'ionrangeslider/js/ion.rangeSlider.js',
                    'rangy/**',
                    'jstree/dist/jstree.js',
                    'chartist/dist/**'
                  ],
                  dest: 'src/libs/jquery',
                  expand: true
              },
              {
                  cwd: 'bower_components',
                  src: [
                      'bootstrap/dist/**',
                      'bootstrap-select/dist/css/bootstrap-select.css',
                      'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
                      'bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                      'animate.css/animate.css',
                      'fullcalendar/dist/fullcalendar.css',
                      'leaflet/dist/leaflet.css',
                      'Ionicons/**',
                      'font-awesome/**',
                      'ionrangeslider/css/**',
                      'ionrangeslider/img/**',
                      'textAngular/dist/textAngular.css',
                      'angular-toastr/dist/angular-toastr.css',
                      'jstree/dist/themes/default/**',
                      'angular-ui-select/dist/select.css',
                      'sweetalert2/dist/sweetalert2.min.css'
                  ],
                  dest: 'src/libs/css',
                  expand: true
              },

          ]
      }
};
