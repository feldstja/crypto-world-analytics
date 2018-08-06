webpackHotUpdate("main",{

/***/ "./frontend/App.js":
/*!*************************!*\
  !*** ./frontend/App.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Loginscreen = __webpack_require__(/*! ./Loginscreen */ \"./frontend/Loginscreen.js\");\n\nvar _Loginscreen2 = _interopRequireDefault(_Loginscreen);\n\nvar _Registerscreen = __webpack_require__(/*! ./Registerscreen */ \"./frontend/Registerscreen.js\");\n\nvar _Registerscreen2 = _interopRequireDefault(_Registerscreen);\n\nvar _tradingtools = __webpack_require__(/*! ./tradingtools */ \"./frontend/tradingtools.js\");\n\nvar _tradingtools2 = _interopRequireDefault(_tradingtools);\n\nvar _FAQ = __webpack_require__(/*! ./FAQ */ \"./frontend/FAQ.js\");\n\nvar _FAQ2 = _interopRequireDefault(_FAQ);\n\nvar _Tradingtechniques = __webpack_require__(/*! ./Tradingtechniques */ \"./frontend/Tradingtechniques.js\");\n\nvar _Tradingtechniques2 = _interopRequireDefault(_Tradingtechniques);\n\nvar _HowToStart = __webpack_require__(/*! ./HowToStart */ \"./frontend/HowToStart.js\");\n\nvar _HowToStart2 = _interopRequireDefault(_HowToStart);\n\nvar _Aboutscreen = __webpack_require__(/*! ./Aboutscreen */ \"./frontend/Aboutscreen.js\");\n\nvar _Aboutscreen2 = _interopRequireDefault(_Aboutscreen);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar io = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.state = {\n      screen: 0,\n      loggedin: '',\n      account: false,\n      socket: io('http://localhost:3000'),\n      user: {}\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'redirect',\n    value: function redirect(page) {\n      this.setState({\n        screen: page\n      });\n    }\n  }, {\n    key: 'changeUser',\n    value: function changeUser(user) {\n      this.setState({\n        user: user\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      console.log(this.state.screen);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'App' },\n          _react2.default.createElement(\n            'header',\n            { className: 'App-header' },\n            _react2.default.createElement(\n              'h1',\n              { className: 'App-title' },\n              'Crypto World Analytics'\n            )\n          )\n        ),\n        this.state.screen !== 0 ? this.state.screen !== 1 ? this.state.screen !== 2 ? this.state.screen !== 3 ? this.state.screen !== 4 ? this.state.screen !== 5 ? null : _react2.default.createElement(_FAQ2.default, { redirect: this.redirect.bind(this) }) : _react2.default.createElement(_tradingtools2.default, { socket: this.state.socket,\n          loggedin: this.state.loggedin,\n          account: this.state.account,\n          goToTools: function goToTools(userId) {\n            return _this2.setState({ loggedin: userId });\n          },\n          goToLogin: function goToLogin() {\n            return _this2.setState({ account: true });\n          },\n          redirect: this.redirect.bind(this),\n          changeUser: this.changeUser.bind(this),\n          user: this.state.user,\n          goToRegister: function goToRegister() {\n            return _this2.setState({ account: false });\n          } }) : _react2.default.createElement(_Tradingtechniques2.default, { redirect: this.redirect.bind(this) }) : _react2.default.createElement(_HowToStart2.default, { redirect: this.redirect.bind(this) }) : _react2.default.createElement(_Aboutscreen2.default, { redirect: this.redirect.bind(this) }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 0 });\n                } },\n              'Home'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 1 });\n                } },\n              'About Crypto'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 2 });\n                } },\n              'How To Start'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 3 });\n                } },\n              'Trading Techniques'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 4 });\n                } },\n              'Trading Tools'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this2.setState({ screen: 5 });\n                } },\n              'FAQ'\n            )\n          ),\n          _react2.default.createElement(\n            'h1',\n            null,\n            'Home screen'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9BcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvQXBwLmpzP2I0ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luc2NyZWVuJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL1JlZ2lzdGVyc2NyZWVuJztcbmltcG9ydCBUb29scyBmcm9tICcuL3RyYWRpbmd0b29scyc7XG5jb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcbmltcG9ydCBGYXEgZnJvbSAnLi9GQVEnO1xuaW1wb3J0IFRyYWRpbmd0ZWNobmlxdWVzIGZyb20gJy4vVHJhZGluZ3RlY2huaXF1ZXMnO1xuaW1wb3J0IEhvd1RvU3RhcnQgZnJvbSAnLi9Ib3dUb1N0YXJ0JztcbmltcG9ydCBBYm91dENyeXB0byBmcm9tICcuL0Fib3V0c2NyZWVuJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NyZWVuOiAwLFxuICAgICAgbG9nZ2VkaW46ICcnLFxuICAgICAgYWNjb3VudDogZmFsc2UsXG4gICAgICBzb2NrZXQ6IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKSxcbiAgICAgIHVzZXI6IHt9XG4gICAgfTtcbiAgfVxuXG5yZWRpcmVjdChwYWdlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcmVlbjogcGFnZVxuICAgIH0pXG4gIH1cbiAgY2hhbmdlVXNlcih1c2VyKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXI6IHVzZXJcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2NyZWVuKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwLXRpdGxlXCI+Q3J5cHRvIFdvcmxkIEFuYWx5dGljczwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDApID9cbiAgICAgICAgICAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDEpID9cbiAgICAgICAgICAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDIpID9cbiAgICAgICAgICAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDMpID9cbiAgICAgICAgICAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDQpID9cbiAgICAgICAgICAodGhpcy5zdGF0ZS5zY3JlZW4gIT09IDUpID8gbnVsbFxuICAgICAgICAgIDogPEZhcSByZWRpcmVjdD17dGhpcy5yZWRpcmVjdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgOiA8VG9vbHMgc29ja2V0PXt0aGlzLnN0YXRlLnNvY2tldH1cbiAgICAgICAgICAgIGxvZ2dlZGluPXt0aGlzLnN0YXRlLmxvZ2dlZGlufVxuICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxuICAgICAgICAgICAgZ29Ub1Rvb2xzPXsodXNlcklkKT0+dGhpcy5zZXRTdGF0ZSh7bG9nZ2VkaW46IHVzZXJJZH0pfVxuICAgICAgICAgICAgZ29Ub0xvZ2luPXsoKT0+dGhpcy5zZXRTdGF0ZSh7YWNjb3VudDogdHJ1ZX0pfVxuICAgICAgICAgICAgcmVkaXJlY3Q9e3RoaXMucmVkaXJlY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNoYW5nZVVzZXI9e3RoaXMuY2hhbmdlVXNlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VyfVxuICAgICAgICAgICAgZ29Ub1JlZ2lzdGVyPXsoKT0+dGhpcy5zZXRTdGF0ZSh7YWNjb3VudDogZmFsc2V9KX0vPlxuICAgICAgICAgIDogPFRyYWRpbmd0ZWNobmlxdWVzIHJlZGlyZWN0PXt0aGlzLnJlZGlyZWN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA6IDxIb3dUb1N0YXJ0IHJlZGlyZWN0PXt0aGlzLnJlZGlyZWN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA6IDxBYm91dENyeXB0byByZWRpcmVjdD17dGhpcy5yZWRpcmVjdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgOiA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiAwfSl9PkhvbWU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiAxfSl9PkFib3V0IENyeXB0bzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzY3JlZW46IDJ9KX0+SG93IFRvIFN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3NjcmVlbjogM30pfT5UcmFkaW5nIFRlY2huaXF1ZXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiA0fSl9PlRyYWRpbmcgVG9vbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2NyZWVuOiA1fSl9PkZBUTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMT5Ib21lIHNjcmVlbjwvaDE+XG4gICAgICAgICAgey8qIG90aGVyIGhvbWUgc3R1ZmYgZ29lcyByaWdodCBpbiBoZXJlICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUxBO0FBQ0E7QUFNQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBS0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBekJBO0FBd0NBOzs7O0FBbEVBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/App.js\n");

/***/ })

})