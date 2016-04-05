/**
 * Created by sullivand on 27/01/2016.
 */

angular.module('ngArconomy.common')

    .factory('propertyService', function($resource) {
        var service = {};

        service.getVersion = function() {
            var Property = $resource("/rest/property/version");
            return Property.get({}).$promise;
        };

        return service;
    });