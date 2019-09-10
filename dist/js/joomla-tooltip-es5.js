(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

(function () {
  var JoomlaTooltipElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JoomlaTooltipElement, _HTMLElement);

    function JoomlaTooltipElement() {
      _classCallCheck(this, JoomlaTooltipElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(JoomlaTooltipElement).apply(this, arguments));
    }

    _createClass(JoomlaTooltipElement, [{
      key: "connectedCallback",

      /* Lifecycle, element appended to the DOM */
      value: function connectedCallback() {
        var _this = this;

        if (!this.position || this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1) {
          this.position = 'top';
        }

        this.innerContents = _toConsumableArray(this.querySelectorAll('joomla-tooltip > *'));
        this.innerContents.forEach(function (content) {
          if (_this.action === 'hover') {
            content.addEventListener('mouseenter', function (e) {
              _this.generateTooltip(content);
            });
            content.addEventListener('mouseleave', function (e) {
              // clean up
              var tooltips = document.querySelectorAll('.joomla-tooltip');
              tooltips.forEach(function (tooltip) {
                document.body.removeChild(tooltip);
              });
            });
          } else {
            content.addEventListener('click', function (e) {
              _this.generateTooltip(content);
            });
          }
        });
      }
    }, {
      key: "generateTooltip",
      value: function generateTooltip(item) {
        var tooltipWrap = document.createElement('span');
        tooltipWrap.classList.add('joomla-tooltip', "".concat(this.position));
        var title = item.hasAttribute('tooltip-text') ? item.getAttribute('tooltip-text') : item.innerText;
        tooltipWrap.appendChild(document.createTextNode(title));
        var firstChild = document.body.firstChild;
        firstChild.parentNode.insertBefore(tooltipWrap, firstChild); // calculating the position

        var itemRect = item.getBoundingClientRect();
        var toolTipRect = tooltipWrap.getBoundingClientRect();
        var space = 5;

        switch (this.position) {
          case 'right':
            tooltipWrap.style.left = "".concat(Math.round(itemRect.left + itemRect.width), "px");
            tooltipWrap.style.top = "".concat(Math.round(itemRect.top), "px");
            break;

          case 'bottom':
            break;

          case 'left':
            break;

          default:
            tooltipWrap.style.top = "".concat(itemRect.top - (toolTipRect.height + space), "px");
            tooltipWrap.style.left = "".concat(itemRect.left, "px");
            break;
        }
      }
      /* Lifecycle, element removed from the DOM */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.querySelector('button').removeEventListener('click', this.showTip, true);
      }
    }, {
      key: "showTip",
      value: function showTip() {
        var _this2 = this;

        var self = this; // Close on outside click

        document.addEventListener('click', function (e) {
          if (_this2.btnElement !== e.target) {
            _this2.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this2);
          }
        }); // Remove toggletip on ESC

        document.addEventListener('keydown', function (e) {
          if ((e.keyCode || e.which) === 9) {
            _this2.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this2);
          }
        });
        this.spanElement.innerHTML = '';
        this.spanElement.innerHTML = "<span class=\"toggletip-bubble ".concat(this.position, "\">").concat(this.tip, "</span>");
      }
      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName, {
          bubbles: true,
          cancelable: true
        });
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
    }, {
      key: "position",
      get: function get() {
        return this.getAttribute('position') || 'top';
      },
      set: function set(value) {
        return this.setAttribute('position', value);
      }
    }, {
      key: "action",
      get: function get() {
        return this.getAttribute('action') || 'hover';
      },
      set: function set(value) {
        return this.getAttribute('action', value);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['position', 'action'];
      }
    }]);

    return JoomlaTooltipElement;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-tooltip', JoomlaTooltipElement);
})();

},{}]},{},[1]);
