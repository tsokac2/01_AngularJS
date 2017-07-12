var app = angular.module ('app', []);

app.controller('emp',['$scope', function($scope){
    $scope.emps = [
        {empno: "1001", ename:"Jag"},
        {empno: "1002", ename:"Chat"},
        {empno: "1003", ename:"Win"},
        {empno: "1004", ename:"Duhan"},
    ];

    $scope.addEmp = function(){
        var newEmpno = 1000 + $scope.emps.length + 1;
        var newEname = "ename" + newEmpno;

        $scope.emps.push({empno: newEmpno, ename: newEname});
    };

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test"; //this will have no affect on watchCollection
    }

    //folowing would not work (watches on reference, but not on collections/properties)
    // $scope.$waatch('emps', function(newValue, oldValue){
    // console.log("No. of Employees:" + $scope.emps.length);   
    //});

    //following would work (watches on collection modifications, but not on properties)
    //$scope.$watchCollection('emps', function(newValue, oldValue){
    //console.log("No. of Employees:" + $scope.emps.length);    
    //}); //colection level only, not deep into object


    //folowing would work on everything
    //$scope.$watch('emps', function(newValue, oldValue){
    //console.log("No. of Employees:" + $scope.emps.length);
    //}, true); //deep watch
}]);