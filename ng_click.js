var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService', function($scope, empService){
	$scope.doSearch = function(){
		empService.findEmployeeById($scope.searchEmpno, function(r){
			$scope.empno = r.empno;
			$scope.ename = r.ename;
			$scope.sal = r.sal;
			$scope.deptno = r.deptno;
			$scope.hiredate = r.hiredate;
			$scope.dob = r.dob;
			$scope.isSalAbove7k = parseInt(r.sal) > 7000;
		});
	};
}]);

app.service('empService', ['$http', '$log', function($http, $log){

	this.findEmployeeById = function(empno, cb){
		$http({
			url: 'http://localhost:8000/api/employees/' + empno,
			method: 'GET'
		}).then(function(resp){
			cb(resp.data);
		},function(resp){
			$log.error("ERROR occurred");
			debugger;
		});
	};

}]);