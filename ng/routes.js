angular.module('app')
.config(function ($routeProvider) {
	$routeProvider	
	.when('/', {controller: 'PostsCtrl', templateUrl: 'posts.html.ejs' })
	.when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html.ejs' })
	.when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html.ejs' })
})
