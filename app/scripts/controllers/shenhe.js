angular.module('zgF4App')
	.controller('shenheCtrl', ["$scope", "$http","$state", function($scope, $http,$state) {



var wxqq=document.getElementsByClassName("wxqq");
var wxjian=document.getElementsByClassName("wxjian");


$.ajax({
				type:"get",        
     url:'http://192.168.43.116:3234/list/listall',
     data:{
     	allaa:1   	
     },    
		success:function(e){
			console.log(e)	
			var abc="";
			var id=id;
			for (var i=0;i<e.length;i++) {			
	abc+=	'<img src="../favicon.ico" /><div class="wxshnr_c"><top>"'+e[i].title+'"</top><span>"'+e[i].content+'"</span></div><div class="wxshnr_l"><div class="wxqq"><a id="wxxtongg" ee="'+e[i].id+'">通过</a><a class="dell" del="'+e[i].id+'">未通过</a><a id="wxxiangq" xiang="'+e[i].id+'">详情</a></div><p class="wxjian" bb="'+i+'">></p></div>'									
								
			}
			$(".wxshnr").append(abc);
				$(".wxbox").delegate('.wxjian','click',function(){
	var bb=$(this).attr('bb')
	
	$(".wxqq").eq(bb).css("display","block");
	$(".wxjian").eq(bb).css("display","none");

})
		
		 $(".dell").click(function(){					
			var id=$(this).attr("del");
					
					$.ajax({
				     type:"post",
				     url:'http://192.168.43.116:3234/update/shanc',
					data:{			
						id:id
					},
				    success:function(e){
					if(e.flag==1){
						alert("删除成功");	
						$(this).parent().parent().remove();
						location.reload()
					}else if(e.flag==2){
						alert("删除失败");						
					}else{
						alert("qqqq")						
					}
				    },
				    error:function(){
					alert("error");				   
				  }
			      });
				 });
		
		

			$("#wxtuo").html(e[0].title)
			$("#wxp").html(e[0].content)
			
			
		},error:function(){
			alert("errpr!")
				}
		});
////////////////////////
   $("body").delegate('#wxxiangq','click',function(){
   	    id=$(this).attr('xiang');	   
   	$.ajax({
   	type:"get",
   	 url:'http://192.168.43.116:3234/xiugai/lists',
   	async:true,
   	data:{
   		'alla':1,
   		'id':id
   	},
   	success:function(e){
   			alert('cg')
   			$state.go('shouye')
   	},
	error:function(e){
   	alert('sb')
		
   	}
   		})
   }) 


//	$("body").delegate('#wxxiangq','click',function(){
//	    id=$(this).attr('xiang')		
//			$state.go('shouye')
//		})



/////////////////
$("body").delegate('#wxxtongg','click',function(){
 id=$(this).attr('ee')	 
$.ajax({
	type:"get",
	 url:'http://192.168.43.116:3234/xiugai/xiulla',
	async:true,
	data:{
		'id':id,
		'alla':0
	},
	success:function(e){
		console.log(e)
		$state.go('shouye')
			location.reload()
			
			//location.href='shouye.html';
	},
	error:function(e){
	alert('sb')
		
	}
	
});




});
$(".wxtop_r").click(function(){
	$state.go("sousuo")
	
	
})

//ng-click="wxj()" ng-show="wxjianxs"
//
}]);











