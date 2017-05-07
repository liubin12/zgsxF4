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
							 alert('成功');
						 }else if(e.flag==2){
							 alert('失败'); 
						 }
					 },
					 err:function(){
						 alert('error');
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
