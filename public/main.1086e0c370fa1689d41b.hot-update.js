webpackHotUpdate("main",{

/***/ "./frontend/Registerscreen.js":
/*!************************************!*\
  !*** ./frontend/Registerscreen.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Register = function (_React$Component) {\n  _inherits(Register, _React$Component);\n\n  function Register(props) {\n    _classCallCheck(this, Register);\n\n    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));\n\n    _this.state = {\n      username: '',\n      PhoneNumber: '',\n      password: '',\n      passwordRepeat: ''\n    };\n    return _this;\n  }\n\n  _createClass(Register, [{\n    key: 'register',\n    value: function register(e) {\n      this.props.socket.emit('register', {\n        username: e.username,\n        PhoneNumber: e.PhoneNumber,\n        password: e.password,\n        passwordRepeat: e.passwordRepeat\n      });\n      if (e.username, e.PhoneNumber, e.password, e.passwordRepeat) {\n        this.props.goToLogin();\n      }\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      this.props.socket.on('registerSuccess', function (data) {\n        self.props.goToLogin();\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Register'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Username: '\n          ),\n          _react2.default.createElement('input', { type: 'text',\n            name: 'username',\n            className: 'form-control',\n            value: this.state.username,\n            onChange: function onChange(e) {\n              return _this2.setState({ username: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Phone Number: '\n          ),\n          _react2.default.createElement('input', { type: 'text',\n            name: 'username',\n            className: 'form-control',\n            value: this.state.PhoneNumber,\n            onChange: function onChange(e) {\n              return _this2.setState({ PhoneNumber: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Password: '\n          ),\n          _react2.default.createElement('input', { type: 'password',\n            name: 'password',\n            className: 'form-control',\n            value: this.state.password,\n            onChange: function onChange(e) {\n              return _this2.setState({ password: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            null,\n            'Verify Password: '\n          ),\n          _react2.default.createElement('input', { type: 'password',\n            name: 'passwordRepeat',\n            className: 'form-control',\n            value: this.state.passwordRepeat,\n            onChange: function onChange(e) {\n              return _this2.setState({ passwordRepeat: e.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'button',\n            {\n              className: 'btn btn-success',\n              onClick: function onClick(e) {\n                return _this2.register(e);\n              } },\n            ' Register '\n          ),\n          _react2.default.createElement(\n            'button',\n            {\n              className: 'btn btn-primary',\n              onClick: function onClick() {\n                return _this2.props.goToLogin();\n              } },\n            ' Login '\n          )\n        )\n      );\n    }\n  }]);\n\n  return Register;\n}(_react2.default.Component);\n\nexports.default = Register;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9SZWdpc3RlcnNjcmVlbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9SZWdpc3RlcnNjcmVlbi5qcz82NDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgUGhvbmVOdW1iZXI6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRSZXBlYXQ6ICcnXG4gICAgfVxuICB9XG5cbiAgICByZWdpc3RlcihlKXtcbiAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3JlZ2lzdGVyJywge1xuICAgICAgICAgIHVzZXJuYW1lOiBlLnVzZXJuYW1lLFxuICAgICAgICAgIFBob25lTnVtYmVyOiBlLlBob25lTnVtYmVyLFxuICAgICAgICAgIHBhc3N3b3JkOiBlLnBhc3N3b3JkLFxuICAgICAgICAgIHBhc3N3b3JkUmVwZWF0OiBlLnBhc3N3b3JkUmVwZWF0LFxuICAgICAgICB9KTtcbiAgICAgIGlmIChlLnVzZXJuYW1lLCBlLlBob25lTnVtYmVyLCBlLnBhc3N3b3JkLCBlLnBhc3N3b3JkUmVwZWF0KSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ29Ub0xvZ2luKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnByb3BzLnNvY2tldC5vbigncmVnaXN0ZXJTdWNjZXNzJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBzZWxmLnByb3BzLmdvVG9Mb2dpbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHt1c2VybmFtZTogZS50YXJnZXQudmFsdWV9KX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlBob25lTnVtYmVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHtQaG9uZU51bWJlcjogZS50YXJnZXQudmFsdWV9KX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+VmVyaWZ5IFBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRSZXBlYXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRSZXBlYXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRSZXBlYXQ6IGUudGFyZ2V0LnZhbHVlfSl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5yZWdpc3RlcihlKX0+IFJlZ2lzdGVyIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvVG9Mb2dpbigpfT4gTG9naW4gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFKQTtBQWxDQTtBQTRDQTs7OztBQTVFQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/Registerscreen.js\n");

/***/ })

})