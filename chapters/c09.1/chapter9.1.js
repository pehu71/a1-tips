angular.module('chapter9-1', [])

    .controller('TranscludeFnCtrl', function () {
        this.model = 123;
    })

    .directive('transcludeFnDemo', function () {
        return {
            transclude: true,
            require: 'ngModel',
            template: '<div><span class="label label-primary">Original content from directive template</span><ng-transclude></ng-transclude></div>',
            link: function (scope, element, attrs, controller, transcludeFn) {
                transcludeFn(scope, function (clone, scope) {
                    console.log(clone);
                    console.log(scope);
                }, element);
            }
        }
    });
// todo:https://docs.angularjs.org/api/ng/service/$compile#-link-

