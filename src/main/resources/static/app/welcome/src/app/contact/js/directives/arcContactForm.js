/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcContactForm',function(){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcContactForm.tpl.html',
            scope: true
        };
    });