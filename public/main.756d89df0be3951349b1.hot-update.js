webpackHotUpdate("main",{

/***/ "./frontend/Loginscreen.js":
/*!*********************************!*\
  !*** ./frontend/Loginscreen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = {\n      username: '',\n      password: '',\n      user: ''\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'login',\n    value: function login() {\n      this.props.socket.emit('login', {\n        username: this.state.username,\n        password: this.state.password\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.socket.on('loginSuccess', function (user) {\n        self.setState({\n          user: user\n        });\n        self.props.changeUser(user);\n        self.props.goToTools(user._id);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(0);\n              } },\n            'Home'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(1);\n              } },\n            'About Crypto'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(2);\n              } },\n            'How To Start'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(3);\n              } },\n            'Trading Techniques'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(4);\n              } },\n            'Trading Tools'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this2.props.redirect(5);\n              } },\n            'FAQ'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            'Login'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              null,\n              'Username: '\n            ),\n            _react2.default.createElement('input', { type: 'text',\n              name: 'username',\n              className: 'form-control',\n              value: this.state.username,\n              onChange: function onChange(e) {\n                return _this2.setState({ username: e.target.value });\n              } })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              null,\n              'Password: '\n            ),\n            _react2.default.createElement('input', { type: 'password',\n              name: 'password',\n              className: 'form-control',\n              value: this.state.password,\n              onChange: function onChange(e) {\n                return _this2.setState({ password: e.target.value });\n              } })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-success', onClick: function onClick() {\n                  return _this2.login();\n                } },\n              'Login'\n            ),\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-primary', onClick: function onClick() {\n                  return _this2.props.goToRegister();\n                } },\n              'Register'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9Mb2dpbnNjcmVlbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9Mb2dpbnNjcmVlbi5qcz9jMDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHVzZXI6ICcnXG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnbG9naW4nLCB7XG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdsb2dpblN1Y2Nlc3MnLCBmdW5jdGlvbih1c2VyKXtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyOiB1c2VyXG4gICAgICB9KVxuICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VVc2VyKHVzZXIpO1xuICAgICAgc2VsZi5wcm9wcy5nb1RvVG9vbHModXNlci5faWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVkaXJlY3QoMCl9PkhvbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDEpfT5BYm91dCBDcnlwdG88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDIpfT5Ib3cgVG8gU3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDMpfT5UcmFkaW5nIFRlY2huaXF1ZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDQpfT5UcmFkaW5nIFRvb2xzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg1KX0+RkFRPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHt1c2VybmFtZTogZS50YXJnZXQudmFsdWV9KX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMubG9naW4oKX0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5nb1RvUmVnaXN0ZXIoKX0+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWxCQTtBQVRBO0FBa0NBOzs7O0FBaEVBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/Loginscreen.js\n");

/***/ })

})