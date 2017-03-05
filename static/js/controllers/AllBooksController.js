/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllBooksController', ['$scope', 'books', AllBooksController]);

    function AllBooksController($scope, books) {
        $scope.message = "All Books";
        $scope.books = books;
    }
}());