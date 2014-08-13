angular.module('tommy.infinite-scroll', [])

.directive('tommyInfiniteScroll', function ($interval) {
  return {
    restrict: 'AE',
    scope: {
      // use `&` to store value as a function body
      // use `@` to store value as a string
      reachAction: '&tommyInfiniteScroll',
      noMoreAction: '=tommyInfiniteScrollDisabled',
      distance: '=tommyInfiniteScrollDistance'
    },
    link: function ($scope, $element, $attrs) {
      var distance = angular.isNumber($scope.distance)
                     ? $scope.distance
                     : 0;
      function getWindowSize () {
        return {
          width: window.innerWidth
                 || document.documentElement.clientWidth
                 || document.body.clientWidth,
          height: window.innerHeight
                  || document.documentElement.clientHeight
                  || document.body.clientHeight
        };
      }

      function getElemRect () {
        return $element[0].getBoundingClientRect();
      }

      function checkBound () {
        if (!!$scope.noMoreAction) {
          return;
        }

        if (getElemRect().bottom - document.body.scrollTop < getWindowSize().height * (1 + distance)){
          $scope.reachAction();
        }
      }

      // use `$interval` for auto $apply
      var timer = $interval(checkBound, 200);

      $scope.$on('$destroy', function () {
        $interval.cancel(timer);
      });
    }
  };
});
