app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("main")
	
	var mainState = {
		name : "main",
		url : "/main",
		views : {
			"main" : {
				templateUrl : "view/login.html",
				controller : "loginController"
			}
		}
	}
	
	var guestbookState = {
		name : "guestbook",
		url : "/guestbook",
		views : {
			"main" : {
				templateUrl : "view/guestbook_main.html",
				controller : "guestbookController"
			},
			"guestbookInput@guestbook" : {
				templateUrl : "view/guestbook_input.html",
				controller : "guestbookInputController"
			},
			"guestbookContent@guestbook" : {
				templateUrl : "view/guestbook_content.html",
				controller : "guestbookContentController"
			}
		}
	}
	
	$stateProvider.state(mainState)
	$stateProvider.state(guestbookState)
})







