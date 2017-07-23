var app = angular.module('app', []);

app.controller ('sample', ['$scope', '$parse', '$interpolate', function($scope, $parse, $interpolate){
    $scope.a = 10;
    $scope.b = 20;

    $scope.emp = {
        ename: "Jag",
        address: {
            city: "Austin"
        }
    };

    $scope.demoEval = function(){
        //alert("Result: " + ($scope.a * $scope.b))

        //var r = $scope.$eval("a * b");
        //alert("Result: "+ r);

        //var r = $scope.$eval("emp.address.city");
        //alert(r);

        //var r = $scope.$eval("a * b * 3 * c",{
            //c:5,
            //a:2
        //});
        //alert(r);

        //var r = $scope.$eval(function(scope, locals){
            //return scope.a * scope.b;
        //}, {a:3, c:2});
        //alert(r);
    };

    $scope.demoParse = function(){
        //var f = $parse("a * b"); //returns a function
        //var r = f($scope);
        //alert("Result = " + r);

        //alert("Result = " + $parse("a * b")($scope));

        //alert("Result = " + $parse("a * b")({
            //a:2,
            //b:3
        //}));

        //alert($parse("emp.address.city")($scope));
        $parse("emp.address.city").assign($scope, "Dallas"); //digest process/cycle/loop is kicked in
        //alert($parse("emp.address.city")($scope));
    };

    $scope.demoInterpolate = function(){
        //var f = $interpolate("Result = {{a * b}}, Some other result: {{a * b * 10}}"); //returns a function
        //var r1 = f($scope);
        //alert("Result = " + r1);

        //alert($interpolate("Result = {{a * b}}")($scope));

        alert($interpolate("Result = {{a * b | currency: 'USD$'}}")($scope));
    }

}]);

