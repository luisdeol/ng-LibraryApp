/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    var app = angular.module('app', ['ui.router'])
        .run(['$http', run]);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/books');
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: '/static/html/AllBooks.html',
                controller: 'AllBooksController',
                resolve: {
                    books: function(dataService){
                        return dataService.getAllBooks();
                    }
                }
            })
            .state('authors', {
                url: '/authors',
                templateUrl: '/static/html/AllAuthors.html',
                controller: 'AllAuthorsController',
                resolve: {
                    authors: function(dataService){
                        return dataService.getAllAuthors();
                    }
                }
            })
            .state('publishers', {
                url: '/publishers',
                templateUrl: '/static/html/AllPublishers.html',
                controller: 'AllPublishersController',
                resolve: {
                    publishers: function(dataService){
                        return dataService.getAllPublishers();
                    }
                }
            })
            .state('bookDetails', {
                    url: '/books/:id',
                    templateUrl: '/static/html/BookDetails.html',
                    controller: 'BookController',
                    resolve: {
                        book: function(dataService, $stateParams){
                            return dataService.getBook($stateParams.id);
                        }
                    }
                })
            .state('authorDetails', {
                    url: '/authors/:id',
                    templateUrl: '/static/html/AuthorDetails.html',
                    controller: 'AuthorController',
                    resolve: {
                        author: function(dataService, $stateParams){
                            return dataService.getAuthor($stateParams.id);
                        }
                    }
                })
            .state('publisherDetails', {
                    url: '/publishers/:id',
                    templateUrl: '/static/html/PublisherDetails.html',
                    controller: 'PublisherController',
                    resolve: {
                        publisher: function(dataService, $stateParams){
                            return dataService.getPublisher($stateParams.id);
                        }
                    }
                });
    }]);
    function run($http){
        $http.defaults.xsrfHeaderName='X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
}());
