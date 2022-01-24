webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),i=r(o),a=n(31),s=n(164),u=n(178),c=r(u),p=n(179),d=r(p),l=n(180),f=n(181),h=(n(191),n(199));n(260),n(261),n(262),navigator.serviceWorker.register("../sw.js"),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(e){e.pushManager.subscribe({userVisibleOnly:!0}).then(function(e){console.log("endpoint:",e.endpoint),document.getElementById("endpoint-container").innerHTML=e.endpoint})})["catch"](function(e){console.log("Service Worker error",e)});var y=(0,s.createStore)(d["default"],(0,s.applyMiddleware)(c["default"]));window.addEventListener("beforeinstallprompt",function(e){console.log("beforeinstallprompt Event fired"),e.userChoice.then(function(e){console.log(e.outcome),"dismissed"==e.outcome?console.log("User cancelled home screen install"):console.log("User added to home screen")})}),document.querySelectorAll(".mdl-tabs__tab-bar a")[0].addEventListener("click",function(){location.hash="one-panel"}),document.querySelectorAll(".mdl-tabs__tab-bar a")[1].addEventListener("click",function(){location.hash="two-panel"}),document.querySelectorAll(".mdl-tabs__tab-bar a")[2].addEventListener("click",function(){location.hash="three-panel"}),window.addEventListener("DOMContentLoaded",function(){window.setTimeout(v,500),(0,a.render)(i["default"].createElement(h.Router,{history:h.hashHistory},i["default"].createElement(h.Route,{path:"/three-panel",component:function(){return i["default"].createElement(f.Provider,{store:y},i["default"].createElement(l.Card,null))}})),document.getElementById("card-container"))});var v=function(){var e=location.hash.split("?")[0];switch(e){case"#one-panel":document.querySelectorAll(".mdl-tabs__tab-bar a")[0].click();break;case"#two-panel":document.querySelectorAll(".mdl-tabs__tab-bar a")[1].click();break;case"#three-panel":document.querySelectorAll(".mdl-tabs__tab-bar a")[2].click()}};window.onhashchange=v},164:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var o=n(165),i=r(o),a=n(173),s=r(a),u=n(175),c=r(u),p=n(176),d=r(p),l=n(177),f=r(l),h=n(174);r(h);t.createStore=i["default"],t.combineReducers=s["default"],t.bindActionCreators=c["default"],t.applyMiddleware=d["default"],t.compose=f["default"]},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){function r(){m===v&&(m=v.slice())}function i(){return y}function s(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),m.push(e),function(){if(t){t=!1,r();var n=m.indexOf(e);m.splice(n,1)}}}function p(e){if(!(0,a["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,y=h(y,e)}finally{b=!1}for(var t=v=m,n=0;n<t.length;n++)t[n]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,p({type:c.INIT})}function l(){var e,t=s;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[u["default"]]=function(){return this},e}var f;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,y=t,v=[],m=v,b=!1;return p({type:c.INIT}),f={dispatch:p,subscribe:s,getState:i,replaceReducer:d},f[u["default"]]=l,f}t.__esModule=!0,t.ActionTypes=void 0,t["default"]=o;var i=n(166),a=r(i),s=n(170),u=r(s),c=t.ActionTypes={INIT:"@@redux/INIT"}},166:function(e,t,n){function r(e){if(!i(e)||l.call(e)!=a)return!1;var t=o(e);if(null===t)return!0;var n=p.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==d}var o=n(167),i=n(169),a="[object Object]",s=Function.prototype,u=Object.prototype,c=s.toString,p=u.hasOwnProperty,d=c.call(Object),l=u.toString;e.exports=r},167:function(e,t,n){var r=n(168),o=r(Object.getPrototypeOf,Object);e.exports=o},168:function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},169:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},170:function(e,t,n){e.exports=n(171)},171:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(172),i=r(o),a=void 0;"undefined"!=typeof e?a=e:"undefined"!=typeof window&&(a=window);var s=(0,i["default"])(a);t["default"]=s}).call(t,function(){return this}())},172:function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:s.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function a(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var a=t[r];"function"==typeof e[a]&&(n[a]=e[a])}var s,u=Object.keys(n);try{i(n)}catch(c){s=c}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(s)throw s;for(var r=!1,i={},a=0;a<u.length;a++){var c=u[a],p=n[c],d=e[c],l=p(d,t);if("undefined"==typeof l){var f=o(c,t);throw new Error(f)}i[c]=l,r=r||l!==d}return r?i:e}}t.__esModule=!0,t["default"]=a;var s=n(165),u=n(166),c=(r(u),n(174));r(c)},174:function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},175:function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var a=r[i],s=e[a];"function"==typeof s&&(o[a]=n(s,t))}return o}t.__esModule=!0,t["default"]=r},176:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var a=e(n,r,o),u=a.dispatch,c=[],p={getState:a.getState,dispatch:function(e){return u(e)}};return c=t.map(function(e){return e(p)}),u=s["default"].apply(void 0,c)(a.dispatch),i({},a,{dispatch:u})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var a=n(177),s=r(a)},177:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.__esModule=!0,t["default"]=n},178:function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t["default"]=r},179:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"default title",content:"default content"},t=arguments[1];switch(t.type){case"UPDATE_CARD":return Object.assign({},e,t.payload);default:return e}}},180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;var o=n(181),i=n(190),a=r(i),s=n(191);t.Card=(0,o.connect)(function(e){return{card:e}},function(e){return{updateCard:function(t){return e((0,s.updateCard)(t))},updateCardFromServer:function(t){return e((0,s.updateCardFromServer)())}}})(a["default"])},181:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.connect=t.Provider=void 0;var o=n(182),i=r(o),a=n(185),s=r(a);t.Provider=i["default"],t.connect=s["default"]},182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t["default"]=void 0;var s=n(2),u=n(183),c=r(u),p=n(184),d=(r(p),function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));return a.store=n.store,a}return a(t,e),t.prototype.getChildContext=function(){return{store:this.store}},t.prototype.render=function(){var e=this.props.children;return s.Children.only(e)},t}(s.Component));t["default"]=d,d.propTypes={store:c["default"].isRequired,children:s.PropTypes.element.isRequired},d.childContextTypes={store:c["default"].isRequired}},183:function(e,t,n){"use strict";t.__esModule=!0;var r=n(2);t["default"]=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},184:function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return e.displayName||e.name||"Component"}function u(e,t){try{return e.apply(t)}catch(n){return C.value=n,C}}function c(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],c=Boolean(e),l=e||S,h=void 0;h="function"==typeof t?t:t?(0,m["default"])(t):O;var v=n||M,b=r.pure,w=void 0===b||b,g=r.withRef,_=void 0!==g&&g,T=w&&v!==M,x=j++;return function(e){function t(e,t,n){var r=v(e,t,n);return r}var n="Connect("+s(e)+")",r=function(r){function s(e,t){o(this,s);var a=i(this,r.call(this,e,t));a.version=x,a.store=e.store||t.store,(0,E["default"])(a.store,'Could not find "store" in either the context or '+('props of "'+n+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+n+'".'));var u=a.store.getState();return a.state={storeState:u},a.clearCache(),a}return a(s,r),s.prototype.shouldComponentUpdate=function(){return!w||this.haveOwnPropsChanged||this.hasStoreStateChanged},s.prototype.computeStateProps=function(e,t){if(!this.finalMapStateToProps)return this.configureFinalMapState(e,t);var n=e.getState(),r=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(n,t):this.finalMapStateToProps(n);return r},s.prototype.configureFinalMapState=function(e,t){var n=l(e.getState(),t),r="function"==typeof n;return this.finalMapStateToProps=r?n:l,this.doStatePropsDependOnOwnProps=1!==this.finalMapStateToProps.length,r?this.computeStateProps(e,t):n},s.prototype.computeDispatchProps=function(e,t){if(!this.finalMapDispatchToProps)return this.configureFinalMapDispatch(e,t);var n=e.dispatch,r=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(n,t):this.finalMapDispatchToProps(n);return r},s.prototype.configureFinalMapDispatch=function(e,t){var n=h(e.dispatch,t),r="function"==typeof n;return this.finalMapDispatchToProps=r?n:h,this.doDispatchPropsDependOnOwnProps=1!==this.finalMapDispatchToProps.length,r?this.computeDispatchProps(e,t):n},s.prototype.updateStatePropsIfNeeded=function(){var e=this.computeStateProps(this.store,this.props);return(!this.stateProps||!(0,y["default"])(e,this.stateProps))&&(this.stateProps=e,!0)},s.prototype.updateDispatchPropsIfNeeded=function(){var e=this.computeDispatchProps(this.store,this.props);return(!this.dispatchProps||!(0,y["default"])(e,this.dispatchProps))&&(this.dispatchProps=e,!0)},s.prototype.updateMergedPropsIfNeeded=function(){var e=t(this.stateProps,this.dispatchProps,this.props);return!(this.mergedProps&&T&&(0,y["default"])(e,this.mergedProps))&&(this.mergedProps=e,!0)},s.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},s.prototype.trySubscribe=function(){c&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},s.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},s.prototype.componentDidMount=function(){this.trySubscribe()},s.prototype.componentWillReceiveProps=function(e){w&&(0,y["default"])(e,this.props)||(this.haveOwnPropsChanged=!0)},s.prototype.componentWillUnmount=function(){this.tryUnsubscribe(),this.clearCache()},s.prototype.clearCache=function(){this.dispatchProps=null,this.stateProps=null,this.mergedProps=null,this.haveOwnPropsChanged=!0,this.hasStoreStateChanged=!0,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,this.renderedElement=null,this.finalMapDispatchToProps=null,this.finalMapStateToProps=null},s.prototype.handleChange=function(){if(this.unsubscribe){var e=this.store.getState(),t=this.state.storeState;if(!w||t!==e){if(w&&!this.doStatePropsDependOnOwnProps){var n=u(this.updateStatePropsIfNeeded,this);if(!n)return;n===C&&(this.statePropsPrecalculationError=C.value),this.haveStatePropsBeenPrecalculated=!0}this.hasStoreStateChanged=!0,this.setState({storeState:e})}}},s.prototype.getWrappedInstance=function(){return(0,E["default"])(_,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},s.prototype.render=function(){var t=this.haveOwnPropsChanged,n=this.hasStoreStateChanged,r=this.haveStatePropsBeenPrecalculated,o=this.statePropsPrecalculationError,i=this.renderedElement;if(this.haveOwnPropsChanged=!1,this.hasStoreStateChanged=!1,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,o)throw o;var a=!0,s=!0;w&&i&&(a=n||t&&this.doStatePropsDependOnOwnProps,s=t&&this.doDispatchPropsDependOnOwnProps);var u=!1,c=!1;r?u=!0:a&&(u=this.updateStatePropsIfNeeded()),s&&(c=this.updateDispatchPropsIfNeeded());var l=!0;return l=!!(u||c||t)&&this.updateMergedPropsIfNeeded(),!l&&i?i:(_?this.renderedElement=(0,d.createElement)(e,p({},this.mergedProps,{ref:"wrappedInstance"})):this.renderedElement=(0,d.createElement)(e,this.mergedProps),this.renderedElement)},s}(d.Component);return r.displayName=n,r.WrappedComponent=e,r.contextTypes={store:f["default"]},r.propTypes={store:f["default"]},(0,P["default"])(r,e)}}var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.__esModule=!0,t["default"]=c;var d=n(2),l=n(183),f=r(l),h=n(186),y=r(h),v=n(187),m=r(v),b=n(184),w=(r(b),n(166)),g=(r(w),n(188)),P=r(g),_=n(189),E=r(_),S=function(e){return{}},O=function(e){return{dispatch:e}},M=function(e,t,n){return p({},n,e,t)},C={value:null},j=0},186:function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<n.length;i++)if(!o.call(t,n[i])||e[n[i]]!==t[n[i]])return!1;return!0}t.__esModule=!0,t["default"]=n},187:function(e,t,n){"use strict";function r(e){return function(t){return(0,o.bindActionCreators)(e,t)}}t.__esModule=!0,t["default"]=r;var o=n(164)},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),a=i["default"].createClass({displayName:"Card",componentDidMount:function(){componentHandler.upgradeElement(this.refs.myCard)},componentDidUpdate:function(){componentHandler.upgradeElement(this.refs.myCard)},render:function(){var e=this;return i["default"].createElement("div",{className:"demo-card mdl-card mdl-shadow--2dp",ref:"myCard"},i["default"].createElement("div",{className:"mdl-card__title"},i["default"].createElement("h2",{className:"mdl-card__title-text"},this.props.card.title)),i["default"].createElement("div",{className:"mdl-card__supporting-text"},this.props.card.content),i["default"].createElement("div",{className:"mdl-card__actions mdl-card--border"},i["default"].createElement("a",{className:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",onClick:function(){return e.props.updateCard({title:"default title",content:"default content"})}},"Update to default"),i["default"].createElement("a",{className:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",onClick:function(){return e.props.updateCardFromServer()}},"Update")),i["default"].createElement("div",{className:"mdl-card__menu"},i["default"].createElement("button",{className:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"},i["default"].createElement("i",{className:"material-icons"},"share"))))}});t["default"]=a},191:function(e,t,n){"use strict";function r(e){return{type:"UPDATE_CARD",payload:{title:e.title,content:e.content}}}function o(e){return function(e){var t=n(192);t({uri:"/json/data.json",json:!0,headers:{"Content-Type":"application/json"}},function(t,n,o){t||e(r(o))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.updateCard=r,t.updateCardFromServer=o},192:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<e.length;n++)t(e[n])}function o(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e,t,n){var r=e;return d(t)?(n=t,"string"==typeof e&&(r={uri:e})):r=f(t,{uri:e}),r.callback=n,r}function a(e,t,n){return t=i(e,t,n),s(t)}function s(e){function t(){4===d.readyState&&i()}function n(){var e=void 0;if(e=d.response?d.response:d.responseText||u(d),P)try{e=JSON.parse(e)}catch(t){}return e}function r(e){return clearTimeout(y),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,c(e,p)}function i(){if(!h){var t;clearTimeout(y),t=e.useXDR&&void 0===d.status?200:1223===d.status?204:d.status;var r=p,o=null;return 0!==t?(r={body:n(),statusCode:t,method:m,headers:{},url:v,rawRequest:d},d.getAllResponseHeaders&&(r.headers=l(d.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),c(o,r,r.body)}}if("undefined"==typeof e.callback)throw new Error("callback argument missing");var s=!1,c=function(t,n,r){s||(s=!0,e.callback(t,n,r))},p={body:void 0,headers:{},statusCode:0,method:m,url:v,rawRequest:d},d=e.xhr||null;d||(d=e.cors||e.useXDR?new a.XDomainRequest:new a.XMLHttpRequest);var f,h,y,v=d.url=e.uri||e.url,m=d.method=e.method||"GET",b=e.body||e.data||null,w=d.headers=e.headers||{},g=!!e.sync,P=!1;if("json"in e&&(P=!0,w.accept||w.Accept||(w.Accept="application/json"),"GET"!==m&&"HEAD"!==m&&(w["content-type"]||w["Content-Type"]||(w["Content-Type"]="application/json"),b=JSON.stringify(e.json))),d.onreadystatechange=t,d.onload=i,d.onerror=r,d.onprogress=function(){},d.ontimeout=r,d.open(m,v,!g,e.username,e.password),g||(d.withCredentials=!!e.withCredentials),!g&&e.timeout>0&&(y=setTimeout(function(){h=!0,d.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",r(e)},e.timeout)),d.setRequestHeader)for(f in w)w.hasOwnProperty(f)&&d.setRequestHeader(f,w[f]);else if(e.headers&&!o(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(d.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(d),d.send(b),d}function u(e){if("document"===e.responseType)return e.responseXML;var t=204===e.status&&e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;return""!==e.responseType||t?null:e.responseXML}function c(){}var p=n(193),d=n(194),l=n(195),f=n(198);e.exports=a,a.XMLHttpRequest=p.XMLHttpRequest||c,a.XDomainRequest="withCredentials"in new a.XMLHttpRequest?a.XMLHttpRequest:p.XDomainRequest,r(["get","put","post","patch","head","delete"],function(e){a["delete"===e?"del":e]=function(t,n,r){return n=i(t,n,r),n.method=e.toUpperCase(),s(n)}})},193:function(e,t){(function(t){"undefined"!=typeof window?e.exports=window:"undefined"!=typeof t?e.exports=t:"undefined"!=typeof self?e.exports=self:e.exports={}}).call(t,function(){return this}())},194:function(e,t){function n(e){var t=r.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}e.exports=n;var r=Object.prototype.toString},195:function(e,t,n){var r=n(196),o=n(197),i=function(e){return"[object Array]"===Object.prototype.toString.call(e)};e.exports=function(e){if(!e)return{};var t={};return o(r(e).split("\n"),function(e){var n=e.indexOf(":"),o=r(e.slice(0,n)).toLowerCase(),a=r(e.slice(n+1));"undefined"==typeof t[o]?t[o]=a:i(t[o])?t[o].push(a):t[o]=[t[o],a]}),t}},196:function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},197:function(e,t,n){function r(e,t,n){if(!s(t))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===u.call(e)?o(e,t,n):"string"==typeof e?i(e,t,n):a(e,t,n)}function o(e,t,n){for(var r=0,o=e.length;r<o;r++)c.call(e,r)&&t.call(n,e[r],r,e)}function i(e,t,n){for(var r=0,o=e.length;r<o;r++)t.call(n,e.charAt(r),r,e)}function a(e,t,n){for(var r in e)c.call(e,r)&&t.call(n,e[r],r,e)}var s=n(194);e.exports=r;var u=Object.prototype.toString,c=Object.prototype.hasOwnProperty},198:function(e,t){function n(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)r.call(n,o)&&(e[o]=n[o])}return e}e.exports=n;var r=Object.prototype.hasOwnProperty},260:function(e,t,n){e.exports=n.p+"manifest.json"},261:function(e,t,n){e.exports=n.p+"json/data.json"},262:function(e,t){}});