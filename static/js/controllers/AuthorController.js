/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AuthorController', ['$scope', 'author', AuthorController]);

    function AuthorController($scope, author) {
        $scope.message = "Author Details";
        $scope.author = author;
        $scope.hasBooks = true;
        $scope.author.fullname = author.last_name+", "+author.first_name;
        if ($scope.author.books.length == 0)
            $scope.hasBooks = false;
    }
}());