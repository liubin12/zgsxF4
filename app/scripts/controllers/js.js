angular.module('zgF4App')
	.controller('jsCtrl', ["$scope", "$http", function($scope, $http) {
 
  
$scope.wxjianjs = true;
    $scope.tongjs = false;
		$scope.wxjs = function() {
			
			$scope.tongjs = true;
			$scope.wxjianjs=false;
		}






}]);