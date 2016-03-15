/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcRetailOutlets', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcRetailOutlets.tpl.html',
            scope: true,
            link: function(scope, element, attr){
                scope.readonly = (attr.fmReadonly == 'true');
                scope.required = (attr.fmRequired == 'true');

                scope.data.sellsLocalMarkets = false;
                scope.data.sellsTradeFairs = false;
                scope.data.sellsRetailSuppliers = false;
                scope.data.hasAmazonStore = false;
                scope.data.hasEbayStore = false;
                scope.data.hasEtzyStore = false;
                scope.data.sellsOnSocialPlatform = false;

            }
        };
    });