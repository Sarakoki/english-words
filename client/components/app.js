angular
  .module("app")
  .controller("AppCtrl", function($scope, $http) {
    this.ShowMeaning = function(word, data) {
      $http({
        method: "GET",
        url:
          "https://googledictionaryapi.eu-gb.mybluemix.net/?define=" +
          word +
          "&lang=en"
      }).then(
        function Done(res) {
          $scope.myData = res.data;
          $scope.statuscode = res.status;
          console.log($scope.myData.meaning.noun[0].definition);
        },
        function Err(res) {
          $scope.Word = res.statusText;
          // console.log(res.statusText);
        }
      );
    };
  })
  .component("app", {
    bindings: {},
    controller: "AppCtrl",
    templateUrl: "/templates/app.html"
  });
