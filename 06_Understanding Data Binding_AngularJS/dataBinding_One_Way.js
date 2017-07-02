var app = angular.module("bind", []);

app.controller("emp", ["$scope", function($scope){
    $scope.x = 20;
    $scope.y = 30;

    $scope.addSum = function(){
    $scope.x = $scope.x * 2;
    $scope.y = $scope.y * 2;
    $scope.sum = parseInt($scope.x) 
                    + parseInt($scope.y);
    };
}]);