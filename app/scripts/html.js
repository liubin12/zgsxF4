angular.module('zgF4App')
	.controller('htmlCtrl', ["$scope", "$http", function($scope, $http) {
 
  

$scope.wxjianht = true;
    $scope.tonght = false;
		$scope.wxht = function() {
			
			$scope.tonght = true;
			$scope.wxjianht=false;
		}





}]);