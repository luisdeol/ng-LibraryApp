/**
 * Created by luisdeolpy on 04/03/2017.
 */
(function(){
    var app = angular.module('app', ['ui.router']);

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
                    controller: 'AllAuthorsController'
                })
            .state('publishers', {
                    url: '/publishers',
                    templateUrl: '/static/html/AllPublishers.html',
                    controller: 'AllPublishersController'
                })
            .state('bookDetails', {
                    url: '/books/:id',
                    templateUrl: '/static/html/BookDetails.html',
                    controller: 'BookController'
                })
            .state('authorDetails', {
                    url: '/authors/:id',
                    templateUrl: '/static/html/AuthorDetails.html',
                    controller: 'AuthorController'
                })
            .state('publisherDetails', {
                    url: '/publishers/:id',
                    templateUrl: '/static/html/PublisherDetails.html',
                    controller: 'PublisherController'
                });
    }])
}());
