angular.module('zgF4App')
    .controller('mainm',['$scope','$state','$location',function(scope,$state,$location){
    	
		
		var id=localStorage.id
	//	alert(id)
		$.ajax({
			type: "get",
			
			url: "http://192.168.43.116:3234/xiugai/lists",
			
			async: true,
			data:{
				
				'id':id,
				
			},
			success: function(data) {
				
				
				var html=''
				for(var i = 0; i < data.length; i++) {
					html+='<div class="neirong" aa=""><div class="nr_1"><b>'+data[0].title+'</b><b><img src="../images/LZW_love'+data[0].love+'.png"/><img src="../images/LZW_take.png" style="width: 24px;"/></b><p class="LZW_xiangxi">'+data[i].content+'</p><p class="LZW_xiangxi"><b style="display:inline-block;width: 100%;height: auto;background: #FFFFFF;"><span>刘振伟:这一条真不错楼主太赞了</span><br /><span>刘斌:太喜欢了</span></b></p><p class="LZW_xiangxi"><textarea style="height: 3rem; width: 100%;border: 0;padding-left: 0.2rem; " placeholder="评论"></textarea></p><p style="text-align: center;">发表</p></div></div>'
			}

console.log(data)
				$('.neirong1').append(html);
			},
			error:function(){
				alert('error')
			}
		})
	}])