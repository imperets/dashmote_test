angular.module("DashmoteTest", ['ngRoute'])

        .controller("ProfileController", ['$http', '$scope', function ($http, $scope) {

                $http.get('https://randomuser.me/api').success(function (data) {
                    
                    
                    $scope.input = data.results[0].user;
                    $scope.master = angular.copy($scope.input);
                    
                    console.log($scope.input);    

                    $scope.save = function (data) {
                        $scope.master = angular.copy(data);
                        console.log($scope.master);
                    };

                    
                });



            }])

        .filter('capitalize', function () {
            return function (input, all) {
                var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
                return (!!input) ? input.replace(reg, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : '';
            };
        });


        