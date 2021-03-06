// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yifyApp', ['ionic'])

    .controller('mainController', function ($scope, $http) {
    // http://yts.re/api/list.json?sort=date&limit=10
    $scope.results = [];
    $scope.init = function () {
        //Call the API and get 10 max results sorted by Date in descending order
        $http.jsonp('http://yts.re/api/list.jsonp?sort=date&order=desc&limit=10' + '&callback=JSON_CALLBACK').success(function (data) {
            console.log(data);
            angular.forEach(data.MovieList, function (movie, index) {
                $scope.results.push(movie);
            });
        }).error(function (error) {
 
        });
        //Replace with a modal!!!
        $scope.info = function(result) {
            alert('Movie Info: ' + result.MovieTitleClean + " \n" + "Year: " + result.MovieYear + " \n" + "Quality: " +
                result.Quality + " \n" + "Genre: " + result.Genre + "\n" + "Rating: " + result.MovieRating);
        };
        //Probably needs an INTENT, fails to load because of hosts file blocking ads server
        $scope.download = function (result) {
            window.open(result.MovieUrl);  
        };
        $scope.share = function (result) {
            alert('Share Item: ' + result.MovieUrl);
        };
    };
        $scope.tasks = [];
})

function modalController($scope, $ionicModal) {
    // Create and load the Modal
    $ionicModal.fromTemplateUrl('modal-info.html', function(modal) {
        $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
    $scope.modal = modal;
    });
    
    $scope.openModal = function() {
    $scope.modal.show();
  };
    $scope.closeModal = function() {
    $scope.modal.hide();
  };
  
   //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  /* // Execute action on hide modal
  $scope.$on('modal.hide', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action 
  }); */
};


function TabCtrl($scope, $ionicTabsDelegate) {
    $scope.selectTabWithIndex = function (index) {
        $ionicTabsDelegate.select(index);
    }
};