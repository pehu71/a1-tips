angular.module('chapter9-1', [])

    .controller('TranscludeFnCtrl', function () {
        this.model = 123;
    })

    .directive('transcludeFnDemo', function () {
        return {
            transclude: true,
            templateUrl: 'chapters/c09.1/transclude-directive-template.html',
            link: function (scope, el, attrs, controller, transcludeFn) {

                // the recommended way - passing the attach function
                // as a parameter to the transclude function
                transcludeFn(scope, function (clone, scope) {
                    angular.element(document.querySelector('.content-of-transcludeFnDemo')).append(clone);
                }, el);
            }
        }
    })

    .directive('transcludeFnDemo2', function () {
        return {
            transclude: true,
            templateUrl: 'chapters/c09.1/transclude-directive-template2.html',
            link: function (scope, el, attrs, controller, transcludeFn) {

                // simpler but not recommended way
                angular.element(document.querySelector('.content-of-transcludeFnDemo2')).append(transcludeFn());
            }
        }
    })
;
// http://teropa.info/blog/2015/06/09/transclusion.html

