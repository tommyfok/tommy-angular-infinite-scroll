#tommy-angular-infinite-scroll
Simple infinite scrolling for AngularJS

##Installation
1. With Bower :
   - `bower install --save tommy-angular-infinite-scroll`

   Manually :
   - include `tommy-angular-infinite-scroll.js` after your `angular.js` file

2. adding `tommy-angular-infinite-scroll` as a module dependency to your application

##Useage
###Binding
```html
<div tommy-infinite-scroll="MainCtrl.loadMore()"
     tommy-infinite-scroll-disabled="MainCtrl.isLoadMoreDisabled">
</div>
```
###Note
- When scrolling to the bottom of this element, execute `tommy-infinite-scroll`'s attribute.
- Prevent executing `tommy-infinite-scroll`'s attribute by adding `tommy-infinite-scroll-disabled`
