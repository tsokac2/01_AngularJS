var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService',  function($scope, empService){ //'$filter', - after empService
	$scope.doSearch = function(){
		empService.getEmployees(function(r){
			$scope.employees = r;
		});
	};
}]);

app.service('empService', ['$http', '$log', '$filter', function($http, $log){

	this.getEmployees = function(empno, cb){
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

app.directive('empDetails', function(){
	return {
		templateUrl: 'emp-details_ng-repeat.html'
	}
});