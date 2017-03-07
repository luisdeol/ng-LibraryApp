/**
 * Created by luisdeolpy on 05/03/2017.
 */
(function(){
    angular.module('app')
        .factory('dataService', ['$http', dataService]);

    function dataService($http) {

        return {
            getAllBooks: getAllBooks,
            getAllAuthors: getAllAuthors,
            getAllPublishers: getAllPublishers,
            getBook: getBook,
            getAuthor: getAuthor,
            getPublisher: getPublisher
        };

        function getAllBooks() {
            return $http.get('/api/books/')
                .then(function(response){
                    return response.data;
            });
        }

        function getAllAuthors() {
            return $http.get('/api/authors/')
                .then(function(response){
                    return response.data;
                })
        }

        function getAllPublishers(){
            return $http.get('/api/publishers/')
                .then(function(response){
                    return response.data;
                })
        }

        function getBook(id){
            return $http.get('/api/books/'+id+'/').
                then(function(response){
                    return response.data;
            })
        }

        function getAuthor(id){
            return $http.get('/api/authors/'+id+'/').
                then(function(response){
                    return response.data;
            })
        }

        function getPublisher(id){
            return $http.get('/api/publishers/'+id+'/').
                then(function(response){
                    return response.data;
            })
        }
    }
}());