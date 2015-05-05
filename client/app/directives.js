angular.module("myApp.directives", [])

.directive("rating", function() {
  // Write code here
  
  	var directive = { };
  	directive.restrict = 'AEC';

  	directive.scope = {
    	score: '=score',		// the = sign means two way binding
    	max: '=max'				// if we had used @ it would be 1 way
  	};

  	directive.templateUrl = "app/templates/rating.html";

  	directive.link = function(scope, elements, attr) {
  	// Write code here
  	
  		scope.updateStars = function() {
  			var idx = 0;
  			scope.stars = [ ];
  			for (idx = 0; idx < scope.max; idx += 1) {
    			scope.stars.push({
      				full: scope.score > idx
    			});
  			}
		}; 
  	
	};

  	return directive; 
   
   
  
});