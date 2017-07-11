var app = angular.module("app", []);

app.controller('emp', ['$scope', function($scope){
    $scope.msg = "This is first Message";
}]);

app.directive('myInfoMsg', function(){
    return {
        templateUrl: "my-info-msg.html" // Exsternal Template File
    }
});