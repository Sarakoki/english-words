angular
  .module("app")
  .controller("AppCtrl", function($scope, $http) {})
  .component("app", {
    bindings: {},
    controller: "AppCtrl",
    templateUrl: "/templates/word.html"
  });
