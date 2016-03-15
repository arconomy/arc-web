angular.module('ngArconomy.dateTimePicker', ['ui.bootstrap', 'ui.bootstrap.datetimepicker'])

  .controller('datePickerCtrl', ['$scope', function($scope) {
//    https://github.com/Gillardo/bootstrap-ui-datetime-picker
    $scope.isOpen = false;
    $scope.isFromOpen = false;
    $scope.isToOpen = false;

    $scope.openCalendar = function(e) {
      e.preventDefault();
      e.stopPropagation();

      $scope.isOpen = true;
    };

    $scope.openFromCalendar = function(e) {
      e.preventDefault();
      e.stopPropagation();

      $scope.isFromOpen = true;
    };

    $scope.openToCalendar = function(e) {
      e.preventDefault();
      e.stopPropagation();

      $scope.isToOpen = true;
    };
  }]);