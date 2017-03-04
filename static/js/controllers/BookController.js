/**
 * Created by luisdeolpy on 04/03/2017.
 */
/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('BookController', ['$scope', BookController]);

    function BookController($scope) {
        $scope.message = "Book Controller";
    }
}());