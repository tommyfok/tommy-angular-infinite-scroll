#tommy-angular-infinite-scroll
Simple infinite scrolling for AngularJS

##Installation
1. With Bower :
   - `bower install --save tommy-angular-infinite-scroll`

   Or download `tommy-angular-infinite-scroll.js` manually

2. include `tommy-angular-infinite-scroll.js` after your `angular.js` file

3. adding `tommy.infinite-scroll` as a module dependency to your application

##Useage
###Binding
```html
<div tommy-infinite-scroll="MainCtrl.loadMore()"
     tommy-infinite-scroll-distance="1"
     tommy-infinite-scroll-disabled="MainCtrl.isLoadMoreDisabled">
</div>
```
###Note
- When scrolling __to the bottom of this element__ , execute `tommy-infinite-scroll`'s attribute.
- `tommy-infinite-scroll-distance` is used for preload the content before user scrolls to the bottom of the element. The unit of this attribute is 'screenHeight'. For example, if it's set to `1`, the container will preload `2 * screenHeight`'s content.
- Prevent executing `tommy-infinite-scroll`'s attribute by adding `tommy-infinite-scroll-disabled`
