angular.module('zgF4App')
	.controller('jqCtrl', ["$scope", "$http", function($scope, $http) {
 
  
$scope.wxjianjq = true;
    $scope.tongjq = false;
		$scope.wxjq= function() {
			
			$scope.tongjq = true;
			$scope.wxjianjq=false;
		}






}]);