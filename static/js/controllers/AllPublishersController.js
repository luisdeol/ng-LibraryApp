/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    angular.module('app')
        .controller('AllPublishersController', ['$scope', AllPublishersController]);

    function AllPublishersController($scope) {
        $scope.message = "All Publishers Controller";
    }
}());