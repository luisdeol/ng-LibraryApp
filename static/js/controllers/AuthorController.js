/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AuthorController', ['$scope', '$log', 'author', AuthorController]);

    function AuthorController($scope, $log, author) {
        $scope.message = "Author Details";
        $scope.author = author;
        $log.log($scope.author.books);
        $scope.author.fullname = author.last_name+", "+author.first_name;
    }
}());