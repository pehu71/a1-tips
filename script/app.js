angular.module('app', ['ngRoute', 'directives', 'trans-directives', 'controllers', 'data-factories', 'filters', 'tsModule'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/welcome.html', controller: 'WelcomeCtrl as welcome'})
            .when('/list', {templateUrl: 'views/list.html', controller: 'ListCtrl as list'})
            .when('/detail/:id', {templateUrl: 'views/detail.html', controller: 'DetailCtrl as detail'})
            .when('/pipes', {templateUrl: 'views/pipes.html', controller: 'PipeCtrl as pipe'})
            .when('/component-directives', {templateUrl: 'views/component-directives.html', controller: 'DirectiveCtrl'})
            .when('/this', {templateUrl: 'views/this.html', controller: 'ThisCtrl as weird'})
            .when('/scope-inheritance', {templateUrl: 'views/scope-inheritance.html', controller: 'ScopeInheritanceCtrlParent'})
            .when('/array-notation', {templateUrl: 'views/array-notation.html', controller: 'ArrayNotationCtrl as notation'})
            .when('/mix-with-ts', {templateUrl: 'views/mix-with-ts.html', controller: 'SampleController as sample'})
            .when('/ngtransclude-directive', {templateUrl: 'views/ngtransclude-directive.html', controller: 'NgTransludeCtrl as ngt'});

        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }]);

angular.bootstrap(document, ['app']);
