/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcEmployees', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcEmployees.tpl.html',
            scope: true,
            link: function(scope, element, attr){
                scope.readonly = (attr.fmReadonly == 'true');
                scope.required = (attr.fmRequired == 'true');
                scope.employeeOptions = ['0','1','Less Than 5','5-10','20-10','20+'];

            }
        };
    });