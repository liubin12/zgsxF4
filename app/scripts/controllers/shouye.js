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

    	
    	
	}])