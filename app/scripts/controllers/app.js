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
  	
  		$stateProvider.state("shouye2",{
  		url: '/shouye2',
  		templateUrl: 'views/shouye2.html'
  	})
  	
	$stateProvider.state("shenhe",{
  		url: '/shenhe',
  		templateUrl: 'views/shenhe.html'
  	})
  	
	$stateProvider.state("html",{
  		url: '/html',
  		templateUrl: 'views/html.html'
  	})
	
	
	$stateProvider.state("sousuo",{
  		url: '/sousuo',
  		templateUrl: 'views/sousuo.html'
  	})
	


	$stateProvider.state("mainm",{
  		url: '/mainm',
  		templateUrl: 'views/mainm.html'
  	})
	$stateProvider.state("grxg",{
  		url:'/grxg',
  		templateUrl: 'views/grxg.html'
  	})

	$urlRouterProvider.otherwise('/login');

	


  }]);

