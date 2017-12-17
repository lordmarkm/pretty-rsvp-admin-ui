(function () {
  'use strict';

  angular.module('OwlAdmin.pages.ui.icons')
      .controller('IconsPageCtrl', IconsPageCtrl);

  /** @ngInject */
  function IconsPageCtrl($scope) {
    $scope.icons = {
      kameleonIcons: [
        {
          name: 'Beach',
          img: 'Beach'
        },
        {
          name: 'Bus',
          img: 'Bus'
        },
        {
          name: 'Cheese',
          img: 'Cheese'
        },
        {
          name: 'Desert',
          img: 'Desert'
        },
        {
          name: 'Images',
          img: 'Images'
        },
        {
          name: 'Magician',
          img: 'Magician'
        },
        {
          name: 'Makeup',
          img: 'Makeup'
        },
        {
          name: 'Programming',
          img: 'Programming'
        },
        {
          name: 'Shop',
          img: 'Shop'
        },
        {
          name: 'Surfer',
          img: 'Surfer'
        },
        {
          name: 'Phone Booth',
          img: 'Phone-Booth'
        },
        {
          name: 'Ninja',
          img: 'Ninja'
        },
        {
          name: 'Apartment',
          img: 'Apartment'
        },
        {
          name: 'Batman',
          img: 'Batman'
        },
        {
          name: 'Medal',
          img: 'Medal-2'
        },
        {
          name: 'Money',
          img: 'Money-Increase'
        },
        {
          name: 'Street View',
          img: 'Street-View'
        },
        {
          name: 'Student',
          img: 'Student-3'
        },
        {
          name: 'Bell',
          img: 'Bell'
        },
        {
          name: 'Woman',
          img: 'Boss-5'
        },
        {
          name: 'Euro',
          img: 'Euro-Coin'
        },
        {
          name: 'Chessboard',
          img: 'Chessboard'
        },
        {
          name: 'Burglar',
          img: 'Burglar'
        },
        {
          name: 'Dna',
          img: 'Dna'
        },
        {
          name: 'Clipboard Plan',
          img: 'Clipboard-Plan'
        },
        {
          name: 'Boss',
          img: 'Boss-3'
        },
        {
          name: 'Key',
          img: 'Key'
        },
        {
          name: 'Surgeon',
          img: 'Surgeon'
        },
        {
          name: 'Hacker',
          img: 'Hacker'
        },
        {
          name: 'Santa',
          img: 'Santa'
        }
      ],
      kameleonRoundedIcons: [
        {
          color: 'success',
          img: 'Apartment',
          name: 'Apartment'
        },
        {
          color: 'warning',
          img: 'Bus',
          name: 'Bus'
        },
        {
          color: 'primary',
          img: 'Checklist',
          name: 'Checklist'
        },
        {
          color: 'warning',
          img: 'Desert',
          name: 'Desert'
        },
        {
          color: 'danger',
          img: 'Laptop-Signal',
          name: 'Laptop Signal'
        },
        {
          color: 'info',
          img: 'Love-Letter',
          name: 'Love Letter'
        },
        {
          color: 'success',
          img: 'Makeup',
          name: 'Makeup'
        },
        {
          color: 'primary',
          img: 'Santa',
          name: 'Santa'
        },
        {
          color: 'success',
          img: 'Surfer',
          name: 'Surfer'
        },
        {
          color: 'info',
          img: 'Vector',
          name: 'Vector'
        },
        {
          color: 'warning',
          img: 'Money-Increase',
          name: 'Money Increase'
        },
        {
          color: 'info',
          img: 'Alien',
          name: 'Alien'
        },
        {
          color: 'danger',
          img: 'Online-Shopping',
          name: 'Online Shopping'
        },
        {
          color: 'warning',
          img: 'Euro-Coin',
          name: 'Euro'
        },
        {
          color: 'info',
          img: 'Boss-3',
          name: 'Boss'
        }
      ],
      ionicons: ['ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c', 'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap', 'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up', 'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon', 'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled', 'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help', 'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled', 'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star', 'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle', 'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b', 'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel', 'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive', 'ion-reply', 'ion-reply-all', 'ion-forward'],
      fontAwesomeIcons: ['fa-glass','fa-music','fa-search','fa-envelope-o','fa-heart','fa-star','fa-star-o','fa-user','fa-film','fa-th-large','fa-th','fa-th-list','fa-check','fa-remove','fa-close','fa-times','fa-search-plus','fa-search-minus','fa-power-off','fa-signal','fa-gear','fa-cog','fa-trash-o','fa-home','fa-file-o','fa-clock-o','fa-road','fa-download','fa-arrow-circle-o-down','fa-arrow-circle-o-up','fa-inbox','fa-play-circle-o','fa-rotate-right','fa-repeat','fa-refresh','fa-list-alt','fa-lock','fa-flag','fa-headphones','fa-volume-off','fa-volume-down','fa-volume-up','fa-qrcode','fa-barcode','fa-tag','fa-tags','fa-book','fa-bookmark','fa-print','fa-camera','fa-font','fa-bold','fa-italic','fa-text-height','fa-text-width','fa-align-left','fa-align-center','fa-align-right','fa-align-justify','fa-list','fa-dedent','fa-outdent','fa-indent','fa-video-camera','fa-photo','fa-image','fa-picture-o','fa-pencil','fa-map-marker','fa-adjust','fa-tint','fa-edit','fa-pencil-square-o','fa-share-square-o','fa-check-square-o','fa-arrows','fa-step-backward','fa-fast-backward','fa-backward','fa-play','fa-pause','fa-stop','fa-forward','fa-fast-forward','fa-step-forward','fa-eject','fa-chevron-left','fa-chevron-right','fa-plus-circle','fa-minus-circle','fa-times-circle','fa-check-circle','fa-question-circle','fa-info-circle','fa-crosshairs','fa-times-circle-o','fa-check-circle-o','fa-ban','fa-arrow-left','fa-arrow-right','fa-arrow-up','fa-arrow-down','fa-mail-forward','fa-share','fa-expand','fa-compress','fa-plus','fa-minus','fa-asterisk','fa-exclamation-circle','fa-gift','fa-leaf','fa-fire','fa-eye','fa-eye-slash','fa-warning','fa-exclamation-triangle','fa-plane','fa-calendar','fa-random','fa-comment','fa-magnet','fa-chevron-up','fa-chevron-down','fa-retweet','fa-shopping-cart','fa-folder','fa-folder-open','fa-arrows-v','fa-arrows-h','fa-bar-chart-o','fa-bar-chart','fa-twitter-square','fa-facebook-square','fa-camera-retro','fa-key','fa-gears','fa-cogs','fa-comments','fa-thumbs-o-up','fa-thumbs-o-down','fa-star-half','fa-heart-o','fa-sign-out','fa-linkedin-square','fa-thumb-tack','fa-external-link','fa-sign-in','fa-trophy','fa-github-square','fa-upload','fa-lemon-o','fa-phone','fa-square-o','fa-bookmark-o','fa-phone-square','fa-twitter','fa-facebook-f','fa-facebook','fa-github','fa-unlock','fa-credit-card','fa-rss','fa-hdd-o','fa-bullhorn','fa-bell','fa-certificate','fa-hand-o-right','fa-hand-o-left','fa-hand-o-up','fa-hand-o-down','fa-arrow-circle-left','fa-arrow-circle-right','fa-arrow-circle-up','fa-arrow-circle-down','fa-globe','fa-wrench','fa-tasks','fa-filter','fa-briefcase','fa-arrows-alt','fa-group','fa-users','fa-chain','fa-link','fa-cloud','fa-flask','fa-cut','fa-scissors','fa-copy','fa-files-o','fa-paperclip','fa-save','fa-floppy-o','fa-square','fa-navicon','fa-reorder','fa-bars','fa-list-ul','fa-list-ol','fa-strikethrough','fa-underline','fa-table','fa-magic','fa-truck','fa-pinterest','fa-pinterest-square','fa-google-plus-square','fa-google-plus','fa-money','fa-caret-down','fa-caret-up','fa-caret-left','fa-caret-right','fa-columns','fa-unsorted','fa-sort','fa-sort-down','fa-sort-desc','fa-sort-up','fa-sort-asc','fa-envelope','fa-linkedin','fa-rotate-left','fa-undo','fa-legal','fa-gavel','fa-dashboard','fa-tachometer','fa-comment-o','fa-comments-o','fa-flash','fa-bolt','fa-sitemap','fa-umbrella','fa-paste','fa-clipboard','fa-lightbulb-o','fa-exchange','fa-cloud-download','fa-cloud-upload','fa-user-md','fa-stethoscope','fa-suitcase','fa-bell-o','fa-coffee','fa-cutlery','fa-file-text-o','fa-building-o','fa-hospital-o','fa-ambulance','fa-medkit','fa-fighter-jet','fa-beer','fa-h-square','fa-plus-square','fa-angle-double-left','fa-angle-double-right','fa-angle-double-up','fa-angle-double-down','fa-angle-left','fa-angle-right','fa-angle-up','fa-angle-down','fa-desktop','fa-laptop','fa-tablet','fa-mobile-phone','fa-mobile','fa-circle-o','fa-quote-left','fa-quote-right','fa-spinner','fa-circle','fa-mail-reply','fa-reply','fa-github-alt','fa-folder-o','fa-folder-open-o','fa-smile-o','fa-frown-o','fa-meh-o','fa-gamepad','fa-keyboard-o','fa-flag-o','fa-flag-checkered','fa-terminal','fa-code','fa-mail-reply-all','fa-reply-all','fa-star-half-empty','fa-star-half-full','fa-star-half-o','fa-location-arrow','fa-crop','fa-code-fork','fa-unlink','fa-chain-broken','fa-question','fa-info','fa-reddit-square','fa-stumbleupon-circle','fa-stumbleupon','fa-delicious','fa-digg','fa-pied-piper','fa-pied-piper-alt','fa-drupal','fa-joomla','fa-language','fa-fax','fa-building','fa-child','fa-paw','fa-spoon','fa-cube','fa-cubes','fa-behance','fa-behance-square','fa-steam','fa-steam-square','fa-recycle','fa-automobile','fa-car'],
      socicon: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ',', ';', ':', '+', '@', '=', '-', '^', '?', '$', '*', '&', '(', '#', '.', '_', ']', ')', '\'', '"', '}', '{']
    };
  }

})();
