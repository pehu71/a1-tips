angular.module('app', ['ngRoute'])

    .controller('WelcomeCtrl', ['$route', function ($route) {
        this.h1 = 'Welcome page';
    }])

    .controller('ListCtrl', ['$route', 'bookFactory', function ($route, bookFactory) {
        this.h1 = 'List of books';
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
    }])

    .controller('PipeCtrl', ['findKeyFilter', '$filter', function (findKeyFilter, $filter) {
        this.companies = [
            {
                key: 'HF',
                value: 'Hafslund'
            },
            {
                key: 'FO',
                value: 'Fortum'
            },
            {
                key: 'VTF',
                value: 'Vattenfall'
            }
        ];
        this.company = findKeyFilter(this.companies, 'FO', 'controller 1');
        this.sameCompany = $filter('findKey')(this.companies, 'FO', 'controller 2');
        this.textModel = '';
    }])

    .controller('DirectiveCtrl', function () {})
    
    .controller('ThisCtrl', ['$http', function ($http) {
        var self = this;

        $http.get('data/books.json')
            .then(function (res) {
                self.books = res.data.books; // todo: use "this" instead of "self"
            })
    }])

    .factory('bookFactory', function () {
        return {
            books: [
                {
                    "id": 1,
                    "name": "The Crime and the Punishment",
                    "author": "Fyodor Dostoyevsky"
                },
                {
                    "id": 2,
                    "name": "Slaughterhouse 5",
                    "author": "Kurt Vonnegut"
                },
                {
                    "id": 3,
                    "name": "The Post Office",
                    "author": "Charles Bukowski"
                }
            ]
        }
    })

    .filter('singleBook', function () {
        return function (input, id) {
            var result = null;
            for (var i = 0; i < input.length; i++) {
                if (input[i]['id'] == id) {
                    result = input[i];
                }
            }
            return result;
        }
    })

    .filter('findKey', function () {
        return function (input, key, sender) {
            console.log(sender);
            var result = '-';
            for (var i = 0; i < input.length; i++) {
                if (input[i]['key'] == key) {
                    result = input[i]['value']
                }
            }
            return result;
        }
    })

    .directive('myComponentDirective', function () {
        return {
            restrict: 'E', // must be restricted to Element
            scope: {}, // must have isolated scope

            bindToController: { // must bind to controller rather then to $scope
                someParam: '='
            },

            templateUrl: 'views/my-cmp.html',

            controller: function() { // must have its own controller - manipulate directive template via controller, not scope
                this.someText = 'I am component directive - you fucking click me!';

                this.onClick = function () {
                    alert('clicked');
                }
            },

            controllerAs: 'ctrl' // must declare controllerAs - use it in component template
        };
    })

    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/welcome.html', controller: 'WelcomeCtrl as welcome'})
            .when('/list', {templateUrl: 'views/list.html', controller: 'ListCtrl as list'})
            .when('/detail/:id', {templateUrl: 'views/detail.html', controller: 'DetailCtrl as detail'})
            .when('/pipes', {templateUrl: 'views/pipes.html', controller: 'PipeCtrl as pipe'})
            .when('/component-directives', {templateUrl: 'views/component-directives.html', controller: 'DirectiveCtrl'})
            .when('/this', {templateUrl: 'views/this.html', controller: 'ThisCtrl as weird'});

        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('');
    }]);

angular.bootstrap(document, ['app']);
