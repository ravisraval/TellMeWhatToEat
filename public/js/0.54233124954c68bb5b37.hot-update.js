webpackHotUpdate(0,{

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(59);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  FindRestaurants: {\n    displayName: 'FindRestaurants'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/appacademy/TellMeWhatToEat/app/components/find_restaurants.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/appacademy/TellMeWhatToEat/app/components/find_restaurants.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar FindRestaurants = _wrapComponent('FindRestaurants')(function (_get__$Component) {\n  _inherits(FindRestaurants, _get__$Component);\n\n  function FindRestaurants(props) {\n    _classCallCheck(this, FindRestaurants);\n\n    var _this = _possibleConstructorReturn(this, (FindRestaurants.__proto__ || Object.getPrototypeOf(FindRestaurants)).call(this, props));\n\n    _this.state = {\n      fooderies: [],\n      numRestaurants: 3\n    };\n    _this.getRestaurants = _this.getRestaurants.bind(_this);\n    return _this;\n  }\n\n  _createClass(FindRestaurants, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getRestaurants({ lat: 37.558, lng: -127 });\n      //delete above line when implementing this.props.location = this.userLocation\n    }\n  }, {\n    key: 'listeners',\n    value: function listeners(autoComplete) {}\n  }, {\n    key: 'getRestaurants',\n    value: function getRestaurants(userLocation) {\n      var _this2 = this;\n\n      var foursquare = __webpack_require__(465)({\n        clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',\n        clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'\n      });\n\n      var params = {\n        \"ll\": \"37.7749,-122.4194\",\n        \"query\": 'Restaurants'\n      };\n      foursquare.venues.getVenues(params).then(function (res) {\n        _this2.setState({ fooderies: res.response.venues }, function () {});\n      });\n\n      // TO GET A SINGLE VENUE'S INFO\n      // const params = {\n      //   venue_id: \"47f1994cf964a520904e1fe3\"\n      // };\n      // foursquare.venues.getVenue(params)\n      //   .then(res => {\n      //     console.log(res);\n      //     this.setState({ fooderies: res.response.venues }, () => {\n      //     });\n      //   });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      //LOGIC FOR PICKING RESTAURANTS HERE\n      if (this.state.fooderies.length === 0) {\n        return null;\n      }\n      var fooderies = this.state.fooderies;\n\n      console.log(fooderies);\n      var ids = Object.keys(fooderies);\n      var restaurantList = [];\n      var randomRestaurant = void 0;\n      while (restaurantList.length < this.state.numRestaurants) {\n        randomRestaurant = fooderies[Math.floor(Math.random() * ids.length)];\n        if (!restaurantList.includes(randomRestaurant)) {\n          restaurantList.push(randomRestaurant);\n        }\n      }\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'h2',\n          null,\n          '\"I\\'m doing something!\"'\n        ),\n        _react3.default.createElement(\n          'ul',\n          null,\n          restaurantList.map(function (restaurant) {\n            return _react3.default.createElement(\n              'li',\n              null,\n              restaurant.name\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return FindRestaurants;\n}(_get__('React').Component));\n\nexports.default = _get__('FindRestaurants');\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'React':\n      return _react3.default;\n\n    case 'FindRestaurants':\n      return FindRestaurants;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof FindRestaurants === 'undefined' ? 'undefined' : _typeof(FindRestaurants);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(FindRestaurants, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(FindRestaurants)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2ZpbmRfcmVzdGF1cmFudHMuanM/YzhjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZpbmRSZXN0YXVyYW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvb2RlcmllczogW10sXG4gICAgICBudW1SZXN0YXVyYW50czogM1xuICAgIH07XG4gICAgdGhpcy5nZXRSZXN0YXVyYW50cyA9IHRoaXMuZ2V0UmVzdGF1cmFudHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0UmVzdGF1cmFudHMoe2xhdDogMzcuNTU4LCBsbmc6IC0xMjd9KTtcbiAgICAvL2RlbGV0ZSBhYm92ZSBsaW5lIHdoZW4gaW1wbGVtZW50aW5nIHRoaXMucHJvcHMubG9jYXRpb24gPSB0aGlzLnVzZXJMb2NhdGlvblxuICB9XG5cbiAgbGlzdGVuZXJzKGF1dG9Db21wbGV0ZSkge1xuICB9XG5cbiAgZ2V0UmVzdGF1cmFudHModXNlckxvY2F0aW9uKSB7XG4gICAgY29uc3QgZm91cnNxdWFyZSA9IHJlcXVpcmUoJ3JlYWN0LWZvdXJzcXVhcmUnKSh7XG4gICAgICBjbGllbnRJRDogJzVCUlNFMUw1TDFBRElIQVNOV0lIU0FWV0VXTFFVMElERUVKWFZFM1YwRFBWUDNCWCcsXG4gICAgICBjbGllbnRTZWNyZXQ6ICdDQUFDTlpFMFBGSkdOVEFCT1QxUkEzRFlPU0pBTVFKQk01VlFXSlZZTUY0RUlXNEInXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBcImxsXCI6IFwiMzcuNzc0OSwtMTIyLjQxOTRcIixcbiAgICAgIFwicXVlcnlcIjogJ1Jlc3RhdXJhbnRzJ1xuICAgIH07XG4gICAgZm91cnNxdWFyZS52ZW51ZXMuZ2V0VmVudWVzKHBhcmFtcylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb29kZXJpZXM6IHJlcy5yZXNwb25zZS52ZW51ZXMgfSwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gVE8gR0VUIEEgU0lOR0xFIFZFTlVFJ1MgSU5GT1xuICAgIC8vIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAvLyAgIHZlbnVlX2lkOiBcIjQ3ZjE5OTRjZjk2NGE1MjA5MDRlMWZlM1wiXG4gICAgLy8gfTtcbiAgICAvLyBmb3Vyc3F1YXJlLnZlbnVlcy5nZXRWZW51ZShwYXJhbXMpXG4gICAgLy8gICAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZm9vZGVyaWVzOiByZXMucmVzcG9uc2UudmVudWVzIH0sICgpID0+IHtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vTE9HSUMgRk9SIFBJQ0tJTkcgUkVTVEFVUkFOVFMgSEVSRVxuICAgIGlmICh0aGlzLnN0YXRlLmZvb2Rlcmllcy5sZW5ndGggPT09IDApIHtyZXR1cm4gbnVsbDt9XG4gICAgY29uc3QgeyBmb29kZXJpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2coZm9vZGVyaWVzKTtcbiAgICBjb25zdCBpZHMgPSBPYmplY3Qua2V5cyhmb29kZXJpZXMpO1xuICAgIGxldCByZXN0YXVyYW50TGlzdCA9IFtdO1xuICAgIGxldCByYW5kb21SZXN0YXVyYW50O1xuICAgIHdoaWxlIChyZXN0YXVyYW50TGlzdC5sZW5ndGggPCB0aGlzLnN0YXRlLm51bVJlc3RhdXJhbnRzKSB7XG4gICAgICByYW5kb21SZXN0YXVyYW50ID0gZm9vZGVyaWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGlkcy5sZW5ndGgpXTtcbiAgICAgIGlmICghcmVzdGF1cmFudExpc3QuaW5jbHVkZXMocmFuZG9tUmVzdGF1cmFudCkpIHtcbiAgICAgICAgcmVzdGF1cmFudExpc3QucHVzaChyYW5kb21SZXN0YXVyYW50KTtcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgIDxoMj5cIkknbSBkb2luZyBzb21ldGhpbmchXCI8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7cmVzdGF1cmFudExpc3QubWFwKHJlc3RhdXJhbnQgPT4gKFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIHtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5kUmVzdGF1cmFudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvZmluZF9yZXN0YXVyYW50cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFGQTtBQVdBOzs7O0FBNUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})