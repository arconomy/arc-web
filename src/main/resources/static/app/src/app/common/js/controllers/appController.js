/**
 * Created by cornishac on 20/08/2015.
 */
angular.module( 'ngArconomy')
.controller( 'AppCtrl', function AppCtrl ($scope, $timeout, propertyService) {

    $scope.getVersion = function() {
        propertyService.getVersion().then(function(data) {
            $scope.versionNumber = data.value;
        });
    };
});