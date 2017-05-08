'use strict';

/**
 * @ngdoc function
 * @name sxpAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sxpAppApp
 */
angular.module('zgF4App')
    .controller('loginCtrl',['$scope','$state','$http','$location',function($scope,$state,$http,$location){
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

    			oLogin.innerHTML="<div class='loginCon'>用户名不能为空<div id='close'>&time</div></div>";
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
    	function two(){
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
    			oLogin.innerHTML="<div class='loginCon'>a<div id='close'>&time</div></div>";
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
    	function three(){
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
    			oLogin.innerHTML="<div class='loginCon'>用户名不存在<div id='close'>&time</div></div>";
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
    	function four(){
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
    			oLogin.innerHTML="<div class='loginCon'>密码错误<div id='close'>&time</div></div>";

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
    	
    	
    	
    	
    			
    	  
    	$("#del").click(function(){
    		var username = $('.username').val();
    		var password = $('.password').val();
    		
    		if(username==''){
    			openNew('用户名不能为空');
    		}else if(password==''){
    			openNew('密码不能为空');
    		}else{
    			$.ajax({
        			type:"post",
        			url:'http://192.168.43.116:3234/user/entry',
        			data:{
        				"username":username,
        				"password":password,
        			},
        			success:function(e){
        				if(e.flag==1){
        					console.log(e)
        					
        					localStorage.setItem('id',e.result[0].id)
        					localStorage.setItem('username',e.result[0].username);
        					localStorage.setItem('password',e.result[0].password);
        					localStorage.setItem('nick',e.result[0].nick);
        					localStorage.setItem('email',e.result[0].email);
        					localStorage.setItem('tel',e.result[0].tel);
        					localStorage.setItem('start',e.result[0].start);
        					localStorage.setItem('imageTou',localStorage.imgg);

        						if(localStorage.start==0){
        							$state.go('shouye');
        						}else if(localStorage.start==1){

        						if(localStorage.start==1){

        							$state.go('shouye2');
        						}else if(localStorage.start==0){
        							$state.go('shouye');
        						}
        				}else if(e.flag==2){
        					//alert('用户名不存在');
        					openNew('用户名不存在');
        				}else if(e.flag==3){
        					//alert('密码错误');
        					openNew('密码错误');
        				}
        			},
        			err:function(err){
        				openNew(err);
        			}
        		})	
    		}
    		
    		
    		
    		
    	})
    	
    	
    	
    			
    	
    	
    	
    	
    	
    	
    	
  
    	
    		
    		
    	
    	
    	
	}])