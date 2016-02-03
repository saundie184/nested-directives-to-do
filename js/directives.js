//Parent directive
app.directive('swList', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/toDoList.html',
    controller: ['$scope', function($scope) {
      $scope.list = [];
      $scope.addToList = function(item) {
        $scope.list.push(item);
        $scope.taskInput = '';
      };

      this.removeItem = function(item) {
        var index = $scope.list.indexOf(item);
        if (index > -1) {
          $scope.list.splice(index, 1);
        }
      };
      this.editItem = function(newItem, old){
        var index = $scope.list.indexOf(old);
        $scope.list[index] = newItem;
        console.log('the new item is' + newItem + 'the old item is ' + old);
      };
    }],
  };
});

// Child directive
app.directive('swItemUpdate', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/updateItem.html',
    require: '^swList',
    link: function(scope, element, attrs, ctrl) {
      scope.remove = function() {
        var item = attrs.listItem;
        ctrl.removeItem(item);
        // console.log(attrs.listItem);
      };
      scope.edit = function(item) {
        ctrl.editItem(item, attrs.listItem);
      };

    }
  };
});

//Another child
// app.directive('swEditItem', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'views/editItem.html',
//     require: '^swList',
//     link: function(scope, element, attrs, ctrl) {
//       scope.edit = function(item) {
//         ctrl.editItem(item, attrs.listItem);
//       };
//     }
//   };
// });
