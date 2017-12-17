(function () {
  'use strict';

  angular.module('OwlAdmin.pages.components')
      .controller('ComponentsTodoCtrl', ComponentsTodoCtrl);

  /** @ngInject */
  function ComponentsTodoCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var componentsColors = baConfig.colors.components;
    var colors = [];
    for (var key in componentsColors) {
      colors.push(componentsColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Have fun with Owl Admin' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Imaginem gi converto defectus interdum ad si alterius to.' },
      { text: 'Write email to business cat' },
      { text: 'Now for manners use has company believe parlors. Least nor party who wrote while did.' },
      { text: 'What do you think?' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();
