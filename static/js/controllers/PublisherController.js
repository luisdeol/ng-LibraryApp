/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('PublisherController', ['$scope', PublisherController]);

    function PublisherController($scope) {
        $scope.message = "Publisher Controller";
    }
}());