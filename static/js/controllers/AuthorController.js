/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AuthorController', ['$scope', AuthorController]);

    function AuthorController($scope) {
        $scope.message = "Author Controller";
    }
}());