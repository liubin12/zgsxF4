angular.module('zgF4App')
	.controller('shenheCtrl', ["$scope", "$http","$state", function($scope, $http,$state) {

function fbcg(){
    		//获取页面的高度和宽度
    		var sWidth=document.body.scrollWidth;
    		var sHeight=document.body.scrollHeight;
    		
    		//获取页面的可视区域高度和宽度
    		var wHeight=document.documentElement.clientHeight;
    		
    		var oMask=document.createElement("div");
    			oMask.id="mask";
    			oMask.style.height=sHeight+"px";
    			oMask.style.width=sWidth+"px";
    			document.body.appendChild(oMask);
    		var oLogin=document.createElement("div");
    			oLogin.id="login";
    			oLogin.innerHTML="<div class='loginCon'>审核通过<div id='close'>&time</div></div>";
    			document.body.appendChild(oLogin);
    		
    		//获取登陆框的宽和高
    		var dHeight=oLogin.offsetHeight;
    		var dWidth=oLogin.offsetWidth;
    			//设置登陆框的left和top
    			oLogin.style.left=sWidth/2-dWidth/2+"px";
    			oLogin.style.top=wHeight/2-dHeight/2+"px";
    		//点击关闭按钮
    		var oClose=document.getElementById("close");
    		
    			//点击登陆框以外的区域也可以关闭登陆框
    			oClose.onclick=oMask.onclick=function(){
    						document.body.removeChild(oLogin);
    						document.body.removeChild(oMask);
    			};
    	};


function shanchu(){
    		//获取页面的高度和宽度
    		var sWidth=document.body.scrollWidth;
    		var sHeight=document.body.scrollHeight;
    		
    		//获取页面的可视区域高度和宽度
    		var wHeight=document.documentElement.clientHeight;
    		
    		var oMask=document.createElement("div");
    			oMask.id="mask";
    			oMask.style.height=sHeight+"px";
    			oMask.style.width=sWidth+"px";
    			document.body.appendChild(oMask);
    		var oLogin=document.createElement("div");
    			oLogin.id="login";
    			oLogin.innerHTML="<div class='loginCon'>不符合要求<div id='close'>&time</div></div>";
    			document.body.appendChild(oLogin);
    		
    		//获取登陆框的宽和高
    		var dHeight=oLogin.offsetHeight;
    		var dWidth=oLogin.offsetWidth;
    			//设置登陆框的left和top
    			oLogin.style.left=sWidth/2-dWidth/2+"px";
    			oLogin.style.top=wHeight/2-dHeight/2+"px";
    		//点击关闭按钮
    		var oClose=document.getElementById("close");
    		
    			//点击登陆框以外的区域也可以关闭登陆框
    			oClose.onclick=oMask.onclick=function(){
    						document.body.removeChild(oLogin);
    						document.body.removeChild(oMask);
    			};
    	};
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
	abc+=	'<img src="../favicon.ico" /><div class="wxshnr_c"><top>"'+e[i].title+'"</top><span>"'+e[i].content+'"</span></div><div class="wxshnr_l"><div class="wxqq"><a id="wxxtongg" ee="'+e[i].id+'">通过</a><a class="dell" del="'+e[i].id+'">未通过</a></div><p class="wxjian" bb="'+i+'">></p></div>'									
								
			}
			$(".wxshnr").append(abc);
			
			$("#wxtuo").html(e[0].title);
			$("#wxp").html(e[0].content);
			
			
				$(".wxbox").delegate('.wxjian','click',function(){
	var bb=$(this).attr('bb')
	
	$(".wxqq").eq(bb).css("display","block");
	$(".wxjian").eq(bb).css("display","none");

})
		//删除 未通过
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
						shanchu();
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
		
		

		
			
			
		},error:function(){
			alert("errpr!")
				}
		});
////////////////////////详情<a id="wxxiangq" xiang="'+e[i].id+'">详情</a>

//$("body").delegate('#wxxiangq','click',function(){
//           alert("111")
//  		var xiang=$(this).attr("xiang");
//			console.log(xiang)
//  		localStorage.setItem('xiang',xiang)
//  		
//  		
//  		$state.go('mainm')
//  	})


/////////////////通过
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
			//location.reload();			
			$state.go('shouye');
			fbcg();
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











