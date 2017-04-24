
angular.module('zgF4App')
	.controller('sousuoCtrl', ["$scope", "$http", function($scope, $http) {
  
		
$("#lei>li").click(function(){
			$("#sousuo").val($(this).text())
		
		})


$("#right").click(function(){
	if($('#sousuo').val() == ''){
				$('#sousuo').val("请输入商品")
			}else{
			$.ajax({
				type:"get",
				  url:'http://192.168.43.116:3234/list/search',
				async:true,
				data:{
					title:$("#sousuo").val()            				
				},
				success:function(e){
					console.log(e)
					var aaaa="";
					for (var i=0;i<e.length;i++) {
						aaaa+='<img src="../favicon.ico" /><div class="sszs_c"><top>'+e[i].title+'</top><p>'+e[i].content+'</p></div>'
					}
					$(".sszs").append(aaaa)					
				},
				error:function(e){
					
					alert("error")
				}		
			});
			}
		})







}]);

















