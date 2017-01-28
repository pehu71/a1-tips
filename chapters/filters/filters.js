angular.module('filters', [])

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
    });
