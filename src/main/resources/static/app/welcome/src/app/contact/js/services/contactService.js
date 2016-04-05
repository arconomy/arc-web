/**
 * Created by cornishac on 20/08/2015.
 */

angular.module('ngArconomy.contact')

    .factory('contactService', function ($resource) {
        var service = {};


        service.getBaseData = function()   {
            var url = "/rest/contact/";
            return service.getData(url);
        };

        service.saveContact = function(data, success, failure)   {
            var url = "/rest/contact/";
            return service.postData(url, data, success, failure);
        };

        service.postData = function (url, baseFaresObj, success, failure) {
            var dataResource = $resource(url);
            dataResource.save({}, baseFaresObj, success, failure);
        };

        service.getData = function (url) {
            var dataResource = $resource(url);
            return dataResource.get().$promise;
        };

        return service;
    });
