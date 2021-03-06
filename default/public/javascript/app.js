'use strict';
// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ngAnimate']);
// configure our routes
app.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'mainController'
    })
    // route for the portafolios page
    .when('/portafolios', {
        templateUrl: 'templates/portafolios.html',
        controller: 'portafoliosController'
    })

    // route for the blogs page
    .when('/blog', {
        templateUrl: 'templates/blog.html',
        controller: 'blogController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
    });

});


app.controller('menuController', function () {
    this.tab = 1;
    this.selectTab = function (setTab) {
        this.tab = setTab;
    }

    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    }
});

// app the controller and inject Angular's $scopes
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Desarrollo de aplicaciones web | Damos vida a todas tus ideas';
    $scope.pageClass = 'page-home';

});

app.controller('portafoliosController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-portafolios';
});

app.controller('blogController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-blog';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
});