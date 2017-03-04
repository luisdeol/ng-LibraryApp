/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllBooksController', ['$scope', AllBooksController]);

    function AllBooksController($scope) {
        $scope.message = "All Books Controller";
    }
}());