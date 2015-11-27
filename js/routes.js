angular.module("DashmoteTest")
        .config(function($routeProvider){
            $routeProvider.when('/welcome', {
               templateUrl: 'templates/welcome.html' 
            })
                .when('/profile', {
                   templateUrl: 'templates/profile.html'
                })
                .when('/', {
                    templateUrl: 'templates/welcome.html'
                })
                .otherwise({redirectTo: '/'});

        });