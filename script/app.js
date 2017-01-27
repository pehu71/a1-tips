angular.module('app', ['ngRoute', 'directives', 'trans-directives', 'controllers', 'data-factories', 'filters',
    'tsModule', 'capital-letters-validator', 'sample-components'])

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
            .when('/ngtransclude-directive', {templateUrl: 'views/ngtransclude-directive.html', controller: 'NgTransludeCtrl as ngt'})
            .when('/jasmine-tests', {templateUrl: 'views/jasmine-tests.html', controller: 'JasmineTestCtrl as jasmine'})
            .when('/custom-validators', {templateUrl: 'views/custom-validators.html', controller: 'CustomValidatorsCtrl as val'})
            .when('/cmp-api-intro', {templateUrl: 'views/component-api.html', controller: 'CmpApiCtrl as cmp'})
            .when('/sin-list', {template: '<sin-list sins="$resolve.sins" list-api="$resolve.listApi" on-delete="$resolve.onDeleteNotification(id)"></sin-list>',
                resolve: {
                    sins: function () { return [{id: 0, title: 'gluttony', severity: 'light'}, {id: 1, title: 'adultery', severity: 'deadly'}]},
                    listApi: function () { return {}},
                    onDeleteNotification: function () { return function (id) { alert('refused deletion of: ' + id) }}
                }
            });

        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }]);

angular.bootstrap(document, ['app']);
