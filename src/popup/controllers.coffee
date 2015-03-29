###
Main Popup Controller
###
class PopupController

  @$inject: ['$scope', 'Notifications']

  constructor: ($scope, Notifications) ->
    Notifications.getNotifications().then (data) ->
      $scope.projects = data.projects
      $scope.incidents = data.stats.incidents.new + data.stats.incidents.current
      $scope.stats
      # update badge
      chrome.browserAction.setBadgeText text: (if $scope.incidents > 0 then $scope.incidents else '') + ''

###
  Register all controllers
###

app.controller "PopupController", PopupController