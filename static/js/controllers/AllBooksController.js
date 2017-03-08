/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllBooksController', ['$scope', 'books', 'dataService', AllBooksController]);

    function AllBooksController($scope, books, dataService) {
        $scope.showForm = false;
        $scope.message = "All Books";
        $scope.books = books;
        $scope.book = {};
        $scope.authors = {};
        $scope.publishers = {};
        $scope.add = function(){

        };
        dataService.getAllAuthors().then(function(response){
            $scope.book.author = response[0];
            $scope.authors = response;
        });
        dataService.getAllPublishers().then(function(response){
            $scope.book.publisher  = response[0];
            $scope.publishers = response;
        });
    }
}());