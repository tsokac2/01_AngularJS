var app = angular.module("bind", []);

app.controller("emp", ["$scope", function($scope){
    $scope.x = 20;
    $scope.y = 30;
}]);