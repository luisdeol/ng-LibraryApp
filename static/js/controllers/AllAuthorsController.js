/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllAuthorsController', ['$scope', AllAuthorsController]);

    function AllAuthorsController($scope) {
        $scope.message = "All Authors Controller";
    }
}());