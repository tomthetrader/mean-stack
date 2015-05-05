(function(){

	var app = angular.module('store', []);

	app.controller('StoreController', function () {
		this.product = gem;
		
	});

	var gem = {
		name: "Diamond",
		price: 100,
		description: "Shiny thing",
	}

})();