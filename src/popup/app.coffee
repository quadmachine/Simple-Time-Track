app = angular.module("SimpleTimeTrackPopup", ["ngRoute"])

###
  Configure app
###

app.config [
  "$httpProvider",
  "$routeProvider",
  ($httpProvider, $routeProvider) ->
    $httpProvider.interceptors.push "HttpErrorInterceptorModule"
    $routeProvider.when("/overview",
      templateUrl: "partials/popup.html"
      controller: "PopupController"
    ).when("/login",
      templateUrl: "partials/login.html"
      controller: "LoginController"
    ).otherwise redirectTo: "/overview"
]

###
  Add current controller to $rootScope
###
app.run ($rootScope) ->
  $rootScope.$on "$routeChangeSuccess", (ev, data) ->
    $rootScope.controller = data.$$route.controller if data.$$route and data.$$route.controller