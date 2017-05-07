'use strict';

/**
 * @ngdoc function
 * @name zgF4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zgF4App
 */
angular.module('zgF4App')
 .controller('grxgCtrl',['$scope','$state','$location',function($scope,$state,$location){
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
	var id = localStorage.id;
	$.ajax({
		type:'get',
		url:'http://192.168.43.116:3234/xiugai/liss',
		async: true,
		data:{
			'id':id
		},
		success:function(){
			
		},
		err:function(){
			
		}
	});

	
	$scope.nicheng = localStorage.nick;
	$scope.username = localStorage.username;
	$scope.password = localStorage.password;
	$scope.email = localStorage.email;
	$scope.tel = localStorage.tel;
	$scope.img = '';
    //获取图片路径
	function getObjectURL(file) {
		var url = null;
		if(window.createObjectURL != undefined) {
			url = window.createObjectURL(file)
		} else if(window.URL != undefined) {
			url = window.URL.createObjectURL(file)
		} else if(window.webkitURL != undefined) {
			url = window.webkitURL.createObjectURL(file)
		}
		return url
	};
	

			//$("#file").click()
			$("#file").change(function() {
				var files = this.files[0]; //加载处理图片
				var srcs = getObjectURL(this.files[0]); //获取路径
				$('.addImg').attr('src', srcs)
					//console.log(files)
				var fd = new FormData();
				fd.append('uploadedFile', files);
				//console.log(fd)
				$.ajax({
					url: 'http://192.168.43.116:3234/xiugai/right',
					type: "post",
					data: fd,
					contentType: false,
					processData: false,
					success: function(data) {
						
						console.log(data)
						$scope.img = data.fName;
						localStorage.imgg = $scope.img;
						console.log(localStorage.imgg);
					},
					error:function(err) {
						console.log("err:"+err.statusText)
					}
				})
			})
			$('#update').click(function(){
				var xingming = $('#xingming').val();
				var mima = $('#mima').val();
				var shouji = $('#shouji').val();
				var youxiang = $('#youxiang').val();
				var nicheng = $('#nicheng').val();
				$.ajax({
					 type: "post",
					 url:'http://192.168.43.116:3234/xiugai/click',
					 data:{
						'username':xingming,
						'password':mima,
						'tel':shouji,
						'email':youxiang,
						'nick':nicheng,
						'id':id,
						'imageTou':localStorage.imgg
						
					 },
					 success:function(e){
						 if(e.flag==1){
							 openNew('成功');
							 window.location.reload; 
						 }else if(e.flag==2){
							 openNew('失败'); 
						 }
					 },
					 err:function(){
						 openNew('error');
					 }
						 
				})

			})
	
		

									

		
		
		
 //获取后台图片名称
	function getObjectURL(file) {
		var url = null;
		if(window.createObjectURL != undefined) {
			url = window.createObjectURL(file)
		} else if(window.URL != undefined) {
			url = window.URL.createObjectURL(file)
		} else if(window.webkitURL != undefined) {
			url = window.webkitURL.createObjectURL(file)
		}
		return url
	};











	/*var files;
	//var html="";
	$scope.fn = function(file){
		console.log(file.files);
		//files = file.files[0];
		//console.log(files)
	};		
	$('#update').click(function(){
		//alert(1);
		var fd=new FormData()
	    console.log(fd)
        fd.append("btn",files)
		$.ajax({
			type:"post",  
			url:'http://192.168.43.116:3234/xiugai/right',
			data:fd,	
		 	processData:false,
            contentType:false,	
			success:function(e){
				console.log('e:'+e);
			},
			err:function(){
				
			}
		})
	})*/

	
	
	
}]) 
