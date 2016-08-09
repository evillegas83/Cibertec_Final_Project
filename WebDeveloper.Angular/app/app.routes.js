(function() {
    'use strict';
    angular.module('app')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouteProvider'];

    function routeConfig($stateProvider, $urlRouteProvider){
        $stateProvider
        .$stateProvider
            .state('person', {
                url: '/person',
                templateUrl: 'app/private/person/inde.html'
            });
    }

})();