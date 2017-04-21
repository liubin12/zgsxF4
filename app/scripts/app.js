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
  	$stateProvider.state("shouye",{
  		url: '/shouye',
  		templateUrl: 'views/shouye.html'
  	})
  	
	
	
	
	
  	$urlRouterProvider.otherwise('/shouye');
  }]);
