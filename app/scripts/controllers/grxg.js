'use strict';

/**
 * @ngdoc function
 * @name zgF4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zgF4App
 */
angular.module('zgF4App')
 .controller('grxgCtrl',['$scope','$state','$location',function(scope,$state,$location){
		
	
	var str=location.search.substring(4);
	$.ajax({
		type:'get',
		url:'http://192.168.43.116:3234/xiugai/lists?id'+str,
		async: true,
		success:function(){
			
		},
		err:function(){
			
		}
	});
	var files;
	var html="";
	var setFiles=function(element){
		console.log(element.files);
		files = element.files[0];
		console.log(files)
	}
			
	$('#update').click(function(){
		var xingming = $('#xingming').val();
		var mima = $('#mima').val();
		var youxiang = $('#youxiang').val();
		var shouji = $('#shouji').val();
		var nicheng = $('#nicheng').val();
		var fd=new FormData()
		 console.log(fd)
         fd.append("btn",files)	
         $.ajax({
         	url:'http://192.168.43.116:3234/xiugai/right',
         	type: "post",
         	data:fd,
         	processData:false,
            contentType:false,	
            success:function(e){
            	console.log('e:'+e);
            	$.ajax({
            		type:'post',
            		url:'http://192.168.43.116:3234/xiugai/click',
            		data:{
            			'username':xingming,
            			'password':mima,
            			'tel':shouji,
            			'email':youxiang,
            			'nick':nicheng,
            			'id':str,
            			'imgTou':e
            		},
            		success:function(data){
            			if(data.flag==1){
            				alert('成功');
            			}
            		},
            		err:function(){
            			
            		}
            		
            	})
            }
           
          })
	})

	
	
	
}]) 
