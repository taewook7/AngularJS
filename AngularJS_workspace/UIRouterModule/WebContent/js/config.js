app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("main")
		
		var mainState = {
			name : "main",
			url : "/main",
// 			template : "<h1>Main</h1>"
			component : "mainComponent"
		}
		
		var page1State = {
			name : "page1",
			url : "/page1",
// 			templateUrl : "page1.html",
// 			controllr : "controller1"
			component : "page1Component"
		}
		$stateProvider.state(mainState)
		$stateProvider.state(page1State)
	})
	
// 	app.controller("controller1", function($scope){
// 		$scope.data1 = "문자열1"
// 		$scope.data2 = "문자열2"
// 	})