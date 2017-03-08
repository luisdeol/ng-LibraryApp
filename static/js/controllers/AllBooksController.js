/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllBooksController', ['$scope', 'books', 'dataService', '$http', AllBooksController]);

    function AllBooksController($scope, books, dataService, $http) {
        $scope.showForm = false;
        $scope.message = "All Books";
        $scope.books = books;
        $scope.book = {};
        $scope.authors = {};
        $scope.publishers = {};
        $scope.add = function(){
            var book = {
                title: $scope.book.title,
                isbn: $scope.book.isbn,
                publish_year: $scope.book.publish_year,
                author: $scope.book.author.id,
                publisher: $scope.book.publisher.id
            };
            $scope.book = book;
            $http.post('/api/books/', book)
                .then(function(response){
                    $scope.showForm = false;
                    $scope.books.push(response.data);
                    $scope.book.isbn = "";
                    $scope.book.title = "";
                    $scope.book.publish_year = "";
                    $scope.book.author = $scope.authors[0];
                    $scope.book.publisher = $scope.publishers[0];
                }, function(){
                    alert("something went wrong!");
                });
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