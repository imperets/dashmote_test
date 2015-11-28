angular.module("DashmoteTest", ['ngRoute'])

        .controller("ProfileController", ['$http', '$scope', function ($http, $scope) {
                
                $http.get('https://randomuser.me/api').success(function (data) {

                    var profile = this;

                    this.data = data.results[0].user;
                    
                    $scope.photoURL = this.data.picture.medium;
                    $scope.firstName = this.data.name.first;
                    $scope.lastName = this.data.name.last;
                    $scope.username = this.data.username;
                    $scope.email = this.data.email;
                    $scope.street = this.data.location.street;
                    $scope.zip = this.data.location.zip;
                    $scope.city = this.data.location.city;
                    $scope.state = this.data.location.state;
                    $scope.phone = this.data.phone;
                    
                    $scope.fullName = [
                        this.data.name.first,
                        this.data.name.last
                    ];
                    
                    $scope.loginDetails = [
                        this.data.username,
                        this.data.email
                    ];
                    
                    console.log(this.data);
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
        