webpackHotUpdate(0,{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(21);\n\nvar _Messages = __webpack_require__(28);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nvar _landing_page = __webpack_require__(650);\n\nvar _landing_page2 = _interopRequireDefault(_landing_page);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Home: {\n    displayName: 'Home'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Home.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Home.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n// import Map from './Landing_page/Map';\n// import AutoSearch from './Landing_page/auto_complete_container';\n\n\n// import FindRestaurants from './find_restaurants';\n\nvar Home = _wrapComponent('Home')(function (_get__$Component) {\n  _inherits(Home, _get__$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var _LandingPage_Component = _get__('LandingPage');\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'landing-page-container' },\n        _react3.default.createElement(\n          'div',\n          null,\n          'Tell Me What To Eat'\n        ),\n        _react3.default.createElement(\n          'div',\n          null,\n          'More eating, less deciding'\n        ),\n        _react3.default.createElement(_LandingPage_Component, null)\n      );\n    }\n  }]);\n\n  return Home;\n}(_get__('React').Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nvar _DefaultExportValue = _get__('connect')(_get__('mapStateToProps'))(_get__('Home'));\n\nexports.default = _DefaultExportValue;\n\n//\n// <div className=\"row\">\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n//   <div className=\"col-sm-4\">\n//     <div className=\"panel\">\n//       <div className=\"panel-body\">\n//         <h3>Heading</h3>\n//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor\n//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna\n//           mollis euismod. Donec sed odio dui.</p>\n//         <a href=\"#\" role=\"button\" className=\"btn btn-default\">View details</a>\n//       </div>\n//     </div>\n//   </div>\n// </div>\n\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'LandingPage':\n      return _landing_page2.default;\n\n    case 'React':\n      return _react3.default;\n\n    case 'connect':\n      return _reactRedux.connect;\n\n    case 'mapStateToProps':\n      return mapStateToProps;\n\n    case 'Home':\n      return Home;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof _DefaultExportValue === 'undefined' ? 'undefined' : _typeof(_DefaultExportValue);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(_DefaultExportValue, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0hvbWUuanM/YTM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcbi8vIGltcG9ydCBNYXAgZnJvbSAnLi9MYW5kaW5nX3BhZ2UvTWFwJztcbi8vIGltcG9ydCBBdXRvU2VhcmNoIGZyb20gJy4vTGFuZGluZ19wYWdlL2F1dG9fY29tcGxldGVfY29udGFpbmVyJztcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuL0xhbmRpbmdfcGFnZS9sYW5kaW5nX3BhZ2UnO1xuLy8gaW1wb3J0IEZpbmRSZXN0YXVyYW50cyBmcm9tICcuL2ZpbmRfcmVzdGF1cmFudHMnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5UZWxsIE1lIFdoYXQgVG8gRWF0PC9kaXY+XG4gICAgICAgIDxkaXY+TW9yZSBlYXRpbmcsIGxlc3MgZGVjaWRpbmc8L2Rpdj5cbiAgICAgICAgPExhbmRpbmdQYWdlLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSG9tZSk7XG5cblxuLy9cbi8vIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbi8vICAgICAgICAgPGgzPkhlYWRpbmc8L2gzPlxuLy8gICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yXG4vLyAgICAgICAgICAgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYVxuLy8gICAgICAgICAgIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuPC9wPlxuLy8gICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5WaWV3IGRldGFpbHM8L2E+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgPC9kaXY+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbi8vICAgICAgICAgPGgzPkhlYWRpbmc8L2gzPlxuLy8gICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yXG4vLyAgICAgICAgICAgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYVxuLy8gICAgICAgICAgIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuPC9wPlxuLy8gICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5WaWV3IGRldGFpbHM8L2E+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgPC9kaXY+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbi8vICAgICAgICAgPGgzPkhlYWRpbmc8L2gzPlxuLy8gICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yXG4vLyAgICAgICAgICAgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYVxuLy8gICAgICAgICAgIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuPC9wPlxuLy8gICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5WaWV3IGRldGFpbHM8L2E+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgPC9kaXY+XG4vLyA8L2Rpdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFNQTs7OztBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})