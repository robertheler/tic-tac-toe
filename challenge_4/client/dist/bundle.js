/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar App = function App() {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Board, null));\n};\n\nvar Board = /*#__PURE__*/function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _super.call(this, props); // red player = 1, yellow player = 2, 0 = empty\n    //let row = new Array(7).fill(0);\n    //let board = new Array(6).fill(row);\n\n    var board = [];\n\n    for (var i = 0; i < 6; i++) {\n      board[i] = [];\n\n      for (var j = 0; j < 7; j++) {\n        board[i][j] = 0;\n      }\n    }\n\n    board[5][3] = 1;\n    _this.state = {\n      board: board,\n      player: 1\n    };\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"handleClick\",\n    value: function handleClick(row, column) {\n      this.placePiece(column); //check victory\n    }\n  }, {\n    key: \"placePiece\",\n    value: function placePiece(column) {\n      for (var row = 5; row >= 0; row--) {\n        if (this.state.board[row][column] === 0) {\n          this.state.board[row][column] = this.state.player;\n          this.render();\n          console.log(\"Player \".concat(this.state.player, \" placed at position \").concat(row, \"-\").concat(column));\n          console.log(this.state.board);\n          this.togglePlayer();\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"togglePlayer\",\n    value: function togglePlayer() {\n      if (this.state.player === 1) {\n        this.setState({\n          player: 2\n        }); //this.state.player = 2;\n      } else {\n        this.setState({\n          player: 1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var circles = [];\n\n      for (var i = 0; i < 6; i++) {\n        for (var j = 0; j < 7; j++) {\n          circles.push( /*#__PURE__*/React.createElement(Circle, {\n            row: i,\n            column: j,\n            occupancy: this.state.board[i][j],\n            onClick: this.handleClick\n          }));\n        }\n      }\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"board\"\n      }, circles);\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\nvar Circle = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Circle, _React$Component2);\n\n  var _super2 = _createSuper(Circle);\n\n  function Circle(props) {\n    var _this2;\n\n    _classCallCheck(this, Circle);\n\n    _this2 = _super2.call(this, props); //this.state = {index: props.column};\n\n    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));\n    _this2.handleHover = _this2.handleHover.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(Circle, [{\n    key: \"handleHover\",\n    value: function handleHover(event) {\n      console.log(event.currentTarget.getAttribute('column'));\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      var row = event.currentTarget.getAttribute('row');\n      var column = event.currentTarget.getAttribute('column');\n      this.props.onClick(row, column);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      switch (this.props.occupancy) {\n        case 1:\n          return /*#__PURE__*/React.createElement(\"div\", {\n            className: \"redCircle\",\n            onClick: this.handleClick,\n            onMouseEnter: this.handleHover,\n            row: this.props.row,\n            column: this.props.column\n          });\n\n        case 2:\n          return /*#__PURE__*/React.createElement(\"div\", {\n            className: \"yellowCircle\",\n            onClick: this.handleClick,\n            onMouseEnter: this.handleHover,\n            row: this.props.row,\n            column: this.props.column\n          });\n\n        default:\n          return /*#__PURE__*/React.createElement(\"div\", {\n            className: \"emptyCircle\",\n            onClick: this.handleClick,\n            onMouseEnter: this.handleHover,\n            row: this.props.row,\n            column: this.props.column\n          });\n      }\n    }\n  }]);\n\n  return Circle;\n}(React.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+ICg8ZGl2PjxCb2FyZCAvPjwvZGl2Pik7XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVkIHBsYXllciA9IDEsIHllbGxvdyBwbGF5ZXIgPSAyLCAwID0gZW1wdHlcbiAgICAvL2xldCByb3cgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgICAvL2xldCBib2FyZCA9IG5ldyBBcnJheSg2KS5maWxsKHJvdyk7XG4gICAgdmFyIGJvYXJkID0gW107XG4gICAgZm9yKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MDsgajw3OyBqKyspIHtcbiAgICAgICAgICBib2FyZFtpXVtqXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGJvYXJkWzVdWzNdID0gMTtcbiAgICB0aGlzLnN0YXRlID0ge2JvYXJkOiBib2FyZCwgcGxheWVyOiAxfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgaGFuZGxlQ2xpY2socm93LCBjb2x1bW4pIHtcbiAgICB0aGlzLnBsYWNlUGllY2UoY29sdW1uKTtcbiAgICAvL2NoZWNrIHZpY3RvcnlcbiAgfVxuXG4gIHBsYWNlUGllY2UoY29sdW1uKSB7XG4gICAgZm9yIChsZXQgcm93ID0gNTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICBpZih0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUucGxheWVyO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUGxheWVyICR7dGhpcy5zdGF0ZS5wbGF5ZXJ9IHBsYWNlZCBhdCBwb3NpdGlvbiAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYm9hcmQpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBsYXllcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWVyID09PSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXI6IDJ9KVxuICAgICAgLy90aGlzLnN0YXRlLnBsYXllciA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllcjogMX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjaXJjbGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaiArKykge1xuICAgICAgICBjaXJjbGVzLnB1c2goPENpcmNsZVxuICAgICAgICAgIHJvdz17aX1cbiAgICAgICAgICBjb2x1bW49e2p9XG4gICAgICAgICAgb2NjdXBhbmN5PXt0aGlzLnN0YXRlLmJvYXJkW2ldW2pdfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPntjaXJjbGVzfTwvZGl2PilcbiAgfVxufVxuXG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvL3RoaXMuc3RhdGUgPSB7aW5kZXg6IHByb3BzLmNvbHVtbn07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUhvdmVyID0gdGhpcy5oYW5kbGVIb3Zlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSG92ZXIoZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdjb2x1bW4nKSk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBsZXQgcm93ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvdycpO1xuICAgIGxldCBjb2x1bW4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29sdW1uJyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHJvdywgY29sdW1uKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMub2NjdXBhbmN5KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyZWRDaXJjbGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlSG92ZXJ9IHJvdz17dGhpcy5wcm9wcy5yb3d9IGNvbHVtbiA9e3RoaXMucHJvcHMuY29sdW1ufT48L2Rpdj4pO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwieWVsbG93Q2lyY2xlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUhvdmVyfSByb3c9e3RoaXMucHJvcHMucm93fSBjb2x1bW4gPXt0aGlzLnByb3BzLmNvbHVtbn0+PC9kaXY+KVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImVtcHR5Q2lyY2xlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUhvdmVyfSByb3c9e3RoaXMucHJvcHMucm93fSBjb2x1bW4gPXt0aGlzLnByb3BzLmNvbHVtbn0+PC9kaXY+KVxuICAgIH1cblxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQTFEQTtBQUNBO0FBNERBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7Ozs7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render( /*#__PURE__*/React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"App\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwLmpzeFwiXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });