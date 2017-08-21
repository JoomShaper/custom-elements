(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}();function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b && ('object' == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || 'function' == typeof b) ? b : a;
}function _inherits(a, b) {
  if ('function' != typeof b && null !== b) throw new TypeError('Super expression must either be null or a function, not ' + (typeof b === 'undefined' ? 'undefined' : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}(function () {
  if (!document.getElementById('joomla-switcher-stylesheet')) {
    var a = document.createElement('style');a.id = 'joomla-switcher-stylesheet', a.innerHTML = '.joomla-switcher{position:relative;box-sizing:content-box;display:inline-block;width:60px;height:26px;margin-top:2px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}.joomla-switcher.active{background-color:#5cb85c;border-color:#5cb85c;box-shadow:0 0 0 16px #5cb85c inset;transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}.joomla-switcher.switcher-danger.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 16px #d9534f inset}.joomla-switcher.switcher-primary.active{background-color:#0275d8;border-color:#0275d8;box-shadow:0 0 0 16px #0275d8 inset}.joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:60px;height:26px;padding:0;margin:0;cursor:pointer;opacity:0}.joomla-switcher .switch{position:absolute;top:0;width:calc(60px / 2);height:26px;background:#fff;border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.1) inset,0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}.joomla-switcher input:checked~.switch{left:0}.joomla-switcher input~:checked~.switch{left:calc(60px / 2)}.joomla-switcher input:checked{z-index:0}.switcher-labels{position:relative;margin-left:10px}.switcher-labels span{position:absolute;top:0;left:0;color:#636c72;visibility:hidden;opacity:0;transition:all .2s ease-in-out}.switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}', document.head.appendChild(a);
  }
})();var SwitcherElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this,
          b = this.querySelectorAll('input'),
          c = b[1].parentNode.nextElementSibling;if (!b.length) throw new Error('Switcher not properly setup');b[1].checked ? (b[1].parentNode.classList.add('active'), c.querySelector('.switcher-label-' + b[1].value).classList.add('active')) : c.querySelector('.switcher-label-' + b[0].value).classList.add('active'), b.forEach(function (b) {
        b.addEventListener('click', function (b) {
          var c = b.target,
              d = this.parentNode,
              e = d.nextElementSibling.querySelectorAll('span');e.forEach(function (a) {
            a.classList.remove('active');
          }), this.parentNode.classList.contains('active') ? this.parentNode.classList.remove('active') : this.parentNode.classList.add('active'), this.classList.contains('active') ? (this.classList.remove('active'), a.dispatchCustomEvent('joomla.switcher.off')) : (this.classList.add('active'), a.dispatchCustomEvent('joomla.switcher.on')), d.nextElementSibling.querySelector('.switcher-label-' + this.value).classList.add('active');
        });
      });
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.removeEventListener('joomla.switcher.toggle', this), this.removeEventListener('joomla.switcher.on', this), this.removeEventListener('joomla.switcher.off', this), this.removeEventListener('click', this);
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }]), b;
}(HTMLElement);customElements.define('joomla-switcher', SwitcherElement);

},{}]},{},[1]);
