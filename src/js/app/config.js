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
			.when(
					"/delete/:what",
					{
						templateUrl: "partials/delete.html",
						controllerAs: "DeleteController",
						controller: "DeleteController"
					})
			.otherwise(
					{redirectTo: "/"}
			);
}

config.$inject = ['$routeProvider']