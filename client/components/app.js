angular
  .module("app")
  .controller("AppCtrl", function($scope, $http) {
    (this.ShowMeaning = word => {
      $http({
        method: "POST",
        url: "/data",
        data: { name: word },
        headers: { "Content-Type": "application/json" }
      }).then(function() {
        window.location.reload();
      });
    }),
      $http({
        method: "GET",
        url: "/data"
      }).then(
        function Done(res) {
          $scope.Words = res.data;
        },
        function Err(res) {
          $scope.Words = res.statusText;
        }
      );
  })
  .component("app", {
    bindings: {},
    controller: "AppCtrl",
    templateUrl: "/templates/app.html"
  });
