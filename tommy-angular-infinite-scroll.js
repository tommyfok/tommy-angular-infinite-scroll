angular.module('tommy-angular-infinite-scroll', [])

.directive('tommyInfiniteScroll', function () {
  return {
    restrict: 'AE',
    scope: {
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
          angular.element(window).off('resize', checkBound);
          angular.element(window).off('scroll', checkBound);
          return;
        }

        if (getElemRect().bottom - document.body.scrollTop < getWindowSize().height){
          $scope.reachAction();
        }
      };

      checkBound(); // init
      angular.element(window).on('resize', checkBound);
      angular.element(window).on('scroll', checkBound);
    }
  };
});
