/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcBusinessName', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcBusinessName.tpl.html',
            scope: true,
            link: function(scope, element, attr){
                scope.readonly = (attr.fmReadonly == 'true');
                scope.required = (attr.fmRequired == 'true');

            }
        };
    });