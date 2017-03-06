/** Created by luisdeolpy on 04/03/2017.**/
(function(){
    angular.module('app')
        .controller('AllPublishersController', ['$scope', 'publishers', AllPublishersController]);

    function AllPublishersController($scope, publishers) {
        $scope.showForm = false;
        $scope.message = "All Publishers";
        $scope.publishers = publishers;
    }
}());