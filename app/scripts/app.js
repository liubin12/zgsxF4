'use strict';

/**
 * @ngdoc overview
 * @name zgF4App
 * @description
 * # zgF4App
 *
 * Main module of the application.
 */
angular
  .module('zgF4App', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	//登录
  	$stateProvider.state("login",{
  		url: '/login',
  		templateUrl: 'views/login.html'
  	})

  	//注册
  	$stateProvider.state("restiger",{
  		url: '/restiger',
  		templateUrl: 'views/restiger.html'
  	})
  	$urlRouterProvider.otherwise('/restiger');

  	$stateProvider.state("shouye",{
  		url: '/shouye',
  		templateUrl: 'views/shouye.html'
  	})
  	
	$stateProvider.state("shenhe",{
  		url: '/shenhe',
  		templateUrl: 'views/shenhe.html'
  	})
  	
	$stateProvider.state("html",{
  		url: '/html',
  		templateUrl: 'views/html.html'
  	})
	
 
	$stateProvider.state("css",{
  		url: '/css',
  		templateUrl: 'views/css.html'
  	})
	
	
	$stateProvider.state("js",{
  		url: '/js',
  		templateUrl: 'views/js.html'
  	})
	
	$stateProvider.state("jq",{
  		url: '/jq',
  		templateUrl: 'views/jq.html'
  	})
	$stateProvider.state("mainm",{
  		url: '/mainm',
  		templateUrl: 'views/mainm.html'
  	})
	$stateProvider.state("grxg",{
  		url: '/grxg',
  		templateUrl: 'views/grxg.html'
  	})
	
  	$urlRouterProvider.otherwise('/login');

	
	
	
 
  }]);

