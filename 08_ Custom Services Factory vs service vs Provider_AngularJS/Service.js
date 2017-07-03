var app = angular.module("app", []);
app.controller('emp',['$scope', 'calcFactory', function($scope, calcFactory){
    $scope.x = 10;
    $scope.y = 20;

    $scope.doSum = function(){
        //$scope.sum = calcFactory.getSum($scope.x, $scope.y); --- Factory Service ---
        calcFactory.getSum($scope.x, $scope.y, function(z){
            $scope.sum = z;
        });
    };
}]);

// Custom Service 
app.factory('calcFactory', ['$http', '$log', function($http, $log) {
    $log.log("instantiating calcFactory...");
    var zCalcService = {};

    /* --- Factory Service  --- 
    zCalcService.getSum = function(x,y){
        return parseInt(x) + parseInt(y);
    };
    */

    zCalcService.getSum = function(x,y,cb) {
        var s = parseInt(x) + parseInt(y);
        cb(s);
    };
    return zCalcService;
}]);