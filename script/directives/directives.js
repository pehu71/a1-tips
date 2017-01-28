angular.module('directives', [])



    .directive('simpleDiOne', function ($location) {
        return {
            restrict: 'E',
            template: '<p>simpleDiOne directive - I will not survive uglyfication. Location path: {{path}}</p>',
            link: function ($scope) {
                $scope.path = $location.path();
            }
        }
    })

    .directive('simpleDiTwo', ['$location', function ($location) {
        return {
            restrict: 'E',
            template: '<p>simpleDiOne directive - I WILL survive uglyfication. Location path: {{path}}</p>',
            link: function ($scope) {
                $scope.path = $location.path();
            }
        }
    }]);


