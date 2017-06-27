!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.register=function(e,i){t._renders[e]=i},t.getRenderInstance=function(e){var i=t._renders[e];if(!i)throw new Error("Missing render : "+e);return new i},t.prototype._sign=function(t){return t=+t,0===t||isNaN(t)?0:t>0?1:-1},t}();n._renders={},e.default=n},function(t,e,i){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t};Object.defineProperty(e,"__esModule",{value:!0}),i(2);var s=i(3),r=i(0),o=i(4),a=i(5),c=i(6),h=i(7),_=i(8);r.default.register("slide",o.default),r.default.register("rotate",a.default),r.default.register("flip",c.default),r.default.register("card",h.default),r.default.register("fade",_.default);var u,d=function(){},f=(document.createElement("div"),{X:"Y",Y:"X"});!function(t){t[t.Forward=-1]="Forward",t[t.Nonward=0]="Nonward",t[t.Backward=1]="Backward"}(u||(u={}));var p=function(){function t(e){e=n({},t.DefaultOptions,e),e.transition=n({},t.DefaultOptions.transition,e.transition),this._$container=e.container,this._debug=e.debug,this._data=e.data,this._axis=e.isVertical?"Y":"X",this._isLoop=e.isLoop,this._initIndex=e.initIndex,this._frr=e.frr,this._keepDefaultClasses=e.keepDefaultClass,this._sideLength="X"===this._axis?this._$container.clientWidth:this._$container.clientHeight,this._transition=e.transition,this._listeners={};for(var i=0,s=t.Events;i<s.length;i++){var r=s[i],o=r.replace(/^\w{1}/,function(t){return t.toUpperCase()}),a=e["on"+o];"function"==typeof a&&this.on(r,a)}this._sliding=!1,this._moving=!1,this._pageChange=!1,this._start={X:0,Y:0},this._end={X:0,Y:0},this._offset={X:0,Y:0},this.log=this._debug?console.log.bind(window.console):d,this._bindEvents(),this._initRender()}return t.prototype._bindEvents=function(){this._$container.addEventListener(t.Device.startEvent,this),this._$container.addEventListener(t.Device.moveEvent,this),window.addEventListener(t.Device.endEvent,this),window.addEventListener(t.Device.resizeEvent,this,!1)},t.prototype._unbindEvents=function(){this._$container.removeEventListener(t.Device.startEvent,this),this._$container.removeEventListener(t.Device.moveEvent,this),window.removeEventListener(t.Device.endEvent,this),window.removeEventListener(t.Device.resizeEvent,this,!1)},t.prototype.handleEvent=function(e){switch(e.type){case"mousedown":if(0!==e.button)break;case"touchstart":this._keepDefaultHandler(e),this._startHandler(e);break;case t.Device.moveEvent:this._keepDefaultHandler(e),this._moveHandler(e);break;case t.Device.endEvent:case t.Device.cancelEvent:this._endHandler(e);break;case t.Device.resizeEvent:this._resizeHandler(e)}},t.prototype._keepDefaultHandler=function(t){if(!t.target||!/^(input|textarea|a|select)$/i.test(t.target.tagName)){for(var e=this._keepDefaultClasses,i=0,n=e;i<n.length;i++){var s=n[i];if(t.target.classList.contains(s))return}t.preventDefault()}},t.prototype._startHandler=function(e){this._sliding||(this._moving=!0,this.log("start"),this._startTime=(new Date).getTime(),this._start.X=t.Device.hasTouch?e.targetTouches[0].pageX:e.pageX,this._start.Y=t.Device.hasTouch?e.targetTouches[0].pageY:e.pageY,this._transition=n({},this._transition,this._currentPage.transition),this.fire("swipeBeforeStart"))},t.prototype._moveHandler=function(e){if(!this._sliding&&this._moving&&(this.log("moving"),this._end.X=t.Device.hasTouch?e.targetTouches[0].pageX:e.pageX,this._end.Y=t.Device.hasTouch?e.targetTouches[0].pageY:e.pageY,this._offset={X:this._end.X-this._start.X,Y:this._end.Y-this._start.Y},!(Math.abs(this._offset[this._axis])<this._frr||(this._offset[this._axis]<0?(this._moveDirection=u.Forward,this._activePage=this._currentPage.next):this._offset[this._axis]>0?(this._moveDirection=u.Backward,this._activePage=this._currentPage.prev):(this._moveDirection=u.Nonward,this._activePage=document.createElement("div")),(void 0===this._lastDirection||this._moveDirection*this._lastDirection<0)&&this.fire("swipeStart"),this._lastDirection=this._moveDirection,this._offset[this._axis]=this._offset[this._axis]-this._moveDirection*this._frr,0===this._transition.duration||this._activePage===document.createElement("div")||void 0!==this._transition.direction&&this._transition.direction!==this._moveDirection)))){this._pageChange=!0;var i={Forward:20,Backward:this._sideLength-20},n=u[this._moveDirection];if(this._moveDirection*this._end[this._axis]>this._moveDirection*i[n]){var s=this._moveDirection===u.Forward?"<--- near edge":"near edge ---\x3e";this.log(s),this._endHandler()}this.render()}},t.prototype._endHandler=function(t){if(!this._sliding&&this._moving&&(this._moving=!1,this.log("end"),!(this._transition.direction&&this._transition.direction!==this._moveDirection||this._transition.direction===u.Nonward))){this._endTime=(new Date).getTime();var e=this._endTime-this._startTime,i=e>300?this._sideLength/3:14,n=(this._offset[this._axis],Math.abs(this._offset[this._axis])),s=Math.abs(this._offset[f[this._axis]]),r=s<n;n>=i&&r?(this._pageChange=!0,this._swipeTo()):(this._moveDirection=-1*this._moveDirection,this._pageChange=!1,this._swipeTo(),this.fire("swipeRestore"))}},t.prototype._resizeHandler=function(t){},t.prototype._swipeTo=function(){function t(r){null===i&&(i=r),this._offset[this._axis]=n+(r-i)*this._moveDirection*s,this._moveDirection*this._offset[this._axis]<this._moveDirection*a?(this.log(o+" rendering..."),this.render(),e(t.bind(this))):(this._offset[this._axis]=a,this.render())}if(!this._sliding&&this._activePage!==document.createElement("div")){this._sliding=!0;var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame,i=null,n=this._offset[this._axis],s=this._sideLength/this._transition.duration,r={Forward:{unSwipe:0,swipe:-this._sideLength},Backward:{unSwipe:0,swipe:this._sideLength},Nonward:0},o=this._pageChange?"swipe":"unSwipe",a=r[u[this._moveDirection]][o]||0;e(t.bind(this))}},t.prototype._initRender=function(){var t=this;this._$swiper=document.createElement("div"),this._$swiper.classList.add("lg-swiper"),this._$pages=this._data.map(function(e,i){var n=document.createElement("div");return n.classList.add("lg-swiper-page"),"string"==typeof e.content?n.innerHTML=e.content:n.appendChild(e.content),n.index=i,n.transition=e.transition,t._initIndex===i&&(n.classList.add("current"),t._currentPage=n),t._$swiper.appendChild(n),n}),this._$pages.forEach(function(e,i,n){var s=t._isLoop?(n.length+i-1)%n.length:i-1,r=t._isLoop?(n.length+i+1)%n.length:i+1;e.prev=t._$pages[s]||document.createElement("div"),e.next=t._$pages[r]||document.createElement("div")}),this._$container.style.overflow="hidden",this._$container.appendChild(this._$swiper)},t.prototype.on=function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this},t.prototype.off=function(t,e){if(this._listeners[t]){var i=this._listeners[t].indexOf(e);i>-1&&this._listeners[t].splice(i,1)}return this},t.prototype.fire=function(t){if(this._listeners[t])for(var e=Array.prototype.slice.call(arguments,1),i=0,n=this._listeners[t];i<n.length;i++){var s=n[i];s.apply(this,e)}return this},t.prototype.render=function(){var t=this._axis,e=this._offset[t],i=document.querySelector(".active");i&&(i.classList.remove("active"),i.style.cssText=""),this._currentPage.style.cssText="",this._activePage.style.cssText="",this.log("offset : "+e);var n=r.default.getRenderInstance(this._currentPage.transition.name),s=n.doRender(this);this._activePage.classList.add("active"),this._$container.style.cssText=s.container,this._$swiper.style.cssText=s.swiper,this._currentPage.style.cssText=s.currentPage,this._activePage.style.cssText=s.activePage,!1===this._pageChange&&0===e&&(this._$container.style.cssText="",this._$swiper.style.cssText="",this._currentPage.style.cssText="",this._activePage.style.cssText="",this._activePage.classList.remove("active"),this._activePage=document.createElement("div"),this._sliding=!1,this._pageChange=!1,this._lastDirection=void 0),!0===this._pageChange&&e===this._moveDirection*this._sideLength&&(this._$container.style.cssText="",this._$swiper.style.cssText="",this._currentPage.style.cssText="",this._activePage.style.cssText="",this._currentPage.classList.remove("current"),this._activePage.classList.remove("active"),this._activePage.classList.add("current"),this._currentPage=this._activePage,this._activePage=document.createElement("div"),this._offset.X=0,this._offset.Y=0,this._sliding=!1,this._pageChange=!1,this._lastDirection=void 0)},t}();p.Events=["initialize","initialized","renderComplete","swipeBeforeStart","swipeStart","swipeChange","swipeChanged","swipeRestore","swipeRestored","destroy"],p.Device=new s.Device(window),p.DefaultOptions={container:document.body,data:[],debug:!1,isVertical:!0,isLoop:!1,initIndex:0,frr:10,keepDefaultClass:[],transition:{name:"slide",duration:800}},e.Swiper=p},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.hasTouch=!!("ontouchstart"in t&&!/Mac OS X /.test(t.navigator.userAgent)||t.DocumentTouch&&document instanceof t.DocumentTouch),this.startEvent=this.hasTouch?"touchstart":"mousedown",this.moveEvent=this.hasTouch?"touchmove":"mousemove",this.endEvent=this.hasTouch?"touchend":"mouseup",this.cancelEvent=this.hasTouch?"touchcancel":"mouseout",this.resizeEvent="onorientationchange"in t?"orientationchange":"resize"}return t}();e.Device=n},function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.doRender=function(t){var e=t._axis,i=t._offset[e],n=t._sideLength;return{currentPage:"-webkit-transform: translateZ(0) translate"+e+"("+i+"px)",activePage:"-webkit-transform: translateZ(0) translate"+e+"("+(i-this._sign(i)*n)+"px)"}},e}(s.default);e.default=r},function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.doRender=function(t){var e=t._axis,i=t._offset[e],n=t._sideLength,s=r[e],o=this._sign(i),a="Y"===e?-1:1;return{container:"-webkit-perspective:"+4*n,swiper:"-webkit-transform-style:preserve-3d",currentPage:"-webkit-transform: rotate"+s+"("+90*a*i/n+"deg) translateZ("+.889*n/2+"px) scale(0.889)",activePage:"-webkit-transform: rotate"+s+"("+90*a*(i/n-o)+"deg) translateZ("+.889*n/2+"px) scale(0.889)"}},e}(s.default);e.default=o},function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.doRender=function(t){var e=t._axis,i=t._offset[e],n=t._sideLength,s=(t._moveDirection,r[e]),o=(t._pageChange,"Y"===e?-1:1),a="-webkit-backface-visibility:hidden;";return{container:"-webkit-perspective:"+4*n,swiper:"-webkit-transform-style:flat",currentPage:a+"-webkit-transform: translateZ("+n/2+"px) rotate"+s+"("+180*o*i/n+"deg) scale(0.875)",activePage:a+"-webkit-transform: translateZ("+n/2+"px) rotate"+s+"("+180*o*(i/n+1)+"deg) scale(0.875);z-index: 7;"}},e}(s.default);e.default=o},function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.doRender=function(t){var e=t._axis,i=t._offset[e],n=t._sideLength;t._pageChange;return{currentPage:"-webkit-transform: translateZ(0) scale"+r[e]+"("+(1-.2*Math.abs(i/n))+") translate"+e+"("+i+"px)",activePage:"-webkit-transform: translateZ(0) translate"+e+"("+(i-this._sign(i)*n)+"px)"}},e}(s.default);e.default=o},function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.doRender=function(t){var e=t._axis,i=t._offset[e],n=t._sideLength;return{currentPage:"opacity: "+(1-Math.abs(i/n)),activePage:"opacity: "+Math.abs(i/n)}},e}(s.default);e.default=r}])});