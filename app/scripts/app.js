'use strict';

angular.module('sheetApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'mongolabResource'
])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.constant('API_KEY', '4fd0a186e4b00ba3dc958235')
	.constant('DB_NAME', 'pathfinder_sheet');
