/** Created by luisdeolpy on 04/03/2017.**/
(function(){
    angular.module('app')
        .controller('AllAuthorsController', ['$scope', 'authors', AllAuthorsController]);

    function AllAuthorsController($scope, authors) {
        $scope.showForm = false;
        $scope.message = "All Authors";
        $scope.authors = authors;
    }
}());