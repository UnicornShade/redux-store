var t=function(t,e){this.props=e,this.elem=t};t.prototype.updateDOM=function(t){this.elem.innerHTML=this.render(t)},t.prototype.render=function(t){};var e=function(t,e){var n=this;this.__subscribers=[],this.__state={},this.subscribe=function(t){return n.__subscribers.push(t),function(){return n._unsubscribe(t)}},this.dispatch=function(t){if(!t)throw new Error("Action is not defined");n._state=n._reducer(n._state,t)},this.getState=function(){return n._state},this.use=function(t){if("function"==typeof t){var e=n.dispatch;n.dispatch=t(n)(e)}},this._unsubscribe=function(t){n.__subscribers=n.__subscribers.filter(function(e){return e!==t})},this._notify=function(){n.__subscribers.forEach(function(t){return t(n.getState())})},this._reducer=t,this._state=e},n={_state:{configurable:!0}};n._state.get=function(){return this.__state},n._state.set=function(t){this.__state=t,this._notify()},Object.defineProperties(e.prototype,n),exports.Component=t,exports.Store=e,exports.connectStore=function(t,e){return function(e){function n(n,r){e.call(this,n,r),t.subscribe(this.updateDOM.bind(this)),this.dispatch=t.dispatch}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n}(e)},exports.useThunk=function(){return function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){return"function"==typeof r?r(e,n()):t(r)}}}};
//# sourceMappingURL=index.js.map
