/**
 * Created by cornishac on 20/08/2015.
 */

angular.module( 'ngArconomy.contact')
    .directive('arcAlert', ['$location','$anchorScroll',function($location,$anchorScroll){
        return {
            restrict: 'E',
            templateUrl: 'contact/templates/directives/arcAlert.tpl.html',
            scope: {},
            link: function  (scope,elem,attr)  {

                scope.alerts = [
                    //{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
                    //{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
                ];


                scope.$on('alert',function(event,params){
                        scope.alerts = [];
                        scope.alerts.push({type: params.type, msg: params.msg});
                        $location.hash('alert');
                        $anchorScroll();
                 });

                scope.closeAlert = function(index) {
                    scope.alerts.splice(index, 1);
                };



            }
        };
    }]);