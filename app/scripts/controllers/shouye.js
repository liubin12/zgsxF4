'use strict';

/**
 * @ngdoc function
 * @name sxpAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sxpAppApp
 */
angular.module('zgF4App')
    .controller('shouye',['$scope','$state','$location',function(scope,$state,$location){
    var oDiv = document.getElementsByClassName('ul2')[0];
   var divT = oDiv.offsetTop;
   //console.log(divT);
   window.onscroll = function() {
    // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
    var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollT >= divT) {
     if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
      // 兼容IE6代码
      oDiv.style.position = 'absolute';
      oDiv.style.top = scrollT + 'px';
      oDiv.style.left = 0 + 'px';
     } else { 
      // 正常浏览器代码
      oDiv.style.position = 'fixed';
	  oDiv.style.background = "#9069FD";
      oDiv.style.top = 0;
		oDiv.style.width = "100%";
      oDiv.style.left = 0;
oDiv.style.boxShadow= '0rem 0.1rem 0.5rem #000';
     }
    } else{
	oDiv.style.position = '';
	oDiv.style.background = '';
	oDiv.style.boxShadow= "";
}
     
	
   }
/////左侧滑动
	
var slideout = new Slideout({
	'panel': document.getElementById('Neirong'),
	'menu': document.getElementById('menu'),
	'padding': 256,
	'tolerance': 70
  });
 
  var current = 0;
         
            document.getElementById('mmy').onclick = function(){
             
                current = (current+90)%360;
             	
                this.style.transform = 'rotate('+current+'deg)';
            }
  document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
	slideout.toggle();
  });

  document.querySelector('.menu').addEventListener('click', function(eve) {
	if (eve.target.nodeName === 'A') { slideout.close(); }
  });
 function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
window.onload = function(){
	aload();
	document.querySelector('.iphone').className += ' shown';
}

		
		$.ajax({
			type: "get",
			
			url: "http://192.168.43.116:3234/list/list",
			
			async: true,
			data:{
				'start':0,
				'alla':0
			},
			success: function(data) {
				
				console.log(data[1].love)
				var html=''
				for(var i = 0; i < data.length; i++) {
					html+='<div class="neirong" liu="'+data[i].id+'"><div class="nr_1"><b>'+data[i].title+'</b> <b><img src="../images/LZW_love'+data[i].love+'.png"/><img src="../images/LZW_take.png" style="width: 24px;"/></b><p class="LZW_xiangxi">'+data[i].content+'</p></div></div></div>'
			}

console.log(data)
				$('.neirong1').append(html);
			},
			error:function(){
				alert('error')
			}
		})
		
		一.html5为什么开头申明doctype html
		主要原因为html5中只有一个文档类型，就是html，而不像html 4.01或xhtml1.0还有多个文档类型。
		二:盒模型  ie谷歌兼容问题
			内容 padding border margin
		三、HTML5 存储类型有什么区别？
	HTML5 能够本地存储数据，在之前都是使用 cookies 使用的。HTML5 提供了下面两种本地存储方案：
	localStorage 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。
	sessionStorage 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。
	因此sessionStorage不是一种持久化的本地存储，	仅仅是会话级别的存储
		四, js window.onload() 事件和 jQuery ready 函数有何不同？
onload DOM 被创建还要等到包括大型图片、音频、视频在内的所有外部资源都完全加载。缺点可能有延迟
另一方面，jQuery ready() 函数只需对 DOM 树的等待，而无需对图像或外部资源加载的等待，从而 执行起来更快
ready()多次使用它，顺序执行  onload 技术而言，只能在单一函数里 使用。
	 五,让一个盒子水平垂直居中
	 	子集absolute绝对
		
		
		$('.baba').click(function(){
			alert(11)
			var liu=$(this).attr("start1")
			$('.baba').css('border-bottom','#9769ff')
			$(this).css('border-bottom','3px solid #FFF')
			
			$.ajax({
			type: "get",
			
			url: "http://192.168.43.116:3234/list/list",
			
			async: true,
			data:{
				'start':liu,
				'alla':0
			},
			success: function(data) {
				
				console.log(data[0].id)
				var html=''
				for(var i = 0; i < data.length; i++) {
					html+='<div class="neirong" liu="'+data[i].id+'"><div class="nr_1"><b>'+data[i].title+'</b> <b><img src="../images/LZW_love'+data[i].love+'.png"/><img src="../images/LZW_take.png" style="width: 24px;"/></b><p class="LZW_xiangxi">'+data[i].content+'</p></div></div></div>'
			}

console.log(data)
				$(".neirong1").children().remove();
				$('.neirong1').append(html);
			},
			error:function(){
				alert('error')
			}
		})
		})

    	$('.hedaPhoto').click(function(){
    		$state.go("mainm")
    	})
    	
    	$('.neirong1').delegate(".neirong","click",function(){
    		var id=$(this).attr("liu");
    		alert(id)
    	})
    	

	
				
			
		
			
		scope.user=localStorage.username
		
		
    	
    	
	}])