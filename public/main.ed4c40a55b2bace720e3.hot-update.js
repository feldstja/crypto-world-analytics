webpackHotUpdate("main",{

/***/ "./frontend/tradingtools.js":
/*!**********************************!*\
  !*** ./frontend/tradingtools.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ \"./frontend/App.css\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Registerscreen = __webpack_require__(/*! ./Registerscreen */ \"./frontend/Registerscreen.js\");\n\nvar _Registerscreen2 = _interopRequireDefault(_Registerscreen);\n\nvar _Loginscreen = __webpack_require__(/*! ./Loginscreen */ \"./frontend/Loginscreen.js\");\n\nvar _Loginscreen2 = _interopRequireDefault(_Loginscreen);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tools = function (_React$Component) {\n  _inherits(Tools, _React$Component);\n\n  function Tools(props) {\n    _classCallCheck(this, Tools);\n\n    var _this = _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));\n\n    _this.state = {\n      history: [],\n      arr: [],\n      array: [],\n      search: '',\n      sorting: 'AlphaUp',\n      personalHistory: [],\n      personal: [],\n      personalIndex: [],\n      sortingPersonal: 'AlphaUp',\n      personalsearch: ''\n    };\n    return _this;\n  }\n\n  _createClass(Tools, [{\n    key: 'currencyAdded',\n    value: function currencyAdded(obj) {\n      alert('You\\'re now tracking ' + obj.symbol + '.');\n      this.props.socket.emit('add', obj.symbol);\n    }\n    // componentWillMount(){\n    //   for(var i = 0; i < this.state.personalIndex.length; i++){\n    //       var self = this;\n    //     self.setState({\n    //       personal: self.state.personal.concat(array[self.state.personalIndex[i]]),\n    //       personalHistory: self.state.personalHistory.concat([self.state.history[0][self.state.personalIndex[i]]])\n    //     })\n    //   }\n    // }\n\n    // currencyRemoved(obj) {\n    //   alert(`You're no longer tracking ${obj.symbol}.`)\n    //   this.props.socket.emit('remove', [obj])\n    // }\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var intervalID = setInterval(function () {\n        // fetch('https://api.hitbtc.com/api/2/public/ticker', {\n        //   mode: 'cors'\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json',\n        //   }\n        // })\n        // .then((resp)=>{\n        //   this.setState({\n        //     arr: resp\n        //   })\n        // })\n        // .catch((err)=>console.log(\"ERROR:\", err))\n        (0, _axios2.default)(\"http://localhost:3000/currency\", {\n          method: 'GET'\n        })\n        // .then((res)=>res.json())\n        .then(function (resp) {\n          var data = resp.data.sort(function (a, b) {\n            return a.symbol > b.symbol;\n          });\n          //console.log(resp.data)\n          _this2.setState({\n            arr: data,\n            history: _this2.state.history.concat([data])\n          });\n          if (_this2.state.history.length > 17280) {\n            _this2.setState({\n              history: _this2.state.history.slice(1)\n            });\n          }\n        }).catch(function (err) {\n          console.log('ERROR:', err);\n        });\n        var personalArr = [];\n        var self = _this2;\n\n        for (var i = 0; i < self.state.personalIndex.length; i++) {\n          for (var j = 0; j < self.state.arr.length; j++) {\n            if (self.state.arr[j].symbol === self.state.personalIndex[i]) {\n              personalArr.push({ symbol: self.state.arr[j].symbol, currVolume: self.state.arr[j].volume, ogVolume: self.state.history[0][j].volume });\n            }\n          }\n        }\n        self.setState({\n          personal: self.state.personal.slice(self.state.personal.length)\n        });\n      }, 1000);\n\n      var self = this;\n      this.props.socket.on('additionSuccess', function (data) {\n        self.setState({\n          personalIndex: self.state.personalIndex.concat(data)\n        });\n\n        console.log(self.state.personal);\n      });\n    }\n\n    // this.props.socket.on('removalSuccess', function(data){\n    //   this.setState({\n    //     personal: this.state.personal.splice(data, 1)\n    //   })\n    // })\n    // }\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var array = this.state.arr.map(function (m, i) {\n        return {\n          symbol: m.symbol,\n          currVolume: m.volume,\n          ogVolume: _this3.state.history[0][i].volume\n        };\n      });\n      array = array.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      array = array.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.search.length) {\n        array = array.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.search.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sorting === 'AlphaUp') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'AlphaDown') {\n        array = array.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeUp') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sorting === 'VolumeDown') {\n        array = array.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sorting === 'changeVolUp') {\n        array = array.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sorting === 'changeVolDown') {\n        array = array.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n\n      //Personalized currencies:\n\n      // let personal = this.state.personal.map((m, i)=> ({\n      //   symbol: m.symbol,\n      //   currVolume: m.volume,\n      //   ogVolume: this.state.personalHistory[0][i].volume,\n      // }))\n      var personal2 = this.state.personal;\n      personal2 = personal2.sort(function (a, b) {\n        return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n      });\n      personal2 = personal2.filter(function (a) {\n        return !isNaN(a.currVolume / a.ogVolume);\n      });\n\n      if (this.state.personalsearch.length) {\n        personal2 = personal2.filter(function (a) {\n          return a.symbol.toLowerCase().indexOf(_this3.state.personalsearch.toLowerCase()) !== -1;\n        });\n      }\n      if (this.state.sortingPersonal === 'AlphaUp') {\n        personal2 = personal2.sort(function (a, b) {\n          return a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'AlphaDown') {\n        personal2 = personal2.sort(function (a, b) {\n          return a.symbol > b.symbol ? -1 : b.symbol > a.symbol ? 1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'VolumeUp') {\n        personal2 = personal2.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? -1 : Number(b.currVolume) > Number(a.currVolume) ? 1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'VolumeDown') {\n        personal2 = personal2.sort(function (a, b) {\n          return Number(a.currVolume) > Number(b.currVolume) ? 1 : Number(b.currVolume) > Number(a.currVolume) ? -1 : 0;\n        });\n      }\n      if (this.state.sortingPersonal === 'changeVolUp') {\n        personal2 = personal2.sort(function (a, b) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      if (this.state.sortingPersonal === 'changeVolDown') {\n        personal2 = personal2.sort(function (b, a) {\n          return (b.currVolume - b.ogVolume) / b.ogVolume - (a.currVolume - a.ogVolume) / a.ogVolume;\n        });\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(0);\n              } },\n            'Home'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(1);\n              } },\n            'About Crypto'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(2);\n              } },\n            'How To Start'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(3);\n              } },\n            'Trading Techniques'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(4);\n              } },\n            'Trading Tools'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                return _this3.props.redirect(5);\n              } },\n            'FAQ'\n          )\n        ),\n        this.props.account && this.props.loggedin ? _react2.default.createElement(\n          'div',\n          { className: 'currencydisplay' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            _react2.default.createElement(\n              'p',\n              null,\n              ' ',\n              array.length,\n              ' total currencies. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sorting: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ search: e.target.value });\n              }, placeholder: 'Search' }),\n            array.map(function (obj, i) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { key: i, onClick: function onClick() {\n                      return _this3.currencyAdded(obj);\n                    } },\n                  'Add To Personalized View'\n                )\n              );\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'personalcontainer' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'You are personally tracking ',\n              personal2.length,\n              ' currencies that match your query. '\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'sorting' },\n              _react2.default.createElement(\n                'div',\n                null,\n                'Alphabetical',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'AlphaUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'AlphaDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Current Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'VolumeUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'VolumeDown' });\n                    } },\n                  'v'\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                null,\n                'Change in Volume',\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'changeVolUp' });\n                    } },\n                  '^'\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.setState({ sortingPersonal: 'changeVolDown' });\n                    } },\n                  'v'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'text', className: 'filter', onChange: function onChange(e) {\n                return _this3.setState({ personalsearch: e.target.value });\n              }, placeholder: 'Search' }),\n            personal2.map(function (obj) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'thing', key: obj.symbol },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'info' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'symbol' },\n                    obj.symbol,\n                    ':'\n                  ),\n                  ' Current Volume: ',\n                  obj.currVolume\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'otherThing' },\n                  ' Change in volume in past 24 hours: %',\n                  ((obj.currVolume - obj.ogVolume) / obj.ogVolume * 100).toFixed(3)\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { onClick: function onClick() {\n                      return _this3.currencyRemoved(obj);\n                    } },\n                  'Remove from Personalized View'\n                )\n              );\n            })\n          )\n        ) : this.props.account ? _react2.default.createElement(_Loginscreen2.default, { socket: this.props.socket,\n          goToTools: this.props.goToTools,\n          goToRegister: this.props.goToRegister,\n          account: this.props.account,\n          loggedin: this.props.loggedin\n        }) : _react2.default.createElement(_Registerscreen2.default, { goToLogin: this.props.goToLogin, socket: this.props.socket })\n      );\n    }\n  }]);\n\n  return Tools;\n}(_react2.default.Component);\n\n// export default Tools;\n\n\nexports.default = Tools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90cmFkaW5ndG9vbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvdHJhZGluZ3Rvb2xzLmpzPzBhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3RlcnNjcmVlbic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbnNjcmVlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBhcnI6IFtdLFxuICAgICAgYXJyYXk6IFtdLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIHNvcnRpbmc6ICdBbHBoYVVwJyxcbiAgICAgIHBlcnNvbmFsSGlzdG9yeTogW10sXG4gICAgICBwZXJzb25hbDogW10sXG4gICAgICBwZXJzb25hbEluZGV4OiBbXSxcbiAgICAgIHNvcnRpbmdQZXJzb25hbDogJ0FscGhhVXAnLFxuICAgICAgcGVyc29uYWxzZWFyY2g6ICcnLFxuICAgIH1cbiAgfVxuXG4gIGN1cnJlbmN5QWRkZWQob2JqKSB7XG4gICAgYWxlcnQoYFlvdSdyZSBub3cgdHJhY2tpbmcgJHtvYmouc3ltYm9sfS5gKVxuICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2FkZCcsIG9iai5zeW1ib2wpO1xuICB9XG4gIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAvLyAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnBlcnNvbmFsSW5kZXgubGVuZ3RoOyBpKyspe1xuICAvLyAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gIC8vICAgICBzZWxmLnNldFN0YXRlKHtcbiAgLy8gICAgICAgcGVyc29uYWw6IHNlbGYuc3RhdGUucGVyc29uYWwuY29uY2F0KGFycmF5W3NlbGYuc3RhdGUucGVyc29uYWxJbmRleFtpXV0pLFxuICAvLyAgICAgICBwZXJzb25hbEhpc3Rvcnk6IHNlbGYuc3RhdGUucGVyc29uYWxIaXN0b3J5LmNvbmNhdChbc2VsZi5zdGF0ZS5oaXN0b3J5WzBdW3NlbGYuc3RhdGUucGVyc29uYWxJbmRleFtpXV1dKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBjdXJyZW5jeVJlbW92ZWQob2JqKSB7XG4gIC8vICAgYWxlcnQoYFlvdSdyZSBubyBsb25nZXIgdHJhY2tpbmcgJHtvYmouc3ltYm9sfS5gKVxuICAvLyAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3JlbW92ZScsIFtvYmpdKVxuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLmhpdGJ0Yy5jb20vYXBpLzIvcHVibGljL3RpY2tlcicsIHtcbiAgICAgIC8vICAgbW9kZTogJ2NvcnMnXG4gICAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gLnRoZW4oKHJlc3ApPT57XG4gICAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICAgIGFycjogcmVzcFxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5sb2coXCJFUlJPUjpcIiwgZXJyKSlcbiAgICAgIGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbmN5XCIsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSlcbiAgICAgIC8vIC50aGVuKChyZXMpPT5yZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3ApPT57XG4gICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLnNvcnQoKGEsIGIpPT4gYS5zeW1ib2wgPiBiLnN5bWJvbClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwLmRhdGEpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFycjogZGF0YSxcbiAgICAgICAgICBoaXN0b3J5OiB0aGlzLnN0YXRlLmhpc3RvcnkuY29uY2F0KFtkYXRhXSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5oaXN0b3J5Lmxlbmd0aCA+IDE3MjgwKXtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhpc3Rvcnk6IHRoaXMuc3RhdGUuaGlzdG9yeS5zbGljZSgxKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZXJyKVxuICAgICAgfSk7XG4gICAgICB2YXIgcGVyc29uYWxBcnIgPSBbXTtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZi5zdGF0ZS5wZXJzb25hbEluZGV4Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHNlbGYuc3RhdGUuYXJyLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBpZihzZWxmLnN0YXRlLmFycltqXS5zeW1ib2wgPT09IHNlbGYuc3RhdGUucGVyc29uYWxJbmRleFtpXSl7XG4gICAgICAgICAgICBwZXJzb25hbEFyci5wdXNoKHtzeW1ib2w6IHNlbGYuc3RhdGUuYXJyW2pdLnN5bWJvbCwgY3VyclZvbHVtZTogc2VsZi5zdGF0ZS5hcnJbal0udm9sdW1lLCBvZ1ZvbHVtZTogc2VsZi5zdGF0ZS5oaXN0b3J5WzBdW2pdLnZvbHVtZX0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgcGVyc29uYWw6IHNlbGYuc3RhdGUucGVyc29uYWwuc2xpY2Uoc2VsZi5zdGF0ZS5wZXJzb25hbC5sZW5ndGgpXG4gICAgICB9KVxuXG5cbiAgICB9LCAxMDAwKVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2FkZGl0aW9uU3VjY2VzcycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIHBlcnNvbmFsSW5kZXg6IHNlbGYuc3RhdGUucGVyc29uYWxJbmRleC5jb25jYXQoZGF0YSlcbiAgICAgIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuc3RhdGUucGVyc29uYWwpXG4gICAgfSlcblxuICB9XG5cbiAgLy8gdGhpcy5wcm9wcy5zb2NrZXQub24oJ3JlbW92YWxTdWNjZXNzJywgZnVuY3Rpb24oZGF0YSl7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBwZXJzb25hbDogdGhpcy5zdGF0ZS5wZXJzb25hbC5zcGxpY2UoZGF0YSwgMSlcbiAgLy8gICB9KVxuICAvLyB9KVxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhcnJheSA9IHRoaXMuc3RhdGUuYXJyLm1hcCgobSwgaSk9PiAoe1xuICAgICAgc3ltYm9sOiBtLnN5bWJvbCxcbiAgICAgIGN1cnJWb2x1bWU6IG0udm9sdW1lLFxuICAgICAgb2dWb2x1bWU6IHRoaXMuc3RhdGUuaGlzdG9yeVswXVtpXS52b2x1bWUsXG4gICAgfSkpXG4gICAgYXJyYXkgPSBhcnJheS5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoKGEpID0+ICFpc05hTihhLmN1cnJWb2x1bWUvYS5vZ1ZvbHVtZSkpXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICBhcnJheSA9IGFycmF5LmZpbHRlcigoYSk9PiBhLnN5bWJvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFVcCcpIHtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAtMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSAnQWxwaGFEb3duJykge1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkgPyAtMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAxIDogMCk7fSApXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVVcCcpe1xuICAgICAgYXJyYXkgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge3JldHVybiAoTnVtYmVyKGEuY3VyclZvbHVtZSkgPiBOdW1iZXIoYi5jdXJyVm9sdW1lKSkgPyAtMSA6ICgoTnVtYmVyKGIuY3VyclZvbHVtZSkgPiBOdW1iZXIoYS5jdXJyVm9sdW1lKSkgPyAxIDogMCk7fSApXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09ICdWb2x1bWVEb3duJyl7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChOdW1iZXIoYS5jdXJyVm9sdW1lKSA+IE51bWJlcihiLmN1cnJWb2x1bWUpKSA/IDEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gLTEgOiAwKTt9IClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbFVwJyl7XG4gICAgICBhcnJheSA9IGFycmF5LnNvcnQoKGEsIGIpPT4gKGIuY3VyclZvbHVtZS1iLm9nVm9sdW1lKS8oYi5vZ1ZvbHVtZSkgLSAoYS5jdXJyVm9sdW1lLWEub2dWb2x1bWUpLyhhLm9nVm9sdW1lKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gJ2NoYW5nZVZvbERvd24nKXtcbiAgICAgIGFycmF5ID0gYXJyYXkuc29ydCgoYiwgYSk9PiAoYi5jdXJyVm9sdW1lLWIub2dWb2x1bWUpLyhiLm9nVm9sdW1lKSAtIChhLmN1cnJWb2x1bWUtYS5vZ1ZvbHVtZSkvKGEub2dWb2x1bWUpKVxuICAgIH1cblxuICAgIC8vUGVyc29uYWxpemVkIGN1cnJlbmNpZXM6XG5cbiAgICAvLyBsZXQgcGVyc29uYWwgPSB0aGlzLnN0YXRlLnBlcnNvbmFsLm1hcCgobSwgaSk9PiAoe1xuICAgIC8vICAgc3ltYm9sOiBtLnN5bWJvbCxcbiAgICAvLyAgIGN1cnJWb2x1bWU6IG0udm9sdW1lLFxuICAgIC8vICAgb2dWb2x1bWU6IHRoaXMuc3RhdGUucGVyc29uYWxIaXN0b3J5WzBdW2ldLnZvbHVtZSxcbiAgICAvLyB9KSlcbiAgICBsZXQgcGVyc29uYWwyID0gdGhpcy5zdGF0ZS5wZXJzb25hbFxuICAgIHBlcnNvbmFsMiA9IHBlcnNvbmFsMi5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgcGVyc29uYWwyID0gcGVyc29uYWwyLmZpbHRlcigoYSkgPT4gIWlzTmFOKGEuY3VyclZvbHVtZS9hLm9nVm9sdW1lKSlcblxuICAgIGlmICh0aGlzLnN0YXRlLnBlcnNvbmFsc2VhcmNoLmxlbmd0aCkge1xuICAgICAgcGVyc29uYWwyID0gcGVyc29uYWwyLmZpbHRlcigoYSk9PiBhLnN5bWJvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5wZXJzb25hbHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmdQZXJzb25hbCA9PT0gJ0FscGhhVXAnKSB7XG4gICAgICBwZXJzb25hbDIgPSBwZXJzb25hbDIuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gMSA6ICgoYi5zeW1ib2wgPiBhLnN5bWJvbCkgPyAtMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nUGVyc29uYWwgPT09ICdBbHBoYURvd24nKSB7XG4gICAgICBwZXJzb25hbDIgPSBwZXJzb25hbDIuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gKGEuc3ltYm9sID4gYi5zeW1ib2wpID8gLTEgOiAoKGIuc3ltYm9sID4gYS5zeW1ib2wpID8gMSA6IDApO30gKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nUGVyc29uYWwgPT09ICdWb2x1bWVVcCcpe1xuICAgICAgcGVyc29uYWwyID0gcGVyc29uYWwyLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChOdW1iZXIoYS5jdXJyVm9sdW1lKSA+IE51bWJlcihiLmN1cnJWb2x1bWUpKSA/IC0xIDogKChOdW1iZXIoYi5jdXJyVm9sdW1lKSA+IE51bWJlcihhLmN1cnJWb2x1bWUpKSA/IDEgOiAwKTt9IClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZ1BlcnNvbmFsID09PSAnVm9sdW1lRG93bicpe1xuICAgICAgcGVyc29uYWwyID0gcGVyc29uYWwyLnNvcnQoZnVuY3Rpb24oYSxiKSB7cmV0dXJuIChOdW1iZXIoYS5jdXJyVm9sdW1lKSA+IE51bWJlcihiLmN1cnJWb2x1bWUpKSA/IDEgOiAoKE51bWJlcihiLmN1cnJWb2x1bWUpID4gTnVtYmVyKGEuY3VyclZvbHVtZSkpID8gLTEgOiAwKTt9IClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZ1BlcnNvbmFsID09PSAnY2hhbmdlVm9sVXAnKXtcbiAgICAgIHBlcnNvbmFsMiA9IHBlcnNvbmFsMi5zb3J0KChhLCBiKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmdQZXJzb25hbCA9PT0gJ2NoYW5nZVZvbERvd24nKXtcbiAgICAgIHBlcnNvbmFsMiA9IHBlcnNvbmFsMi5zb3J0KChiLCBhKT0+IChiLmN1cnJWb2x1bWUtYi5vZ1ZvbHVtZSkvKGIub2dWb2x1bWUpIC0gKGEuY3VyclZvbHVtZS1hLm9nVm9sdW1lKS8oYS5vZ1ZvbHVtZSkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgwKX0+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCgxKX0+QWJvdXQgQ3J5cHRvPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlZGlyZWN0KDIpfT5Ib3cgVG8gU3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVkaXJlY3QoMyl9PlRyYWRpbmcgVGVjaG5pcXVlczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg0KX0+VHJhZGluZyBUb29sczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZWRpcmVjdCg1KX0+RkFRPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ICh0aGlzLnByb3BzLmFjY291bnQgJiYgdGhpcy5wcm9wcy5sb2dnZWRpbikgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lkaXNwbGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8cD4ge2FycmF5Lmxlbmd0aH0gdG90YWwgY3VycmVuY2llcy4gPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29ydGluZyc+XG4gICAgICAgICAgICAgICAgPGRpdj5BbHBoYWJldGljYWxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmc6ICdBbHBoYVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnQWxwaGFEb3duJ30pfT52PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5DdXJyZW50IFZvbHVtZVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ1ZvbHVtZVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnVm9sdW1lRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q2hhbmdlIGluIFZvbHVtZVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZzogJ2NoYW5nZVZvbFVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nOiAnY2hhbmdlVm9sRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZpbHRlcicgb25DaGFuZ2U9eyhlKT0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZS50YXJnZXQudmFsdWV9KX0gcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAge2FycmF5Lm1hcCgob2JqLCBpKT0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGluZ1wiIGtleT17b2JqLnN5bWJvbH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wnPntvYmouc3ltYm9sfTpcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IEN1cnJlbnQgVm9sdW1lOiB7b2JqLmN1cnJWb2x1bWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclRoaW5nJz4gQ2hhbmdlIGluIHZvbHVtZSBpbiBwYXN0IDI0IGhvdXJzOiAleygoKG9iai5jdXJyVm9sdW1lLW9iai5vZ1ZvbHVtZSkvKG9iai5vZ1ZvbHVtZSkpKiAxMDApLnRvRml4ZWQoMyl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9eygpPT50aGlzLmN1cnJlbmN5QWRkZWQob2JqKX0+QWRkIFRvIFBlcnNvbmFsaXplZCBWaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PiApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvbmFsY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxwPllvdSBhcmUgcGVyc29uYWxseSB0cmFja2luZyB7cGVyc29uYWwyLmxlbmd0aH0gY3VycmVuY2llcyB0aGF0IG1hdGNoIHlvdXIgcXVlcnkuIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvcnRpbmcnPlxuICAgICAgICAgICAgICAgIDxkaXY+QWxwaGFiZXRpY2FsXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nUGVyc29uYWw6ICdBbHBoYVVwJ30pfT5ePC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nUGVyc29uYWw6ICdBbHBoYURvd24nfSl9PnY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkN1cnJlbnQgVm9sdW1lXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHtzb3J0aW5nUGVyc29uYWw6ICdWb2x1bWVVcCd9KX0+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnVm9sdW1lRG93bid9KX0+djwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q2hhbmdlIGluIFZvbHVtZVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c29ydGluZ1BlcnNvbmFsOiAnY2hhbmdlVm9sVXAnfSl9Pl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2V0U3RhdGUoe3NvcnRpbmdQZXJzb25hbDogJ2NoYW5nZVZvbERvd24nfSl9PnY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdmaWx0ZXInIG9uQ2hhbmdlPXsoZSk9PiB0aGlzLnNldFN0YXRlKHtwZXJzb25hbHNlYXJjaDogZS50YXJnZXQudmFsdWV9KX0gcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAge3BlcnNvbmFsMi5tYXAoKG9iaik9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpbmdcIiBrZXk9e29iai5zeW1ib2x9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ltYm9sJz57b2JqLnN5bWJvbH06XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBDdXJyZW50IFZvbHVtZToge29iai5jdXJyVm9sdW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3RoZXJUaGluZyc+IENoYW5nZSBpbiB2b2x1bWUgaW4gcGFzdCAyNCBob3VyczogJXsoKChvYmouY3VyclZvbHVtZS1vYmoub2dWb2x1bWUpLyhvYmoub2dWb2x1bWUpKSogMTAwKS50b0ZpeGVkKDMpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuY3VycmVuY3lSZW1vdmVkKG9iail9PlJlbW92ZSBmcm9tIFBlcnNvbmFsaXplZCBWaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PiApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiAodGhpcy5wcm9wcy5hY2NvdW50KSA/IDxMb2dpbiBzb2NrZXQ9e3RoaXMucHJvcHMuc29ja2V0fVxuICAgICAgICAgICAgZ29Ub1Rvb2xzPXt0aGlzLnByb3BzLmdvVG9Ub29sc31cbiAgICAgICAgICAgIGdvVG9SZWdpc3Rlcj17dGhpcy5wcm9wcy5nb1RvUmVnaXN0ZXJ9XG4gICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmFjY291bnR9XG4gICAgICAgICAgICBsb2dnZWRpbj17dGhpcy5wcm9wcy5sb2dnZWRpbn1cbiAgICAgICAgICAvPiA6IDxSZWdpc3RlciBnb1RvTG9naW49e3RoaXMucHJvcHMuZ29Ub0xvZ2lufSBzb2NrZXQ9e3RoaXMucHJvcHMuc29ja2V0fS8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVG9vbHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFGQTtBQWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBbEJBO0FBOUJBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0RUE7QUErRUE7Ozs7QUF4UEE7QUFDQTtBQTBQQTtBQUNBO0FBQ0E7QUE3UEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/tradingtools.js\n");

/***/ })

})