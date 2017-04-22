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
  	$urlRouterProvider.otherwise('/login');
  }]);
