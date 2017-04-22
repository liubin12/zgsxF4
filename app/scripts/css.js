angular.module('zgF4App')
	.controller('cssCtrl', ["$scope", "$http", function($scope, $http) {
 
  $scope.wxjiancss = true;
    $scope.tongcss = false;
		$scope.wxcss = function() {
			$scope.tongcss = true;
				$scope.wxjiancss=false;
		}







}]);