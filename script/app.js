angular.module('app', ['ngRoute', 'directives', 'controllers', 'data-factories', 'filters',
    'tsModule', 'capital-letters-validator', 'chapter1', 'chapter2', 'chapter3',
    'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8', 'chapter9'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {templateUrl: 'chapters/c01/welcome.html', controller: 'WelcomeCtrl as welcome'})
            .when('/this', {templateUrl: 'chapters/c02/this.html', controller: 'ThisCtrl as weird'})
            .when('/array-notation', {templateUrl: 'chapters/c03/array-notation.html', controller: 'ArrayNotationCtrl as notation'})
            .when('/list', {templateUrl: 'chapters/c04/list.html', controller: 'ListCtrl as list'})
            .when('/detail/:id', {templateUrl: 'chapters/c04/detail.html', controller: 'DetailCtrl as detail'})
            .when('/pipes', {templateUrl: 'chapters/c05/pipes.html', controller: 'PipeCtrl as pipe'})
            .when('/scope-inheritance', {templateUrl: 'chapters/c06/scope-inheritance.html', controller: 'ScopeInheritanceCtrlParent'})
            .when('/component-directives', {templateUrl: 'chapters/c07/component-directives.html', controller: 'DirectiveCtrl'})
            .when('/cmp-api-intro', {templateUrl: 'chapters/c08/component-api.html', controller: 'CmpApiCtrl as cmp'})
            .when('/sin-list', {template: '<sin-list sins="$resolve.sins" list-api="$resolve.listApi" on-delete="$resolve.onDeleteNotification(id)"></sin-list>',
                resolve: {
                    sins: function () { return [{id: 0, title: 'gluttony', severity: 'light'}, {id: 1, title: 'adultery', severity: 'deadly'}]},
                    listApi: function () { return {}},
                    onDeleteNotification: function () { return function (id) { alert('refused deletion of: ' + id) }}
                }
            })
            .when('/ngtransclude-directive', {templateUrl: 'chapters/c09/ngtransclude-directive.html', controller: 'NgTransludeCtrl as ngt'})
            .when('/mix-with-ts', {templateUrl: 'views/mix-with-ts.html', controller: 'SampleController as sample'})

            .when('/jasmine-tests', {templateUrl: 'views/jasmine-tests.html', controller: 'JasmineTestCtrl as jasmine'})
            .when('/custom-validators', {templateUrl: 'views/custom-validators.html', controller: 'CustomValidatorsCtrl as val'})

;

        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }]);

angular.bootstrap(document, ['app']);
