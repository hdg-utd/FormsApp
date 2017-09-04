var citizenshipApp = angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('name', {
        url: '/name',
        templateUrl: 'templates/name.html'
    }).state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
    });
    
    $urlRouterProvider.otherwise('/name');
})