/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcSocialDetails', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcSocialDetails.tpl.html',
            scope: true,
            link: function(scope, element, attr){
                scope.readonly = (attr.fmReadonly == 'true');
                scope.required = (attr.fmRequired == 'true');

                scope.data.hasFacebook = false;
                scope.data.hasTwitter = false;
                scope.data.hasGooglePlus = false;
                scope.data.hasInstagram = false;
                scope.data.hasPinterest = false;
                scope.data.hasLinkedIn = false;

            }
        };
    });