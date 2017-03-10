/** Created by luisdeolpy on 04/03/2017.**/
(function(){
    angular.module('app')
        .controller('AllAuthorsController', ['$scope', 'authors', '$http', 'dataService', AllAuthorsController]);

    function AllAuthorsController($scope, authors, $http, dataService) {
        $scope.showForm = false;
        $scope.message = "All Authors";
        $scope.authors = authors;

        $scope.add = function(){
            var author = $scope.author;
            dataService.postAuthor(author)
                .then(function(response){
                    $scope.authors.push(response);
                    $scope.showForm = false;
                    $scope.author = {};
                });
        }
    }
}());