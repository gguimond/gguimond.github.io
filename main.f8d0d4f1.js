parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"Q2fv":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"pBGv"}],"fwCX":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(i,r){e(this,t),n(this,"timerEvent",void 0),n(this,"scene",void 0),n(this,"label",void 0),this.scene=i,this.label=r}return i(t,[{key:"start",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:45e3;this.stop(),this.duration=i,this.timerEvent=this.scene.time.addEvent({delay:i,callback:function(){t.label.text="0",t.stop(),e&&e()}})}},{key:"stop",value:function(){this.timerEvent&&(this.timerEvent.destroy(),this.timerEvent=void 0)}},{key:"update",value:function(){if(this.timerEvent&&!(this.duration<=0)){var e=this.timerEvent.getElapsed(),t=(this.duration-e)/1e3;this.label.text=t.toFixed(2)}}}]),t}();exports.default=r;
},{}],"NiZL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("phaser")),t=i(require("./CountDown"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=d();return function(){var i,o=p(e);if(t){var s=p(this).constructor;i=Reflect.construct(o,arguments,s)}else i=o.apply(this,arguments);return u(this,i)}}function u(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var f=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[i],e[i]=o}},v=[1,1,2,2,3,3,4,4,0];f(v);var m=[[v[0],v[1],v[2]],[v[3],v[4],v[5]],[v[6],v[7],v[8]]],x=function(i){n(a,e.default.Scene);var o=c(a);function a(){var e;return s(this,a),y(h(e=o.call(this,"game")),"selectedBoxes",[]),y(h(e),"matchesCount",0),y(h(e),"mistakesCount",0),e}return r(a,[{key:"init",value:function(){this.cursors=this.input.keyboard.createCursorKeys()}},{key:"preload",value:function(){}},{key:"createBoxes",value:function(){for(var e=this,t=this.scale.width,i=.25,o=150,s=0;s<m.length;++s){for(var a=function(a){var r=e.boxGroup.get(t*i,o,"sokoban",10);r.setSize(64,32).setOffset(0,32).setData("itemType",m[s][a]).setInteractive().on("pointerdown",function(t,i,o,s){e.player.x=r.x,e.player.y=r.y+50,e.handlePlayerBoxCollide(e.player,r),e.openBox(r),e.activeBox.setFrame(10),e.activeBox=void 0}),i+=.25},r=0;r<m[s].length;++r)a(r);i=.25,o+=150}}},{key:"openBox",value:function(e){var t=this;if(e){var i,o=e.getData("itemType");switch(o){case 0:(i=this.itemsGroup.get(e.x,e.y)).setTexture("bear");break;case 1:(i=this.itemsGroup.get(e.x,e.y)).setTexture("chicken");break;case 2:(i=this.itemsGroup.get(e.x,e.y)).setTexture("duck");break;case 3:(i=this.itemsGroup.get(e.x,e.y)).setTexture("parrot");break;case 4:(i=this.itemsGroup.get(e.x,e.y)).setTexture("penguin")}e.setData("opened",!0),i.setData("sorted",!0),i.setDepth(800),i.setActive(!0),i.setVisible(!0),i.scale=0,i.alpha=0,this.selectedBoxes.push({box:e,item:i}),this.tweens.add({targets:i,y:"-=50",alpha:1,scale:1,duration:500,onComplete:function(){0!==o?t.selectedBoxes.length<2||t.checkForMatch():t.handleBearSelected()}})}}},{key:"handleBearSelected",value:function(){var e=this,t=this.selectedBoxes.pop(),i=t.box,o=t.item;o.setTint(16711680),i.setFrame(7),this.player.active=!1,this.player.setVelocity(0,0),this.freeze.play(),this.time.delayedCall(1e3,function(){o.setTint(16777215),i.setFrame(10),i.setData("opened",!1),e.tweens.add({targets:o,y:"+=50",alpha:0,scale:0,duration:300,onComplete:function(){e.player.active=!0}})})}},{key:"checkForMatch",value:function(){var e=this,t=this.selectedBoxes.pop(),i=this.selectedBoxes.pop();if(i.item.texture!==t.item.texture){this.bad.play();var o=this.scale;o.width,o.height;return this.mistakesLabel.text="mistakes: "+ ++this.mistakesCount,void this.tweens.add({targets:[i.item,t.item],y:"+=50",alpha:0,scale:0,duration:300,delay:1e3,onComplete:function(){e.itemsGroup.killAndHide(i.item),e.itemsGroup.killAndHide(t.item),i.box.setData("opened",!1),t.box.setData("opened",!1)}})}++this.matchesCount,this.good.play(),this.time.delayedCall(1e3,function(){if(i.box.setFrame(8),t.box.setFrame(8),e.matchesCount>=4){e.countdown.stop(),e.player.active=!1,e.player.setVelocity(0,0);var o=e.scale,s=(o.width,o.height),a=parseInt(e.timerLabel.text)-3*e.mistakesCount+5||0;e.add.text(50,s-50,"You Win! Score: "+a,{fontSize:48}),e.win.play(),e.time.delayedCall(5e3,function(){document.location.reload()})}})}},{key:"create",value:function(){var e=this.scale,i=e.width,o=e.height;this.player=this.physics.add.sprite(.5*i,.6*o,"sokoban").setSize(40,16).setOffset(12,38).play("down-idle"),this.boxGroup=this.physics.add.staticGroup(),this.itemsGroup=this.add.group(),this.createBoxes(),this.timerLabel=this.add.text(i-75,50,"45",{fontSize:48}).setOrigin(.5),this.countdown=new t.default(this,this.timerLabel),this.countdown.start(this.handleCountdownFinished.bind(this)),this.physics.add.collider(this.boxGroup,this.player,this.handlePlayerBoxCollide,void 0,this),this.good=this.sound.add("good",{loop:!1}),this.bad=this.sound.add("bad",{loop:!1}),this.gameOver=this.sound.add("game_over",{loop:!1}),this.win=this.sound.add("win",{loop:!1}),this.freeze=this.sound.add("freeze",{loop:!1}),this.sound.add("background",{loop:!0}).play(),this.mistakesLabel=this.add.text(200,50,"mistakes: "+this.mistakesCount,{fontSize:48}).setOrigin(.5)}},{key:"handlePlayerBoxCollide",value:function(e,t){t.getData("opened")||this.activeBox||(this.activeBox=t,this.activeBox.setFrame(9))}},{key:"updateActiveBox",value:function(){this.activeBox&&(e.default.Math.Distance.Between(this.player.x,this.player.y,this.activeBox.x,this.activeBox.y)<64||(this.activeBox.setFrame(10),this.activeBox=void 0))}},{key:"updatePlayer",value:function(){if(this.player.active){if(this.cursors.left.isDown)this.player.setVelocity(-200,0),this.player.play("left-walk",!0);else if(this.cursors.right.isDown)this.player.setVelocity(200,0),this.player.play("right-walk",!0);else if(this.cursors.up.isDown)this.player.setVelocity(0,-200),this.player.play("up-walk",!0);else if(this.cursors.down.isDown)this.player.setVelocity(0,200),this.player.play("down-walk",!0);else{this.player.setVelocity(0,0);var t=this.player.anims.currentAnim.key.split("-")[0];this.player.play("".concat(t,"-idle"))}e.default.Input.Keyboard.JustUp(this.cursors.space)&&this.activeBox&&(this.openBox(this.activeBox),this.activeBox.setFrame(10),this.activeBox=void 0)}}},{key:"update",value:function(){this.updatePlayer(),this.updateActiveBox(),this.children.each(function(e){var t=e;t.getData("sorted")||t.setDepth(t.y)}),this.countdown.update()}},{key:"handleCountdownFinished",value:function(){this.player.active=!1,this.player.setVelocity(0,0);var e=this.scale,t=e.width,i=e.height;this.add.text(.5*t,i-75,"You Lose!",{fontSize:48}).setOrigin(.5),this.gameOver.play(),this.time.delayedCall(5e3,function(){document.location.reload()})}}]),a}();exports.default=x;
},{"phaser":"Q2fv","./CountDown":"fwCX"}],"NJmm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("phaser"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=l();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(t){i(o,e.default.Scene);var r=u(o);function o(){return n(this,o),r.call(this,"preloader")}return a(o,[{key:"preload",value:function(){this.load.spritesheet("sokoban","textures/sokoban_tilesheet.png",{frameWidth:64}),this.load.image("bear","textures/bear.png"),this.load.image("chicken","textures/chicken.png"),this.load.image("duck","textures/duck.png"),this.load.image("parrot","textures/parrot.png"),this.load.image("penguin","textures/penguin.png"),this.load.audio("good",["sounds/good.mp3"]),this.load.audio("bad",["sounds/bad.mp3"]),this.load.audio("game_over",["sounds/game_over.mp3"]),this.load.audio("win",["sounds/win.mp3"]),this.load.audio("background",["sounds/background.mp3"]),this.load.audio("freeze",["sounds/freeze.mp3"])}},{key:"create",value:function(){this.anims.create({key:"down-idle",frames:[{key:"sokoban",frame:52}]}),this.anims.create({key:"up-idle",frames:[{key:"sokoban",frame:55}]}),this.anims.create({key:"left-idle",frames:[{key:"sokoban",frame:81}]}),this.anims.create({key:"right-idle",frames:[{key:"sokoban",frame:78}]}),this.anims.create({key:"down-walk",frames:this.anims.generateFrameNumbers("sokoban",{start:52,end:54}),frameRate:10,repeat:-1}),this.anims.create({key:"up-walk",frames:this.anims.generateFrameNumbers("sokoban",{start:55,end:57}),frameRate:10,repeat:-1}),this.anims.create({key:"left-walk",frames:this.anims.generateFrameNumbers("sokoban",{start:81,end:83}),frameRate:10,repeat:-1}),this.anims.create({key:"right-walk",frames:this.anims.generateFrameNumbers("sokoban",{start:78,end:80}),frameRate:10,repeat:-1}),this.scene.start("game")}}]),o}();exports.default=d;
},{"phaser":"Q2fv"}],"epB2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("phaser")),r=a(require("./scenes/Game")),t=a(require("./scenes/Preloader"));function a(e){return e&&e.__esModule?e:{default:e}}var u={type:e.default.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:0}}},scene:[t.default,r.default]},d=new e.default.Game(u);exports.default=d;
},{"phaser":"Q2fv","./scenes/Game":"NiZL","./scenes/Preloader":"NJmm"}]},{},["epB2"], null)
//# sourceMappingURL=/main.f8d0d4f1.js.map