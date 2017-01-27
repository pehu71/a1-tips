angular.module('trans-directives', [])

.directive('simpleTransclude', function () {
    return {
        restrict: 'E',
        scope: {},
        transclude: true, // important here
        templateUrl: 'views/simple-transclude.html',
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
        templateUrl: 'views/multi-slot-transclude.html',
        bindToController: {
            searchExp: '<'
        },
        controller: function () {
            this.list = ['Mats', 'Girish', 'Shankar', 'Ronak', 'Anicka'];
        },
        controllerAs: 'ctrl'
    }
});
