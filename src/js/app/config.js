export function config($routeProvider) {

	return $routeProvider
			.when(
					"/",
					{
						templateUrl: "partials/popup.html",
						controllerAs: "PopupController",
						controller: "PopupController"
					})
			.when(
					"/add",
					{
						templateUrl: "partials/add.html",
						controllerAs: "AddController",
						controller: "AddController"
					})

			.otherwise(
					{redirectTo: "/"}
			);
}

config.$inject = ['$routeProvider']