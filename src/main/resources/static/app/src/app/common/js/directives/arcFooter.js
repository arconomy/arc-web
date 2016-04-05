/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.common')
    .directive('arcFooter',function()   {
        return {
            restrict: 'E',
            templateUrl: 'common/templates/arcFooter.tpl.html',
            scope: true
        };
    });