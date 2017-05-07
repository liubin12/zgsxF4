angular.module('zgF4App')
    .controller('mainm',['$scope','$state','$location',function(scope,$state,$location){
    	
		var chakan=localStorage.chakan
		var xxid=localStorage.liu

		//console.log(chakan)
		

		var xiang=localStorage.xiang
		console.log(xiang)
	alert(xiang)
		$.ajax({
			type: "get",
			url: "http://192.168.43.116:3234/xiugai/chakan",
			async: true,
			data:{
				
				id:xxid,
				chakan:chakan
			},
			success: function(data) {	 
			},
			error:function(){
				alert('error')
			}
		})
		
		
		//详情
		$.ajax({
			type: "get",		
			url: "http://192.168.43.116:3234/xiugai/lisd",
			async: true,
			data:{		
				id:xxid,
				
			},
			success: function(data) {
				
				console.log(data)
				var html=''
				for(var i = 0; i < data.length; i++) {
					html+='<div class="neirong" aa=""  chakanNum="'+data[i].chakan+'"><div class="nr_1"><b>'+data[0].title+'</b><b class="img"><img src="../images/LZW_love'+data[0].love%2+'.png" class="loveImg"/><img src="../images/LZW_take.png" style="width: 24px;"/></b><p class="LZW_xiangxi">'+data[i].content+'</p><p class="LZW_chakan">浏览:'+data[i].chakan+'</p><p class="LZW_xiangxi"><b style="display:inline-block;width: 100%;height: auto;background: #FFFFFF;" class="saver"></b></p><p class="LZW_xiangxi"><textarea class="textarea" style="height: 3rem; width: 100%;border: 0;padding-left: 0.2rem; " placeholder="评论"></textarea></p><p style="text-align: center;"  id="pushpl">发表</p></div></div>'
			}

//console.log(data[0].love)
				$('.neirong1').append(html);
				//浏览量
				
				//获取当前完毕
				    		//获取评论
								$.ajax({
							type: "get",
							url: "http://192.168.43.116:3234/xiugai/comt",
							async: true,
							data:{
								'saver':xxid,
							},
							success: function(e) {
								console.log(e)
								var html=''
								for(var i = 0; i < e.length; i++) {
									html+='<span style="color:#a668fd">'+e[i].niceng+'</span>:<span>'+e[i].pinlun+'</span><br/>'
							}
								$('.saver').append(html);	
							},
							error:function(){
								alert('error')
							}
						})
			},
			error:function(){
				alert('error')
			}
		})
		//发布品论
			$('.mainm').on("click","#pushpl",function(){
				
				var niceng='liuzhenwei'
				var nicheng=localStorage.nick
				var pinlun=$('.textarea').val()
				if(pinlun==''){
					alert('不要为空')
					return
				}else{
				console.log(pinlun)
    			$.ajax({
							type: "post",
							url: "http://192.168.43.116:3234/xiugai/pinlun ",
							async: true,
							data:{
								'saver':xxid,
								'niceng':niceng,
								'pinlun':pinlun
							},
							success: function(e) {
								console.log(e)
								if(e.flag==1){
							alert("发表成功")
							window.location.reload()
							}else{
								alert("失败")
								}
							},
							error:function(){
								alert('error')
							}
						})
    			}
    	})
				$('.mainm').on("click",".img",function(){
					var loveNum=Number(localStorage.loveNum)+1
					console.log(loveNum)
					$.ajax({
					type: "get",
					url: "http://192.168.43.116:3234/xiugai/aiqing",
					async: true,
					data:{
						id:xxid,
						love:loveNum
					},
					success: function(data) {	 
					localStorage.setItem('loveNum',loveNum)
					location.reload()
						
					},
					error:function(){
						alert('error')
					}
				})
				})
			$('.mainm .main').click(function(){
				window.history.back()
			})
		 	
	}])