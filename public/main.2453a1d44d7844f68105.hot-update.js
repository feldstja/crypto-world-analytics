webpackHotUpdate("main",{

/***/ "./frontend/Loginscreen.js":
/*!*********************************!*\
  !*** ./frontend/Loginscreen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = {\n      username: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'login',\n    value: function login() {\n      this.props.socket.emit('login', {\n        username: this.state.username,\n        password: this.state.password\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      this.props.socket.on('loginSuccess', function (userId) {\n        self.props.goToTools(userId);\n      });\n      console.log(this.props.account, this.props.loggedin);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Login'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Username: '\n          ),\n          _react2.default.createElement('input', { type: 'text',\n            name: 'username',\n            className: 'form-control',\n            value: this.state.username,\n            onChange: function onChange(e) {\n              return _this2.setState({ username: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Password: '\n          ),\n          _react2.default.createElement('input', { type: 'password',\n            name: 'password',\n            className: 'form-control',\n            value: this.state.password,\n            onChange: function onChange(e) {\n              return _this2.setState({ password: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-success', onClick: function onClick() {\n                return _this2.login();\n              } },\n            'Login'\n          ),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-primary', onClick: function onClick() {\n                return _this2.props.goToRegister();\n              } },\n            'Register'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9Mb2dpbnNjcmVlbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9Mb2dpbnNjcmVlbi5qcz9jMDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnbG9naW4nLCB7XG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2xvZ2luU3VjY2VzcycsIGZ1bmN0aW9uKHVzZXJJZCl7XG4gICAgICBzZWxmLnByb3BzLmdvVG9Ub29scyh1c2VySWQpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWNjb3VudCwgdGhpcy5wcm9wcy5sb2dnZWRpbilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6IDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZS50YXJnZXQudmFsdWV9KX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCkgPT4gdGhpcy5sb2dpbigpfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvVG9SZWdpc3RlcigpfT5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFsQkE7QUF3QkE7Ozs7QUFsREE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/Loginscreen.js\n");

/***/ })

})