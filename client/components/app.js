angular
  .module("app")
  .controller("AppCtrl", function($scope, $http) {
    (this.clear = function() {
      $http({
        method: "POST",
        url: "/clear"
      }).then(function() {
        // window.location.reload();
        //window.print();
        window.onload();
      });
    }),
      (this.ShowMeaning = function(word) {
        $http({
          method: "POST",
          url: "/data",
          data: { name: word },
          headers: { "Content-Type": "application/json" }
        }).then(function() {
          // window.location.reload();
          window.onload();
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
