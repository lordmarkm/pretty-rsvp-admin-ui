(function () {
  'use strict';

  angular.module('OwlAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'video-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Meeting time',
        text: '"Vader and Me"',
        preview: 'app/feed/vader-and-me-preview.png',
        link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
        time: 'Today 1:12 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Added new image',
        text: '"My little kitten"',
        preview: 'app/feed/my-little-kitten.png',
        link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'Haha lol',
        time: '11.11.2016',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'geo-message',
        author: 'Nick',
        surname: 'Cat',
        header: 'Posted location',
        text: '"London, UK"',
        preview: 'app/feed/london-location.png',
        link: 'https://www.google.com/maps/place/London,+UK/@51.5226608,1.3547765,7z/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99',
        time: '11.11.2016',
        ago: '3 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Posted new message',
        text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
        time: '12.11.2016',
        ago: '3 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Posted new message',
        text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
        time: '14.11.2016',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'when you don\'t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.',
        time: '14.11.2016',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Alexander',
        surname: 'Demeshko',
        header: 'Posted new message',
        text: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
        time: '15.11.2016',
        ago: '6 days ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    };
  }
})();
