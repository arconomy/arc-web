/**
 * Created by cornishac on 20/08/2015.
 */
angular.module( 'ngArconomy.contact')
.controller( 'ContactCtrl',function ContactController ($scope, $timeout, propertyService, contactService, $state) {

    $scope.getVersion = function() {
        propertyService.getVersion().then(function(data) {
            $scope.versionNumber = data.value;
        });
    };

    $scope.data = {};

    $scope.saveContactForm = function()    {
        $scope.isSaving = true;
        var JSONObj = $scope.data;
        contactService.saveContact(
            JSONObj,
            function (successPromise) {
                // Success function
                $scope.isSaving = false;
                $state.go('success');
            },
            function (failPromise) {
                $scope.$broadcast('alert', {type: 'danger', msg: "Oops.. Sorry your form wasn't submitted - please try again."});
                $scope.isSaving = false;
            }
        );
    };

});