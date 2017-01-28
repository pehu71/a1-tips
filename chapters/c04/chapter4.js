angular.module('chapter4', [])

    .controller('ListCtrl', ['$route', 'bookFactory', function ($route, bookFactory) {
        this.h1 = 'List of books - the master view';
        this.books = bookFactory.books;
    }])

    .controller('DetailCtrl', ['$route', 'bookFactory', 'singleBookFilter', '$location', function ($route, bookFactory, singleBookFilter, $location) {
        this.h1 = 'Book detail';
        this.book = singleBookFilter(bookFactory.books, $route.current.pathParams['id']);
        this.routeInfo = $route.current;
        this.locationAbsUrl = $location.absUrl();
        this.locationHash = $location.hash();
        this.locationPath = $location.path();
        this.locationUrl = $location.url();
        this.locationSearch = $location.search();
    }]);