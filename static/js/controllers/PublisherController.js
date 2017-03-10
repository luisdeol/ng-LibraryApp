/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('PublisherController', ['$scope', 'publisher', PublisherController]);

    function PublisherController($scope, publisher) {
        $scope.hasBooks = true;
        $scope.message = "Publisher Details";
        $scope.publisher = publisher;
        if ($scope.publisher.books.length == 0)
            $scope.hasBooks = false;
    }
}());