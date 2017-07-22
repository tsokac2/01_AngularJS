var app = angular.module('app', []);

app.controller ('emp', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    $scope.$watch('a', function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("a modifate to " + newValue);
        }
    });

    $scope.$watch('b', function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("a modifate to " + newValue);
        }
    });

    $scope.$watch('c', function(newValue, oldValue){
        if(newValue != oldValue){
            console.log("a modifate to " + newValue);
            if($scope.c > 50){
                $scope.a = 1000;
            }
        }
    });

    $rootScope.$watch(function(){
        console.log('--digest inateraton started--');
    });

}]);