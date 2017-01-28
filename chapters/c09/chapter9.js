angular.module('chapter9', [])

    .controller('NgTransludeCtrl', function () {
        this.searchExpression = '';
    })

    .directive('simpleTransclude', function () {
        return {
            restrict: 'E',
            scope: {},
            transclude: true, // important here
            templateUrl: 'chapters/c09/simple-transclude.html',
            bindToController: {
                searchExp: '<'
            },
            controller: function () {
                this.list = ['Mats', 'Girish', 'Shankar', 'Ronak', 'Anicka'];
            },
            controllerAs: 'ctrl'
        }
    })

    .directive('multiSlotTransclude', function () {
        return {
            restrict: 'E',
            scope: {},
            // next line very important
            transclude: {
                'header': '?multiSlotTranscludeHeader',
                'footer': '?multiSlotTranscludeFooter'
            },
            templateUrl: 'chapters/c09/multi-slot-transclude.html',
            bindToController: {
                searchExp: '<'
            },
            controller: function () {
                this.list = ['Mats', 'Girish', 'Shankar', 'Ronak', 'Anicka'];
            },
            controllerAs: 'ctrl'
        }
    });
