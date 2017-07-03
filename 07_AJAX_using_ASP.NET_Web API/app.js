var app = angular.module("app", []);
app.controller('emp',['$scope', '$http', function($scope, $http){
    $scope.x = 10;
    $scope.y = 20;

    $scope.doSum = function(){

        $http ({
            url: 'http://localhost:53743/Sum?x=' + $scope.x + '&y=' + $scope.y,
            method: 'GET'

        }).then(function(resp){
            //success function
           $scope.sum = resp.data;
            
        }, function(resp) {
            //failure function
           
        });
    };
}]);

