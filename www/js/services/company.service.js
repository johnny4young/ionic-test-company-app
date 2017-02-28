angular.module('starter')


.factory('companyService', function($http) {

    var BASE_URL = "https://api.myjson.com/bins/2ggcs";

    return {

        /**
         * Get all data from url relationed with companies...
         *
         * @returns
         */
        GetAllCompany: function() {
            return $http.get(BASE_URL).then(function(response) {
                return response.data;
            })
        }
    }
});
