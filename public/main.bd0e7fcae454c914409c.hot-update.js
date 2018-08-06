webpackHotUpdate("main",{

/***/ "./frontend/tradingtools.js":
/*!**********************************!*\
  !*** ./frontend/tradingtools.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ \"./frontend/App.css\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Registerscreen = __webpack_require__(/*! ./Registerscreen */ \"./frontend/Registerscreen.js\");\n\nvar _Registerscreen2 = _interopRequireDefault(_Registerscreen);\n\nvar _Loginscreen = __webpack_require__(/*! ./Loginscreen */ \"./frontend/Loginscreen.js\");\n\nvar _Loginscreen2 = _interopRequireDefault(_Loginscreen);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tools = function (_React$Component) {\n  _inherits(Tools, _React$Component);\n\n  function Tools(props) {\n    _classCallCheck(this, Tools);\n\n    var _this = _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));\n\n    _this.state = {\n      history: [],\n      arr: [],\n      array: [],\n      search: '',\n      sorting: 'AlphaUp',\n      personalHistory: [],\n      personal: [],\n      personalIndex: [],\n      sortingPersonal: 'AlphaUp',\n      personalsearch: ''\n    };\n    return _this;\n  }\n\n  _createClass(Tools, [{\n    key: 'currencyAdded',\n    value: function currencyAdded(obj) {\n      alert('You\\'re now tracking ' + obj.symbol + '.');\n      this.props.socket.emit('add', obj.symbol);\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      for (var i = 0; i < this.state.personalIndex.length; i++) {\n        var self = this;\n        self.setState({\n          personal: self.state.personal.concat(array[self.state.personalIndex[i]]),\n          personalHistory: self.state.personalHistory.concat([self.state.history[0][self.state.personalIndex[i]]])\n        });\n      }\n    }\n\n    // currencyRemoved(obj) {\n    //   alert(`You're no longer tracking ${obj.symbol}.`)\n    //   this.props.socket.emit('remove', [obj])\n    // }\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var intervalID = setInterval(function () {\n        // fetch('https://api.hitbtc.com/api/2/public/ticker', {\n        //   mode: 'cors'\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json',\n        //   }\n        // })\n        // .then((resp)=>{\n        //   this.setState({\n        //     arr: resp\n        //   })\n        // })\n        // .catch((err)=>console.log(\"ERROR:\", err))\n        (0, _axios2.default)(\"http://localhost:3000/currency\", {\n          method: 'GET'\n        })\n        // .then((res)=>res.json())\n        .then(function (resp) {\n          var data = resp.data.sort(function (a, b) {\n            return a.symbol > b.symbol;\n          });\n          //console.log(resp.data)\n          _this2.setState({\n            arr: data,\n            history: _this2.state.history.concat([data])\n          });\n          if (_this2.state.history.length > 17280) {\n            _this2.setState({\n              history: _this2.state.history.slice(1)\n            });\n          }\n        }).catch(function (err) {\n          console.log('ERROR:', err);\n        });\n      }, 1000);\n\n      var self = this;\n      this.props.socket.on('additionSuccess', function (data) {\n        self.setState({\n          personalIndex: self.state.personalIndex.concat(data)\n        });\n        console.log(data);\n      });\n      for (var i = 0; i < personalIndex.length; i++) {\n        for (var j = 0; j < arr.length; j++) {\n          if (arr[j].symbol === personalIndex[i]) {\n            self.setState({\n              personal: this.state.personal.concat()\n            });\n          }\n        }\n      }\n    }\n\n    // this.props.socket.on('removalSuccess', function(data){\n    //   this.setState({\n    //     personal: this.state.personal.splice(data, 1)\n    //   })\n    // })\n    // }\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var array = this.state.arr.map(function (m, i) {\n        return {\n          symbol: m.symbol,\n          currVolume: m.volume,\n          ogVolume: _this3.state.history[0][i].volume\n        };\n      });\n      array = array.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      array = array.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.search.length) {\n        array = array.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.search.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sorting === 'AlphaUp') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'AlphaDown') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeUp') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeDown') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'changeVolUp') {\n        array = array.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sorting === 'changeVolDown') {\n        array = array.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n\n      //Personalized currencies:\n\n      var personal = this.state.personal.map(function (m, i) {\n        return {\n          symbol: m.symbol,\n          currVolume: m.volume,\n          ogVolume: _this3.state.personalHistory[0][i].volume\n        };\n      });\n      personal = personal.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      personal = personal.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.personalsearch.length) {\n        personal = personal.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.personalsearch.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sortingPersonal === 'AlphaUp') {\n        personal = personal.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'AlphaDown') {\n        personal = personal.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'VolumeUp') {\n        personal = personal.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'VolumeDown') {\n        personal = personal.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'changeVolUp') {\n        personal = personal.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sortingPersonal === 'changeVolDown') {\n        personal = personal.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(0);\n              } },\n            'Home'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(1);\n              } },\n            'About Crypto'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(2);\n              } },\n            'How To Start'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(3);\n              } },\n            'Trading Techniques'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(4);\n              } },\n            'Trading Tools'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(5);\n              } },\n            'FAQ'\n          )\n        ),\n        this.props.account && this.props.loggedin ? _react2.default.createElement(\n          'div',\n          { className: 'currencydisplay' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            _react2.default.createElement(\n              'p',\n              null,\n              ' ',\n              array.length,\n              ' total currencies. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ search: e.target.value });\n              }, placeholder: 'Search' }),\n            array.map(function (obj, i) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { key: i, onClick: function onClick() {\n                      return _this3.currencyAdded(obj);\n                    } },\n                  'Add To Personalized View'\n                )\n              );\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'personalcontainer' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'You are personally tracking ',\n              personal.length,\n              ' currencies that match your query. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ personalsearch: e.target.value });\n              }, placeholder: 'Search' }),\n            this.state.personal.map(function (obj) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.currencyRemoved(obj);\n                    } },\n                  'Remove from Personalized View'\n                )\n              );\n            })\n          )\n        ) : this.props.account ? _react2.default.createElement(_Loginscreen2.default, { socket: this.props.socket,\n          goToTools: this.props.goToTools,\n          goToRegister: this.props.goToRegister,\n          account: this.props.account,\n          loggedin: this.props.loggedin\n        }) : _react2.default.createElement(_Registerscreen2.default, { goToLogin: this.props.goToLogin, socket: this.props.socket })\n      );\n    }\n  }]);\n\n  return Tools;\n}(_react2.default.Component);\n\n// export default Tools;\n\n\nexports.default = Tools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90cmFkaW5ndG9vbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvdHJhZGluZ3Rvb2xzLmpzPzBhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3RlcnNjcmVlbic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbnNjcmVlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgIGFycjogW10sXG4gICAgICAgYXJyYXk6IFtdLFxuICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgc29ydGluZzogJ0FscGhhVXAnLFxuICAgICAgIHBlcnNvbmFsSGlzdG9yeTogW10sXG4gICAgICAgcGVyc29uYWw6IFtdLFxuICAgICAgIHBlcnNvbmFsSW5kZXg6IFtdLFxuICAgICAgIHNvcnRpbmdQZXJzb25hbDogJ0FscGhhVXAnLFxuICAgICAgIHBlcnNvbmFsc2VhcmNoOiAnJyxcbiAgICB9XG4gIH1cblxuICBjdXJyZW5jeUFkZGVkKG9iaikge1xuICAgIGFsZXJ0KGBZb3UncmUgbm93IHRyYWNraW5nICR7b2JqLnN5bWJvbH0uYClcbiAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdhZGQnLCBvYmouc3ltYm9sKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5wZXJzb25hbEluZGV4Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIHBlcnNvbmFsOiBzZWxmLnN0YXRlLnBlcnNvbmFsLmNvbmNhdChhcnJheVtzZWxmLnN0YXRlLnBlcnNvbmFsSW5kZXhbaV1dKSxcbiAgICAgICAgcGVyc29uYWxIaXN0b3J5OiBzZWxmLnN0YXRlLnBlcnNvbmFsSGlzdG9yeS5jb25jYXQoW3NlbGYuc3RhdGUuaGlzdG9yeVswXVtzZWxmLnN0YXRlLnBlcnNvbmFsSW5kZXhbaV1dXSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gY3VycmVuY3lSZW1vdmVkKG9iaikge1xuICAvLyAgIGFsZXJ0KGBZb3UncmUgbm8gbG9uZ2VyIHRyYWNraW5nICR7b2JqLnN5bWJvbH0uYClcbiAgLy8gICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdyZW1vdmUnLCBbb2JqXSlcbiAgLy8gfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLmhpdGJ0Yy5jb20vYXBpLzIvcHVibGljL3RpY2tlcicsIHtcbiAgICAvLyAgIG1vZGU6ICdjb3JzJ1xuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKChyZXNwKT0+e1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIGFycjogcmVzcFxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5sb2coXCJFUlJPUjpcIiwgZXJyKSlcbiAgICBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jdXJyZW5jeVwiLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICAvLyAudGhlbigocmVzKT0+cmVzLmpzb24oKSlcbiAgICAudGhlbigocmVzcCk9PntcbiAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLnNvcnQoKGEsIGIpPT4gYS5zeW1ib2wgPiBiLnN5bWJvbClcbiAgICAvL2NvbnNvbGUubG9nKHJlc3AuZGF0YSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXJyOiBkYXRhLFxuICAgICAgICAgIGhpc3Rvcnk6IHRoaXMuc3RhdGUuaGlzdG9yeS5jb25jYXQoW2RhdGFdKVxuICAgICAgICB9KVxuICAgICAgICBpZih0aGlzLnN0YXRlLmhpc3RvcnkubGVuZ3RoID4gMTcyODApe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGlzdG9yeTogdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOicsIGVycilcbiAgICB9KTtcbn0sIDEwMDApXG5cbnZhciBzZWxmID0gdGhpc1xudGhpcy5wcm9wcy5zb2NrZXQub24oJ2FkZGl0aW9uU3VjY2VzcycsIGZ1bmN0aW9uKGRhdGEpe1xuICBzZWxmLnNldFN0YXRlKHtcbiAgICBwZXJzb25hbEluZGV4OiBzZWxmLnN0YXRlLnBlcnNvbmFsSW5kZXguY29uY2F0KGRhdGEpXG4gIH0pXG4gIGNvbnNvbGUubG9nKGRhdGEpXG59KVxuZm9yKHZhciBpID0gMDsgaSA8IHBlcnNvbmFsSW5kZXgubGVuZ3RoOyBpKyspe1xuICBmb3IodmFyIGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKXtcbiAgaWYoYXJyW2pdLnN5bWJvbCA9PT0gcGVyc29uYWxJbmRleFtpXSl7XG4gIHNlbGYuc2V0U3RhdGUoe1xuICAgIHBlcnNvbmFsOiB0aGlzLnN0YXRlLnBlcnNvbmFsLmNvbmNhdCgpXG4gIH0pXG59XG59XG59XG59XG5cbi8vIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdyZW1vdmFsU3VjY2VzcycsIGZ1bmN0aW9uKGRhdGEpe1xuLy8gICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICBwZXJzb25hbDogdGhpcy5zdGF0ZS5wZXJzb25hbC5zcGxpY2UoZGF0YSwgMSlcbi8vICAgfSlcbi8vIH0pXG4vLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhcnJheSA9IHRoaXMuc3RhdGUuYXJyLm1hcCgobSwgaSk9PiAoe1xuICAgICAgc3ltYm9sOiBtLnN5bWJvbCxcbiAgICAgIGN1cnJWb2x1bWU6IG0udm9sdW1lLFxuICAgICAgb2dWb2x1bWU6IHRoaXMuc3RhdGUuaGlzdG9yeVswXVtpXS52b2x1bWUsXG4gICAgfSkpXG4gICAgYXJyYXkgPSBhcnJheS5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoKGEpID0+ICFpc05hTihhLmN1cnJWb2x1bWUvYS5vZ1ZvbHVtZSkpXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICBhcnJheSA9IGFycmF5LmZpbHRlcigoYSk9PiBhLnN5bWJvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFVcCcpIHtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAtMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFEb3duJykge1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgPyAtMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAxIDogMCk7fSApXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVVcCcpe1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoTnVtYmVyKGEuY3VyclZvbHVtZSkgPiBOdW1iZXIoYi5jdXJyVm9sdW1lKSkgPyAtMSA6ICgoTnVtYmVyKGIuY3VyclZvbHVtZSkgPiBOdW1iZXIoYS5jdXJyVm9sdW1lKSkgPyAxIDogMCk7fSApXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVEb3duJyl7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChOdW1iZXIoYS5jdXJyVm9sdW1lKSA+IE51bWJlcihiLmN1cnJWb2x1bWUpKSA/IDEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gLTEgOiAwKTt9IClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbFVwJyl7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoKGEsIGIpPT4gKGIuY3VyclZvbHVtZS1iLm9nVm9sdW1lKS8oYi5vZ1ZvbHVtZSkgLSAoYS5jdXJyVm9sdW1lLWEub2dWb2x1bWUpLyhhLm9nVm9sdW1lKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbERvd24nKXtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydCgoYiwgYSk9PiAoYi5jdXJyVm9sdW1lLWIub2dWb2x1bWUpLyhiLm9nVm9sdW1lKSAtIChhLmN1cnJWb2x1bWUtYS5vZ1ZvbHVtZSkvKGEub2dWb2x1bWUpKVxuICAgIH1cblxuICAgIC8vUGVyc29uYWxpemVkIGN1cnJlbmNpZXM6XG5cbiAgICAgICAgICAgIGxldCBwZXJzb25hbCA9IHRoaXMuc3RhdGUucGVyc29uYWwubWFwKChtLCBpKT0+ICh7XG4gICAgICAgICAgc3ltYm9sOiBtLnN5bWJvbCxcbiAgICAgICAgICBjdXJyVm9sdW1lOiBtLnZvbHVtZSxcbiAgICAgICAgICBvZ1ZvbHVtZTogdGhpcy5zdGF0ZS5wZXJzb25hbEhpc3RvcnlbMF1baV0udm9sdW1lLFxuICAgICAgICB9KSlcbiAgICAgICAgcGVyc29uYWwgPSBwZXJzb25hbC5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgICAgIHBlcnNvbmFsID0gcGVyc29uYWwuZmlsdGVyKChhKSA9PiAhaXNOYU4oYS5jdXJyVm9sdW1lL2Eub2dWb2x1bWUpKVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBlcnNvbmFsc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgIHBlcnNvbmFsID0gcGVyc29uYWwuZmlsdGVyKChhKT0+IGEuc3ltYm9sLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLnBlcnNvbmFsc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nUGVyc29uYWwgPT09ICdBbHBoYVVwJykge1xuICAgICAgICAgIHBlcnNvbmFsID0gcGVyc29uYWwuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAtMSA6IDApO30gKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmdQZXJzb25hbCA9PT0gJ0FscGhhRG93bicpIHtcbiAgICAgICAgICBwZXJzb25hbCA9IHBlcnNvbmFsLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChhLnN5bWJvbCA+IGIuc3ltYm9sKSA/IC0xIDogKChiLnN5bWJvbCA+IGEuc3ltYm9sKSA/IDEgOiAwKTt9IClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nUGVyc29uYWwgPT09ICdWb2x1bWVVcCcpe1xuICAgICAgICAgIHBlcnNvbmFsID0gcGVyc29uYWwuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKE51bWJlcihhLmN1cnJWb2x1bWUpID4gTnVtYmVyKGIuY3VyclZvbHVtZSkpID8gLTEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gMSA6IDApO30gKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmdQZXJzb25hbCA9PT0gJ1ZvbHVtZURvd24nKXtcbiAgICAgICAgICBwZXJzb25hbCA9IHBlcnNvbmFsLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChOdW1iZXIoYS5jdXJyVm9sdW1lKSA+IE51bWJlcihiLmN1cnJWb2x1bWUpKSA/IDEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gLTEgOiAwKTt9IClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nUGVyc29uYWwgPT09ICdjaGFuZ2VWb2xVcCcpe1xuICAgICAgICAgIHBlcnNvbmFsID0gcGVyc29uYWwuc29ydCgoYSwgYik9PiAoYi5jdXJyVm9sdW1lLWIub2dWb2x1bWUpLyhiLm9nVm9sdW1lKSAtIChhLmN1cnJWb2x1bWUtYS5vZ1ZvbHVtZSkvKGEub2dWb2x1bWUpKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmdQZXJzb25hbCA9PT0gJ2NoYW5nZVZvbERvd24nKXtcbiAgICAgICAgICBwZXJzb25hbCA9IHBlcnNvbmFsLnNvcnQoKGIsIGEpPT4gKGIuY3VyclZvbHVtZS1iLm9nVm9sdW1lKS8oYi5vZ1ZvbHVtZSkgLSAoYS5jdXJyVm9sdW1lLWEub2dWb2x1bWUpLyhhLm9nVm9sdW1lKSlcbiAgICAgICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgwKX0+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgxKX0+QWJvdXQgQ3J5cHRvPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDIpfT5Ib3cgVG8gU3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVkaXJlY3QoMyl9PlRyYWRpbmcgVGVjaG5pcXVlczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg0KX0+VHJhZGluZyBUb29sczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg1KX0+RkFRPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ICh0aGlzLnByb3BzLmFjY291bnQgJiYgdGhpcy5wcm9wcy5sb2dnZWRpbikgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lkaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8cD4ge2FycmF5Lmxlbmd0aH0gdG90YWwgY3VycmVuY2llcy4gPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnRpbmcnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkFscGhhYmV0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmc6ICdBbHBoYVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ0FscGhhRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5DdXJyZW50IFZvbHVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ1ZvbHVtZVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnVm9sdW1lRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q2hhbmdlIGluIFZvbHVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ2NoYW5nZVZvbFVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnY2hhbmdlVm9sRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZpbHRlcicgb25DaGFuZ2U9eyhlKT0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZS50YXJnZXQudmFsdWV9KX0gcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgICAge2FycmF5Lm1hcCgob2JqLCBpKT0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluZ1wiIGtleT17b2JqLnN5bWJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wnPntvYmouc3ltYm9sfTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IEN1cnJlbnQgVm9sdW1lOiB7b2JqLmN1cnJWb2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclRoaW5nJz4gQ2hhbmdlIGluIHZvbHVtZSBpbiBwYXN0IDI0IGhvdXJzOiAleygoKG9iai5jdXJyVm9sdW1lLW9iai5vZ1ZvbHVtZSkvKG9iai5vZ1ZvbHVtZSkpKiAxMDApLnRvRml4ZWQoMyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9eygpPT50aGlzLmN1cnJlbmN5QWRkZWQob2JqKX0+QWRkIFRvIFBlcnNvbmFsaXplZCBWaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWxjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPllvdSBhcmUgcGVyc29uYWxseSB0cmFja2luZyB7cGVyc29uYWwubGVuZ3RofSBjdXJyZW5jaWVzIHRoYXQgbWF0Y2ggeW91ciBxdWVyeS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29ydGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BbHBoYWJldGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmdQZXJzb25hbDogJ0FscGhhVXAnfSl9Pl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmdQZXJzb25hbDogJ0FscGhhRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q3VycmVudCBWb2x1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnVm9sdW1lVXAnfSl9Pl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnVm9sdW1lRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkNoYW5nZSBpbiBWb2x1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnY2hhbmdlVm9sVXAnfSl9Pl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnY2hhbmdlVm9sRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZmlsdGVyJyBvbkNoYW5nZT17KGUpPT4gdGhpcy5zZXRTdGF0ZSh7cGVyc29uYWxzZWFyY2g6IGUudGFyZ2V0LnZhbHVlfSl9IHBsYWNlaG9sZGVyPSdTZWFyY2gnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGVyc29uYWwubWFwKChvYmopPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpbmdcIiBrZXk9e29iai5zeW1ib2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N5bWJvbCc+e29iai5zeW1ib2x9OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBDdXJyZW50IFZvbHVtZToge29iai5jdXJyVm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyVGhpbmcnPiBDaGFuZ2UgaW4gdm9sdW1lIGluIHBhc3QgMjQgaG91cnM6ICV7KCgob2JqLmN1cnJWb2x1bWUtb2JqLm9nVm9sdW1lKS8ob2JqLm9nVm9sdW1lKSkqIDEwMCkudG9GaXhlZCgzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5jdXJyZW5jeVJlbW92ZWQob2JqKX0+UmVtb3ZlIGZyb20gUGVyc29uYWxpemVkIFZpZXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogKHRoaXMucHJvcHMuYWNjb3VudCkgPyA8TG9naW4gc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH1cbiAgICAgICAgICAgIGdvVG9Ub29scz17dGhpcy5wcm9wcy5nb1RvVG9vbHN9XG4gICAgICAgICAgICBnb1RvUmVnaXN0ZXI9e3RoaXMucHJvcHMuZ29Ub1JlZ2lzdGVyfVxuICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50fVxuICAgICAgICAgICAgbG9nZ2VkaW49e3RoaXMucHJvcHMubG9nZ2VkaW59XG4gICAgICAgICAgICAvPiA6IDxSZWdpc3RlciBnb1RvTG9naW49e3RoaXMucHJvcHMuZ29Ub0xvZ2lufSBzb2NrZXQ9e3RoaXMucHJvcHMuc29ja2V0fS8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVG9vbHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFGQTtBQWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBOUJBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0RUE7QUErRUE7Ozs7QUEvT0E7QUFDQTtBQWlQQTtBQUNBO0FBQ0E7QUFwUEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/tradingtools.js\n");

/***/ })

})