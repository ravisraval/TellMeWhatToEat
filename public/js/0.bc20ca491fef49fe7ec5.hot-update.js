webpackHotUpdate(0,{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(21);\n\nvar _Messages = __webpack_require__(28);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nvar _combo_map_search = __webpack_require__(352);\n\nvar _combo_map_search2 = _interopRequireDefault(_combo_map_search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Home: {\n    displayName: 'Home'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Home.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Home.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n// import Map from './Landing_page/Map';\n// import AutoSearch from './Landing_page/auto_complete_container';\n\n\n// import FindRestaurants from './find_restaurants';\n\nvar Home = _wrapComponent('Home')(function (_get__$Component) {\n  _inherits(Home, _get__$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var _ComboMapSearch_Component = _get__('ComboMapSearch');\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'landing-page-container' },\n        _react3.default.createElement(_ComboMapSearch_Component, null)\n      );\n    }\n  }]);\n\n  return Home;\n}(_get__('React').Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nvar _DefaultExportValue = _get__('connect')(_get__('mapStateToProps'))(_get__('Home'));\n\nexports.default = _DefaultExportValue;\n\n//\n// <div className=\"row\">\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n// </div>\n\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'ComboMapSearch':\n      return _combo_map_search2.default;\n\n    case 'React':\n      return _react3.default;\n\n    case 'connect':\n      return _reactRedux.connect;\n\n    case 'mapStateToProps':\n      return mapStateToProps;\n\n    case 'Home':\n      return Home;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof _DefaultExportValue === 'undefined' ? 'undefined' : _typeof(_DefaultExportValue);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(_DefaultExportValue, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0hvbWUuanM/YTM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcbi8vIGltcG9ydCBNYXAgZnJvbSAnLi9MYW5kaW5nX3BhZ2UvTWFwJztcbi8vIGltcG9ydCBBdXRvU2VhcmNoIGZyb20gJy4vTGFuZGluZ19wYWdlL2F1dG9fY29tcGxldGVfY29udGFpbmVyJztcbmltcG9ydCBDb21ib01hcFNlYXJjaCBmcm9tICcuL0xhbmRpbmdfcGFnZS9jb21ib19tYXBfc2VhcmNoLmpzJztcbi8vIGltcG9ydCBGaW5kUmVzdGF1cmFudHMgZnJvbSAnLi9maW5kX3Jlc3RhdXJhbnRzJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxDb21ib01hcFNlYXJjaC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhvbWUpO1xuXG5cbi8vXG4vLyA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4vLyAgICAgICAgIDxoMz5IZWFkaW5nPC9oMz5cbi8vICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvclxuLy8gICAgICAgICAgIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmFcbi8vICAgICAgICAgICBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLjwvcD5cbi8vICAgICAgICAgPGEgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+VmlldyBkZXRhaWxzPC9hPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4vLyAgICAgICAgIDxoMz5IZWFkaW5nPC9oMz5cbi8vICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvclxuLy8gICAgICAgICAgIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmFcbi8vICAgICAgICAgICBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLjwvcD5cbi8vICAgICAgICAgPGEgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+VmlldyBkZXRhaWxzPC9hPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4vLyAgICAgICAgIDxoMz5IZWFkaW5nPC9oMz5cbi8vICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvclxuLy8gICAgICAgICAgIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmFcbi8vICAgICAgICAgICBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLjwvcD5cbi8vICAgICAgICAgPGEgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+VmlldyBkZXRhaWxzPC9hPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gPC9kaXY+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvSG9tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})