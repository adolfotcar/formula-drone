angular
	.module('Drone')
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html',
			})
			.when('/drones', {
				templateUrl: 'pages/drones.html',
			})
			.when('/about', {
				templateUrl: 'pages/about.html',
			})
			.when('/contact', {
				templateUrl: 'pages/contact.html',
			});
	});