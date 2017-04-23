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
    	
    	  
    	$("#del").click(function(){
    		alert();
    		var username = $('.username').val();
    		var password = $('.password').val();
    		$.ajax({
    			type:"post",
    			url:'http://192.168.43.116:3234/user/entry',
    			data:{
    				"username":username,
    				"password":password
    			},
    			success:function(e){
    				if(e.flag==1){
    					alert('成功');
    					localStorage.setItem('username',e.result[0].username);
    					localStorage.setItem('password',e.result[0].password);  
    				
    				}else if(e.flag==2){
    					alert('用户名不存在');
    				}else if(e.flag==3){
    					alert('密码错误');
    				}
    			},
    			err:function(err){
    				alert(err);
    			}
    		})
    	})
    	
    	
    	
    	
    	
    	
    	
  
    	
    		
    		
    	
    	
    	
	}])