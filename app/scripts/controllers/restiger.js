'use strict';

/**
 * @ngdoc function
 * @name zgF4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zgF4App
 */
angular.module('zgF4App')
 .controller('restigerCtrl',['$scope','$state','$location',function(scope,$state,$location){
	
	 function openNew(a){
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
	 			oLogin.innerHTML="<div class='loginCon'>"+a+"<div id='close'>&time</div></div>";
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
	 $(".Y_u_n").focus(function(){
         //alert(1);
		 
     });
	 $(".Y_u_n").blur(function(){
        // alert(2);
		 var user = $('#user').val();
		 var reg = RegE.name;
		 if (user)
         {
             if(reg.test(user))
             {
               $('.Y_xp').html('成功');
             }
             else
             {
            	$('.Y_xp').html('汉字或者英文');
             }
         }
		 
		
     });
	 $(".Y_u_p").focus(function(){
         //alert(1);
		 
     });
	 $(".Y_u_p").blur(function(){
        // alert(2);
		 var pass = $('#pass').val();
		 var reg = RegE.pass;
		 if (pass)
         {
             if(reg.test(pass))
             {
               $('.Y_p_xp').html('成功');
             }
             else
             {
            	$('.Y_p_xp').html('最少在8位');
             }
         }
		 
		
     });
	 $(".Y_u_m").focus(function(){
         //alert(1);
		 
     });
	 $(".Y_u_m").blur(function(){
        // alert(2);
		 var email = $('#email').val();
		 var reg = RegE.email;
		 if (email)
         {
             if(reg.test(email))
             {
               $('.Y_e_xp').html('成功');
             }
             else
             {
            	$('.Y_e_xp').html('使用QQ邮箱');
             }
         }
		 
		
     });
	 $(".Y_u_t").focus(function(){
         //alert(1);
		 
     });
	 $(".Y_u_t").blur(function(){
        // alert(2);
		 var tel = $('#tel').val();
		 var reg = RegE.tel;
		 if (tel)
         {
             if(reg.test(tel))
             {
               $('.Y_t_xp').html('成功');
             }
             else
             {
            	$('.Y_t_xp').html('正确的手机号');
             }
         }
		 
		
     });
	 $(".Y_u_nc").focus(function(){
         //alert(1);
		 
     });
	 $(".Y_u_nc").blur(function(){
        // alert(2);
		 var nickname = $('#nickname').val();
		 var reg = RegE.nickname;
		 if (tel)
         {
             if(reg.test(nickname))
             {
               $('.Y_e_nc').html('成功');
             }
             else
             {
            	$('.Y_e_nc').html('数字和英文组成');
             }
         }
		 
		
     });
	 
	 var RegE = {
			  nickname:/[a-z0-9[^A-Za-z0-9_\n\t]]*/,
	          name:/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/,
	          pass:/^[a-zA-Z\d_]{8,}$/,
	          tel : /^1[3|4|5|7|8][0-9]{9}$/,
	          email : /^\w+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,3}$/,
	          IDcard : /^[1-9]\d{16}[\dx]$/,
	 };
	 
	 $("#load").click(function(){
		 var user = $('#user').val();
		 var pass = $('#pass').val();
		 var email = $('#email').val();
		 var nickname = $('#nickname').val();
		 var tel = $('#tel').val();
		 $.ajax({
 			type:"post",
 			url:'http://192.168.43.116:3234/user/zhuce',
 			data:{
 				"username":user,
 				"password":pass,
 				"email":email,
 				"nick":nickname,
 				"tel":tel,
 				"start":0,
 				
 			},
 			success:function(e){
 				
 				console.log(e);
 				if(e.flag==1){
 				   //alert('成功注册');
 				   $state.go('login');
 				}else if(e.flag==2){
 					openNew('用户名重复');
 				}else if(e.flag==3){
 					openNew('错误');
 				}
 			},
 			err:function(err){
 				openNew(err);
 			}
 		})
 	 })
	 
	 
	 
	 
}]) 
