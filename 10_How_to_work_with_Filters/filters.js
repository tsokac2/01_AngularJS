var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService',  function($scope, empService){ //'$filter', - after empService
	$scope.doSearch = function(){
		empService.findEmployeeById($scope.searchEmpno, function(r){
			$scope.empno = r.empno;
			$scope.ename = r.ename;
			$scope.sal = r.sal;
			$scope.deptno = r.deptno;
			$scope.hiredate = r.hiredate;
			$scope.dob = r.dob;
			$scope.isSalAbove7k = parseInt(r.sal) > 7000;
            //$scope.ENAME = $filter("uppercase")(r.ename); - filter embedded in controller
		});
	};
}]);

app.service('empService', ['$http', '$log', '$filter', function($http, $log){

	this.findEmployeeById = function(empno, cb){
		$http({
			url: 'http://localhost:8000/api/employees/' + empno,
			method: 'GET'
		}).then(function(resp){
            //resp.data.ename = $filter("uppercase")(resp.data.ename); - filter embedded in custom service
			cb(resp.data);
		},function(resp){
			$log.error("ERROR occurred");
			debugger;
		});
	};

}]);