angular.module('tommy.infinite-scroll', [])

.directive('tommyInfiniteScroll', function ($timeout) {
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
      var distance = angular.isNumber(parseInt($scope.distance))
                     ? $scope.distance + 1
                     : 1;
          win = angular.element(window);

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

        if (getElemRect().bottom - document.body.scrollTop < getWindowSize().height * distance){
          $scope.reachAction();
        }
      }

      $timeout(checkBound, 0);
      win.on('scroll resize', checkBound);

      $scope.$on('$destroy', function () {
        win.off('scroll resize', checkBound);
      });
    }
  };
});
