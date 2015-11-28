angular.module("DashmoteTest")
        .config(function($routeProvider){
            $routeProvider.when('/welcome', {
               templateUrl: 'templates/welcome.html' 
            })
                .when('/profile', {
                   templateUrl: 'templates/profile.html',
//                   controller: 'ProfileController',
//                   controllerAs: 'profile'
                })
                .when('/', {
                    templateUrl: 'templates/welcome.html'
                })
                .otherwise({redirectTo: '/'});

        });