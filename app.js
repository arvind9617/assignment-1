(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.msgClass = "";
        $scope.borderClass = "";

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');
            if (items.length === 0 || $scope.lunchItems.trim() === "") {
                $scope.message = "Please enter data first!";
                $scope.msgClass = "red-text";
                $scope.borderClass = "red-border";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.msgClass = "green-text";
                $scope.borderClass = "green-border";
            } else {
                $scope.message = "Too much!";
                $scope.msgClass = "green-text";
                $scope.borderClass = "green-border";
            }
        };
    }
})();
