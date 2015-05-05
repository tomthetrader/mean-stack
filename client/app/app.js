angular.module('myApp', [
	'myApp.services',
	'myApp.filters',
	'myApp.directives',
	'myApp.controllers'

	]);



// The stuff below definitly works but is not how it is written in the tutorial //

// (function(){

// 	var app = angular.module('myApp', []);

// 	app.controller('songCtrl', function($scope) {
// 		$scope.songs = [{
//   				artist: "Nightwish",
//   				title: "Ghost Loves Score"
// 			}, 
// 			{
//   				artist: "Evanescence",
//   				title: "Everybody's Fool"
// 			}, 
// 			{
//   				artist: "Within Temptation",
//   				title: "Ice Queen"
// 			}];
		
// 	});

	

// })();

_.mixin(_.string.exports());
