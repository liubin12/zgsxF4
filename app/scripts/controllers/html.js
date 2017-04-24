angular.module('zgF4App')
	.controller('htmlCtrl', ["$scope", "$http", function($scope, $http) {
 
  

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
			title:$("#biao").val(),
			content:$("#nei").val(),
			start:opt,
			alla:0,
			love:0
		},
		success:function(e){
			alert("cg")
			
		},
		error:function(e){
			alert("sb")
			
		}				
	});
	
	
	
})





}]);