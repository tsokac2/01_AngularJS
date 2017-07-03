var app = angular.module("app", []);
app.controller('emp',['$scope', 'calcFactory', function($scope, calcFactory){
    $scope.x = 10;
    $scope.y = 20;

    $scope.doSum = function(){
        $scope.sum = calcFactory.getSum($scope.x, $scope.y);
    };
}]);

// Custom Service Factory
app.factory('calcFactory', ['$http', '$log', function($http, $log) {
    $log.log("instantiating calcFactory...");
    var zCalcService = {};
    zCalcService.getSum = function(x,y){
        return parseInt(x) + parseInt(y);
    };
    return zCalcService;
}]);