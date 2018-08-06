webpackHotUpdate("main",{

/***/ "./frontend/tradingtools.js":
/*!**********************************!*\
  !*** ./frontend/tradingtools.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ \"./frontend/App.css\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tools = function (_React$Component) {\n  _inherits(Tools, _React$Component);\n\n  function Tools(props) {\n    _classCallCheck(this, Tools);\n\n    var _this = _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));\n\n    _this.state = {\n      arr: [],\n      screen: _this.props.screen\n    };\n    return _this;\n  }\n\n  _createClass(Tools, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var intervalID = setInterval(function () {\n        // fetch('https://api.hitbtc.com/api/2/public/ticker', {\n        //   mode: 'cors'\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json',\n        //   }\n        // })\n        // .then((resp)=>{\n        //   this.setState({\n        //     arr: resp\n        //   })\n        // })\n        // .catch((err)=>console.log(\"ERROR:\", err))\n        (0, _axios2.default)(\"http://localhost:3000/currency\", {\n          method: 'GET'\n        })\n        // .then((res)=>res.json())\n        .then(function (resp) {\n          console.log(resp.data);\n          _this2.setState({\n            arr: resp.data\n          });\n        }).catch(function (err) {\n          console.log('ERROR:', err);\n        });\n      }, 5000);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          'header',\n          { className: 'App-header' },\n          _react2.default.createElement(\n            'h1',\n            { className: 'App-title' },\n            'Welcome to React'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 0 });\n              } },\n            'Home'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 1 });\n              } },\n            'About Crypto'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 2 });\n              } },\n            'How To Start'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 3 });\n              } },\n            'Trading Techniques'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 4 });\n              } },\n            'Trading Tools'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.setState({ screen: 5 });\n              } },\n            'FAQ'\n          )\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.state.arr.map(function (m) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              m.symbol,\n              ': ',\n              m.volume\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return Tools;\n}(_react2.default.Component);\n\nexports.default = Tools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90cmFkaW5ndG9vbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvdHJhZGluZ3Rvb2xzLmpzPzBhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXJyOiBbXSxcbiAgICAgIHNjcmVlbjogdGhpcy5wcm9wcy5zY3JlZW5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBmZXRjaCgnaHR0cHM6Ly9hcGkuaGl0YnRjLmNvbS9hcGkvMi9wdWJsaWMvdGlja2VyJywge1xuICAgICAgLy8gICBtb2RlOiAnY29ycydcbiAgICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIC8vICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvLyAudGhlbigocmVzcCk9PntcbiAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgICAgYXJyOiByZXNwXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9KVxuICAgICAgLy8gLmNhdGNoKChlcnIpPT5jb25zb2xlLmxvZyhcIkVSUk9SOlwiLCBlcnIpKVxuICAgICAgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VycmVuY3lcIiwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuICAgICAgLy8gLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzcCk9PntcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYXJyOiByZXNwLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjonLCBlcnIpXG4gICAgICB9KTtcbiAgfSwgNTAwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkFwcC10aXRsZVwiPldlbGNvbWUgdG8gUmVhY3Q8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3NjcmVlbjogMH0pfT5Ib21lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzY3JlZW46IDF9KX0+QWJvdXQgQ3J5cHRvPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzY3JlZW46IDJ9KX0+SG93IFRvIFN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzY3JlZW46IDN9KX0+VHJhZGluZyBUZWNobmlxdWVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzY3JlZW46IDR9KX0+VHJhZGluZyBUb29sczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiA1fSl9PkZBUTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFyci5tYXAoKG0pPT48bGk+e20uc3ltYm9sfToge20udm9sdW1lfTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVpBO0FBaUJBOzs7O0FBMURBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/tradingtools.js\n");

/***/ })

})