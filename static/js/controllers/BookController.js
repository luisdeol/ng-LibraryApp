/**
 * Created by luisdeolpy on 04/03/2017.
 */
/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('BookController', ['$scope', 'book', BookController]);

    function BookController($scope, book) {
        $scope.message = "Book Details";
        $scope.book = book;
    }
}());