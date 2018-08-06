webpackHotUpdate("main",{

/***/ "./frontend/tradingtools.js":
/*!**********************************!*\
  !*** ./frontend/tradingtools.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ \"./frontend/App.css\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Registerscreen = __webpack_require__(/*! ./Registerscreen */ \"./frontend/Registerscreen.js\");\n\nvar _Registerscreen2 = _interopRequireDefault(_Registerscreen);\n\nvar _Loginscreen = __webpack_require__(/*! ./Loginscreen */ \"./frontend/Loginscreen.js\");\n\nvar _Loginscreen2 = _interopRequireDefault(_Loginscreen);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tools = function (_React$Component) {\n  _inherits(Tools, _React$Component);\n\n  function Tools(props) {\n    _classCallCheck(this, Tools);\n\n    var _this = _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));\n\n    _this.state = {\n      history: [],\n      arr: [],\n      array: [],\n      search: '',\n      sorting: 'AlphaUp',\n      personalHistory: [],\n      personal: [],\n      sortingPersonal: 'AlphaUp',\n      personalsearch: ''\n    };\n    return _this;\n  }\n\n  _createClass(Tools, [{\n    key: 'currencyAdded',\n    value: function currencyAdded(obj) {\n      alert('You\\'re now tracking ' + obj.symbol + '!');\n      this.props.socket.emit('add', obj.symbol);\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var intervalID = setInterval(function () {\n        // fetch('https://api.hitbtc.com/api/2/public/ticker', {\n        //   mode: 'cors'\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json',\n        //   }\n        // })\n        // .then((resp)=>{\n        //   this.setState({\n        //     arr: resp\n        //   })\n        // })\n        // .catch((err)=>console.log(\"ERROR:\", err))\n        (0, _axios2.default)(\"http://localhost:3000/currency\", {\n          method: 'GET'\n        })\n        // .then((res)=>res.json())\n        .then(function (resp) {\n          var data = resp.data.sort(function (a, b) {\n            return a.symbol > b.symbol;\n          });\n          //console.log(resp.data)\n          _this2.setState({\n            arr: data,\n            history: _this2.state.history.concat([data])\n          });\n          if (_this2.state.history.length > 17280) {\n            _this2.setState({\n              history: _this2.state.history.slice(1)\n            });\n          }\n        }).catch(function (err) {\n          console.log('ERROR:', err);\n        });\n      }, 1000);\n\n      this.props.socket.on('additionSuccess', function (data) {\n        this.state.personal.push(user.FocusedCurrencies);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var array = this.state.arr.map(function (m, i) {\n        return {\n          symbol: m.symbol,\n          currVolume: m.volume,\n          ogVolume: _this3.state.history[0][i].volume\n        };\n      });\n      array = array.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      array = array.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.search.length) {\n        array = array.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.search.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sorting === 'AlphaUp') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'AlphaDown') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeUp') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeDown') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'changeVolUp') {\n        array = array.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sorting === 'changeVolDown') {\n        array = array.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n\n      //Personalized currencies:\n\n      var personalArray = this.state.personal.map(function (m, i) {\n        return {\n          symbol: m.symbol,\n          currVolume: m.volume,\n          ogVolume: _this3.state.personalHistory[0][i].volume\n        };\n      });\n      personalArray = personalArray.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      personalArray = personalArray.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.search.length) {\n        array = array.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.search.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sorting === 'AlphaUp') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'AlphaDown') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeUp') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeDown') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'changeVolUp') {\n        array = array.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sorting === 'changeVolDown') {\n        array = array.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(0);\n              } },\n            'Home'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(1);\n              } },\n            'About Crypto'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(2);\n              } },\n            'How To Start'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(3);\n              } },\n            'Trading Techniques'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(4);\n              } },\n            'Trading Tools'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(5);\n              } },\n            'FAQ'\n          )\n        ),\n        this.props.account && this.props.loggedin ? _react2.default.createElement(\n          'div',\n          { className: 'currencydisplay' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            _react2.default.createElement(\n              'p',\n              null,\n              ' ',\n              array.length,\n              ' total currencies. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ search: e.target.value });\n              }, placeholder: 'Search' }),\n            array.map(function (obj) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.currencyAdded(obj);\n                    } },\n                  'Add To Personalized View'\n                )\n              );\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'personalcontainer' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'You are personally tracking ',\n              array.length,\n              ' currencies that match your query. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ personalsearch: e.target.value });\n              }, placeholder: 'Search' }),\n            array.map(function (obj) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.currencyAdded(obj);\n                    } },\n                  'Add To Personalized View'\n                )\n              );\n            })\n          )\n        ) : this.props.account ? _react2.default.createElement(_Loginscreen2.default, { socket: this.props.socket,\n          goToTools: this.props.goToTools,\n          goToRegister: this.props.goToRegister,\n          account: this.props.account,\n          loggedin: this.props.loggedin\n        }) : _react2.default.createElement(_Registerscreen2.default, { goToLogin: this.props.goToLogin, socket: this.props.socket })\n      );\n    }\n  }]);\n\n  return Tools;\n}(_react2.default.Component);\n\n// export default Tools;\n\n\nexports.default = Tools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90cmFkaW5ndG9vbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvdHJhZGluZ3Rvb2xzLmpzPzBhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3RlcnNjcmVlbic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbnNjcmVlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgIGFycjogW10sXG4gICAgICAgYXJyYXk6IFtdLFxuICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgc29ydGluZzogJ0FscGhhVXAnLFxuICAgICAgIHBlcnNvbmFsSGlzdG9yeTogW10sXG4gICAgICAgcGVyc29uYWw6IFtdLFxuICAgICAgIHNvcnRpbmdQZXJzb25hbDogJ0FscGhhVXAnLFxuICAgICAgIHBlcnNvbmFsc2VhcmNoOiAnJyxcbiAgICB9XG4gIH1cblxuICBjdXJyZW5jeUFkZGVkKG9iaikge1xuICAgIGFsZXJ0KGBZb3UncmUgbm93IHRyYWNraW5nICR7b2JqLnN5bWJvbH0hYClcbiAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdhZGQnLCBvYmouc3ltYm9sKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLmhpdGJ0Yy5jb20vYXBpLzIvcHVibGljL3RpY2tlcicsIHtcbiAgICAvLyAgIG1vZGU6ICdjb3JzJ1xuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKChyZXNwKT0+e1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIGFycjogcmVzcFxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5sb2coXCJFUlJPUjpcIiwgZXJyKSlcbiAgICBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jdXJyZW5jeVwiLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICAvLyAudGhlbigocmVzKT0+cmVzLmpzb24oKSlcbiAgICAudGhlbigocmVzcCk9PntcbiAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLnNvcnQoKGEsIGIpPT4gYS5zeW1ib2wgPiBiLnN5bWJvbClcbiAgICAvL2NvbnNvbGUubG9nKHJlc3AuZGF0YSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXJyOiBkYXRhLFxuICAgICAgICAgIGhpc3Rvcnk6IHRoaXMuc3RhdGUuaGlzdG9yeS5jb25jYXQoW2RhdGFdKVxuICAgICAgICB9KVxuICAgICAgICBpZih0aGlzLnN0YXRlLmhpc3RvcnkubGVuZ3RoID4gMTcyODApe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGlzdG9yeTogdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOicsIGVycilcbiAgICB9KTtcbn0sIDEwMDApXG5cbiAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2FkZGl0aW9uU3VjY2VzcycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgIHRoaXMuc3RhdGUucGVyc29uYWwucHVzaCh1c2VyLkZvY3VzZWRDdXJyZW5jaWVzKTtcbiAgfSlcbn1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgYXJyYXkgPSB0aGlzLnN0YXRlLmFyci5tYXAoKG0sIGkpPT4gKHtcbiAgICAgIHN5bWJvbDogbS5zeW1ib2wsXG4gICAgICBjdXJyVm9sdW1lOiBtLnZvbHVtZSxcbiAgICAgIG9nVm9sdW1lOiB0aGlzLnN0YXRlLmhpc3RvcnlbMF1baV0udm9sdW1lLFxuICAgIH0pKVxuICAgIGFycmF5ID0gYXJyYXkuc29ydCgoYSwgYik9PiAoYi5jdXJyVm9sdW1lLWIub2dWb2x1bWUpLyhiLm9nVm9sdW1lKSAtIChhLmN1cnJWb2x1bWUtYS5vZ1ZvbHVtZSkvKGEub2dWb2x1bWUpKVxuICAgIGFycmF5ID0gYXJyYXkuZmlsdGVyKChhKSA9PiAhaXNOYU4oYS5jdXJyVm9sdW1lL2Eub2dWb2x1bWUpKVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoLmxlbmd0aCkge1xuICAgICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoKGEpPT4gYS5zeW1ib2wudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ0FscGhhVXAnKSB7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChhLnN5bWJvbCA+IGIuc3ltYm9sKSA/IDEgOiAoKGIuc3ltYm9sID4gYS5zeW1ib2wpID8gLTEgOiAwKTt9IClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ0FscGhhRG93bicpIHtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gLTEgOiAoKGIuc3ltYm9sID4gYS5zeW1ib2wpID8gMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnVm9sdW1lVXAnKXtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKE51bWJlcihhLmN1cnJWb2x1bWUpID4gTnVtYmVyKGIuY3VyclZvbHVtZSkpID8gLTEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnVm9sdW1lRG93bicpe1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoTnVtYmVyKGEuY3VyclZvbHVtZSkgPiBOdW1iZXIoYi5jdXJyVm9sdW1lKSkgPyAxIDogKChOdW1iZXIoYi5jdXJyVm9sdW1lKSA+IE51bWJlcihhLmN1cnJWb2x1bWUpKSA/IC0xIDogMCk7fSApXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdjaGFuZ2VWb2xVcCcpe1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdjaGFuZ2VWb2xEb3duJyl7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoKGIsIGEpPT4gKGIuY3VyclZvbHVtZS1iLm9nVm9sdW1lKS8oYi5vZ1ZvbHVtZSkgLSAoYS5jdXJyVm9sdW1lLWEub2dWb2x1bWUpLyhhLm9nVm9sdW1lKSlcbiAgICB9XG5cbiAgICAvL1BlcnNvbmFsaXplZCBjdXJyZW5jaWVzOlxuXG4gICAgICAgIGxldCBwZXJzb25hbEFycmF5ID0gdGhpcy5zdGF0ZS5wZXJzb25hbC5tYXAoKG0sIGkpPT4gKHtcbiAgICAgICAgICBzeW1ib2w6IG0uc3ltYm9sLFxuICAgICAgICAgIGN1cnJWb2x1bWU6IG0udm9sdW1lLFxuICAgICAgICAgIG9nVm9sdW1lOiB0aGlzLnN0YXRlLnBlcnNvbmFsSGlzdG9yeVswXVtpXS52b2x1bWUsXG4gICAgICAgIH0pKVxuICAgICAgICBwZXJzb25hbEFycmF5ID0gcGVyc29uYWxBcnJheS5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgICAgIHBlcnNvbmFsQXJyYXkgPSBwZXJzb25hbEFycmF5LmZpbHRlcigoYSkgPT4gIWlzTmFOKGEuY3VyclZvbHVtZS9hLm9nVm9sdW1lKSlcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoKGEpPT4gYS5zeW1ib2wudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFVcCcpIHtcbiAgICAgICAgICBhcnJheSA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChhLnN5bWJvbCA+IGIuc3ltYm9sKSA/IDEgOiAoKGIuc3ltYm9sID4gYS5zeW1ib2wpID8gLTEgOiAwKTt9IClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFEb3duJykge1xuICAgICAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gLTEgOiAoKGIuc3ltYm9sID4gYS5zeW1ib2wpID8gMSA6IDApO30gKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVVcCcpe1xuICAgICAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKE51bWJlcihhLmN1cnJWb2x1bWUpID4gTnVtYmVyKGIuY3VyclZvbHVtZSkpID8gLTEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gMSA6IDApO30gKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVEb3duJyl7XG4gICAgICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoTnVtYmVyKGEuY3VyclZvbHVtZSkgPiBOdW1iZXIoYi5jdXJyVm9sdW1lKSkgPyAxIDogKChOdW1iZXIoYi5jdXJyVm9sdW1lKSA+IE51bWJlcihhLmN1cnJWb2x1bWUpKSA/IC0xIDogMCk7fSApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbFVwJyl7XG4gICAgICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbERvd24nKXtcbiAgICAgICAgICBhcnJheSA9IGFycmF5LnNvcnQoKGIsIGEpPT4gKGIuY3VyclZvbHVtZS1iLm9nVm9sdW1lKS8oYi5vZ1ZvbHVtZSkgLSAoYS5jdXJyVm9sdW1lLWEub2dWb2x1bWUpLyhhLm9nVm9sdW1lKSlcbiAgICAgICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgwKX0+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgxKX0+QWJvdXQgQ3J5cHRvPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDIpfT5Ib3cgVG8gU3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVkaXJlY3QoMyl9PlRyYWRpbmcgVGVjaG5pcXVlczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg0KX0+VHJhZGluZyBUb29sczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg1KX0+RkFRPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ICh0aGlzLnByb3BzLmFjY291bnQgJiYgdGhpcy5wcm9wcy5sb2dnZWRpbikgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lkaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8cD4ge2FycmF5Lmxlbmd0aH0gdG90YWwgY3VycmVuY2llcy4gPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnRpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkFscGhhYmV0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmc6ICdBbHBoYVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ0FscGhhRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXJyZW50IFZvbHVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ1ZvbHVtZVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnVm9sdW1lRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q2hhbmdlIGluIFZvbHVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ2NoYW5nZVZvbFVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnY2hhbmdlVm9sRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZpbHRlcicgb25DaGFuZ2U9eyhlKT0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZS50YXJnZXQudmFsdWV9KX0gcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgICAge2FycmF5Lm1hcCgob2JqKT0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluZ1wiIGtleT17b2JqLnN5bWJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wnPntvYmouc3ltYm9sfTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IEN1cnJlbnQgVm9sdW1lOiB7b2JqLmN1cnJWb2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclRoaW5nJz4gQ2hhbmdlIGluIHZvbHVtZSBpbiBwYXN0IDI0IGhvdXJzOiAleygoKG9iai5jdXJyVm9sdW1lLW9iai5vZ1ZvbHVtZSkvKG9iai5vZ1ZvbHVtZSkpKiAxMDApLnRvRml4ZWQoMyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5jdXJyZW5jeUFkZGVkKG9iail9PkFkZCBUbyBQZXJzb25hbGl6ZWQgVmlldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbmFsY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Zb3UgYXJlIHBlcnNvbmFsbHkgdHJhY2tpbmcge2FycmF5Lmxlbmd0aH0gY3VycmVuY2llcyB0aGF0IG1hdGNoIHlvdXIgcXVlcnkuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QWxwaGFiZXRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnQWxwaGFVcCd9KX0+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ0FscGhhRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q3VycmVudCBWb2x1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ1ZvbHVtZVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmc6ICdWb2x1bWVEb3duJ30pfT52PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q2hhbmdlIGluIFZvbHVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnY2hhbmdlVm9sVXAnfSl9Pl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ2NoYW5nZVZvbERvd24nfSl9PnY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZpbHRlcicgb25DaGFuZ2U9eyhlKT0+IHRoaXMuc2V0U3RhdGUoe3BlcnNvbmFsc2VhcmNoOiBlLnRhcmdldC52YWx1ZX0pfSBwbGFjZWhvbGRlcj0nU2VhcmNoJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnJheS5tYXAoKG9iaik9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluZ1wiIGtleT17b2JqLnN5bWJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ltYm9sJz57b2JqLnN5bWJvbH06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IEN1cnJlbnQgVm9sdW1lOiB7b2JqLmN1cnJWb2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3RoZXJUaGluZyc+IENoYW5nZSBpbiB2b2x1bWUgaW4gcGFzdCAyNCBob3VyczogJXsoKChvYmouY3VyclZvbHVtZS1vYmoub2dWb2x1bWUpLyhvYmoub2dWb2x1bWUpKSogMTAwKS50b0ZpeGVkKDMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmN1cnJlbmN5QWRkZWQob2JqKX0+QWRkIFRvIFBlcnNvbmFsaXplZCBWaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICh0aGlzLnByb3BzLmFjY291bnQpID8gPExvZ2luIHNvY2tldD17dGhpcy5wcm9wcy5zb2NrZXR9XG4gICAgICAgICAgICBnb1RvVG9vbHM9e3RoaXMucHJvcHMuZ29Ub1Rvb2xzfVxuICAgICAgICAgICAgZ29Ub1JlZ2lzdGVyPXt0aGlzLnByb3BzLmdvVG9SZWdpc3Rlcn1cbiAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuYWNjb3VudH1cbiAgICAgICAgICAgIGxvZ2dlZGluPXt0aGlzLnByb3BzLmxvZ2dlZGlufVxuICAgICAgICAgICAgLz4gOiA8UmVnaXN0ZXIgZ29Ub0xvZ2luPXt0aGlzLnByb3BzLmdvVG9Mb2dpbn0gc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH0vPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRvb2xzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUZBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBOUJBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0RUE7QUErRUE7Ozs7QUE3TUE7QUFDQTtBQStNQTtBQUNBO0FBQ0E7QUFsTkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/tradingtools.js\n");

/***/ })

})