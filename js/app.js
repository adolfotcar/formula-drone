angular
	.module('Drone', ['ngRoute'])
	.run(function($rootScope, $http, $location){
	})
	.controller('AppCtrl', function AppCtrl($timeout, $scope, $http, $location){
		var controller = this;

		//closing splash screen
		$timeout(function(){
			$scope.hideSplash = true;
		}, 1000);
		
	});