angular.module('zgF4App')
	.controller('shenheCtrl', ["$scope", "$http", function($scope, $http) {
   $scope.wxjianxs = true;
    $scope.tong = false;
		$scope.wxj = function() {
			
			$scope.tong = true;
			$scope.wxjianxs=false;
		}


     




}]);











