
angular.module('zgF4App')
	.controller('sousuoCtrl', ["$scope", "$http", function($scope, $http) {
  
		
$("#lei>li").click(function(){
			$("#sousuo").val($(this).text())
		
		})

$("#shan").bind('click',function(){
			$('#lishi').html("<p>暂无搜索历史</p>");
			localStorage.his = "";
		})
	
	
	
		
		var His = localStorage.his;
		if(His){
			$('#lishi p').hide();
			var jilv = His.split(',');
			for(var i=0; i<jilv.length-1; i++){
				$('#lishi').prepend('<span>'+ jilv[i] +'</span>');
			}
		}else{
			$('#lishi').html('<p>暂无搜索历史</p>');
		}	




$("#right").click(function(){
	if($('#sousuo').val() == ''){
				$('#sousuo').val("请输入搜索内容")
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

















