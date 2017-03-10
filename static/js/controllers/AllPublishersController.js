/** Created by luisdeolpy on 04/03/2017.**/
(function(){
    angular.module('app')
        .controller('AllPublishersController', ['$scope', 'publishers', 'dataService', AllPublishersController]);

    function AllPublishersController($scope, publishers, dataService) {
        $scope.showForm = false;
        $scope.message = "All Publishers";
        $scope.publishers = publishers;
        $scope.publisher = {};

        $scope.add = function (){
            var publisher = $scope.publisher;
            dataService.postPublisher(publisher)
                .then(function(response){
                    $scope.showForm = false;
                    $scope.publishers.push(response);
                    $scope.publisher = {};
                })
        }
    }
}());