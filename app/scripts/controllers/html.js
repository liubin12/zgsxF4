angular.module('zgF4App')
	.controller('htmlCtrl', ["$scope", "$http","$state", function($scope, $http,$state) {
 
  

$scope.wxjianht = true;
    $scope.tonght = false;
		$scope.wxht = function() {
			
			$scope.tonght = true;
			$scope.wxjianht=false;
		}


$("#wxfb").click(function(){
		var opt=$('option[name="c"]:checked').val();
	$.ajax({
		type:"post",
				
    url:'http://192.168.43.116:3234/release/release',
		async:true,
		data:{
			titl:$("#biao").val(),
			conten:$("#nei").val(),
			star:opt,
			allaaa:1,
			lov:0
		},
		success:function(e){
			alert("cg")
			$state.go('shenhe')
		},
		error:function(e){
			alert("sb")
			
		}				
	});

})





}]);