angular.module('tommy-angular-infinite-scroll', [])

.directive('tommyInfiniteScroll', function ($timeout) {
  return {
    restrict: 'AE',
    scope: {
      // use `&` to store value as a function body
      reachAction: '&tommyInfiniteScroll',
      noMoreAction: '=tommyInfiniteScrollDisabled'
    },
    link: function ($scope, $element, $attrs) {
      var getWindowSize = function () {
        return {
          width: window.innerWidth
                 || document.documentElement.clientWidth
                 || document.body.clientWidth,
          height: window.innerHeight
                  || document.documentElement.clientHeight
                  || document.body.clientHeight
        };
      };

      var getElemRect = function () {
        return $element[0].getBoundingClientRect();
      };

      var checkBound = function () {
        if (!!$scope.noMoreAction) {
          return;
        }

        if (getElemRect().bottom - document.body.scrollTop < getWindowSize().height){
          $scope.reachAction();
        }
      };

      // use `$timeout` for auto $apply
      $timeout(checkBound, 0);
      angular.element(window).on('resize', checkBound);
      angular.element(window).on('scroll', checkBound);
    }
  };
});
