/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('PublisherController', ['$scope', 'publisher', PublisherController]);

    function PublisherController($scope, publisher) {
        $scope.message = "Publisher Details";
        $scope.publisher = publisher;
    }
}());