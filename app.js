var citizenshipApp = angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('name', {
        url: '/name',
        templateUrl: 'templates/name.html'
    }).state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
    }).state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'
    }).state('results', {
        url: '/results',
        templateUrl: 'templates/results.html'
    })
    
    $urlRouterProvider.otherwise('/name');
})