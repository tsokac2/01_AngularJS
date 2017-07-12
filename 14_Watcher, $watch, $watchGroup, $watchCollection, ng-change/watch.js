var app = angular.module ('app', []);

app.controller('emp',['$scope', function($scope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 4;

    $scope.updateC = function(){
        $scope.c = $scope.a * 4
    };
    
    $scope.$watch("c", function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("Upadate C to " + newValue);
        }
    });
}]);