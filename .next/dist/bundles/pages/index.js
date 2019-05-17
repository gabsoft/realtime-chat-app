module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js



var Layout_Layout = function Layout(props) {
    return external__react__default.a.createElement(
        external__react_["Fragment"],
        null,
        external__react__default.a.createElement(
            head__default.a,
            null,
            external__react__default.a.createElement('meta', { charSet: 'utf-8' }),
            external__react__default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
            external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossOrigin: 'anonymous' }),
            external__react__default.a.createElement(
                'title',
                null,
                props.pageTitle || 'Realtime Chat'
            )
        ),
        props.children
    );
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(4);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "pusher-js"
var external__pusher_js_ = __webpack_require__(5);
var external__pusher_js__default = /*#__PURE__*/__webpack_require__.n(external__pusher_js_);

// CONCATENATED MODULE: ./components/ChatMessage.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ChatMessage_ChatMessage = function (_Component) {
    _inherits(ChatMessage, _Component);

    function ChatMessage() {
        _classCallCheck(this, ChatMessage);

        return _possibleConstructorReturn(this, (ChatMessage.__proto__ || Object.getPrototypeOf(ChatMessage)).apply(this, arguments));
    }

    _createClass(ChatMessage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$position = _props.position,
                position = _props$position === undefined ? 'left' : _props$position,
                message = _props.message;

            var isRight = position.toLowerCase() === 'right';

            var align = isRight ? 'text-right' : 'text-left';
            var justify = isRight ? 'justify-content-end' : 'justify-content-start';

            var messageBoxStyles = {
                maxWidth: '70%',
                flexGrow: 0
            };

            var messageStyles = {
                fontWeight: 500,
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap'
            };

            return external__react__default.a.createElement(
                'div',
                { className: 'w-100 my-1 d-flex ' + justify },
                external__react__default.a.createElement(
                    'div',
                    { className: 'bg-light rounded border border-gray p-2', style: { messageBoxStyles: messageBoxStyles } },
                    external__react__default.a.createElement(
                        'span',
                        { className: 'd-block text-secondary ' + align, style: { messageStyles: messageStyles } },
                        message
                    )
                )
            );
        }
    }]);

    return ChatMessage;
}(external__react_["Component"]);

/* harmony default export */ var components_ChatMessage = (ChatMessage_ChatMessage);
// CONCATENATED MODULE: ./components/Chat.js
var Chat__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Chat__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Chat__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Chat__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SAD_EMOJI = [55357, 56864];
var HAPPY_EMOJI = [55357, 56832];
var NEUTRAL_EMOJI = [55357, 56848];

var Chat_Chat = function (_Component) {
    Chat__inherits(Chat, _Component);

    function Chat() {
        var _ref;

        var _temp, _this, _ret;

        Chat__classCallCheck(this, Chat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = Chat__possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.state = { chats: [] }, _this.handleKeyUp = function (evt) {
            var value = evt.target.value;

            if (evt.keyCode === 13 && !evt.shiftKey) {
                var user = _this.props.activeUser;

                var chat = { user: user, message: value, timestamp: +new Date() };

                evt.target.value = '';
                external__axios__default.a.post('/message', chat);
            }
        }, _temp), Chat__possibleConstructorReturn(_this, _ret);
    }

    Chat__createClass(Chat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.pusher = new external__pusher_js__default.a("a61c9765ce87a64a6c9f", {
                cluster: "us2",
                forceTLS: true
            });

            this.channel = this.pusher.subscribe('chat-room');
            this.channel.bind('new-message', function (_ref2) {
                var _ref2$chat = _ref2.chat,
                    chat = _ref2$chat === undefined ? null : _ref2$chat;
                var chats = _this2.state.chats;

                chat && chats.push(chat);
                _this2.setState({ chats: chats });
            });
            this.pusher.connection.bind('connected', function () {
                console.log("Conectado");
                external__axios__default.a.post('/messages').then(function (response) {
                    var chats = response.data.messages;
                    _this2.setState({ chats: chats });
                });
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.pusher = new external__pusher_js__default.a("a61c9765ce87a64a6c9f", {
                cluster: "us2",
                encrypted: forceTLS
            });
            this.pusher.disconnect();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return this.props.activeUser && external__react__default.a.createElement(
                external__react_["Fragment"],
                null,
                external__react__default.a.createElement(
                    'div',
                    { className: 'border-bottom border-gray w-100 d-flex align-items-center bg-white', style: { height: 90 } },
                    external__react__default.a.createElement(
                        'h2',
                        { className: 'text-dark mb-0 mx-4 px-2' },
                        this.props.activeUser
                    )
                ),
                external__react__default.a.createElement(
                    'div',
                    { className: 'px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start  align-content-start position-relative', style: { height: 'calc(100% - 180px)', overflowY: 'scroll' } },
                    this.state.chats.map(function (chat, index) {
                        var previous = Math.max(0, index - 1);
                        var previousChat = _this3.state.chats[previous];
                        var position = chat.user === _this3.props.activeUser ? "right" : "left";
                        var isFirst = previous === index;
                        var inSequence = chat.user === previousChat.user;
                        var hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;

                        var mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;

                        return external__react__default.a.createElement(
                            external__react_["Fragment"],
                            { key: index },
                            (isFirst || !inSequence || hasDelay) && external__react__default.a.createElement(
                                'div',
                                { className: 'd-block w-100 font-weight-bold text-dark mt-4\n                                    pb-1 px-1 text-' + position, style: { fontSize: '0.9rem' } },
                                external__react__default.a.createElement(
                                    'span',
                                    { className: 'd-block', style: { fontSize: '1.6rem' } },
                                    String.fromCodePoint.apply(String, mood)
                                ),
                                external__react__default.a.createElement(
                                    'span',
                                    null,
                                    chat.user || 'Anonymous'
                                )
                            ),
                            external__react__default.a.createElement(components_ChatMessage, { message: chat.message, position: position })
                        );
                    })
                ),
                external__react__default.a.createElement(
                    'div',
                    { className: 'border-top border-gray w-100 px-4 d-flex align-items-center bg-light', style: { minHeight: 90 } },
                    external__react__default.a.createElement('textarea', { className: 'form-control px-3 py-2', onKeyUp: this.handleKeyUp,
                        placeholder: 'Enter a chat message', style: { resize: 'none' } })
                )
            );
        }
    }]);

    return Chat;
}(external__react_["Component"]);

/* harmony default export */ var components_Chat = (Chat_Chat);
// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var pages_IndexPage = function (_Component) {
    pages__inherits(IndexPage, _Component);

    function IndexPage() {
        var _ref;

        var _temp, _this, _ret;

        pages__classCallCheck(this, IndexPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = pages__possibleConstructorReturn(this, (_ref = IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = { user: null }, _this.handleKeyUp = function (evt) {
            if (evt.keyCode === 13) {
                var user = evt.target.value;
                _this.setState({ user: user });
            }
        }, _temp), pages__possibleConstructorReturn(_this, _ret);
    }

    pages__createClass(IndexPage, [{
        key: 'render',
        value: function render() {
            var user = this.state.user;


            var nameInputStyles = {
                background: 'transparent',
                color: '#999',
                border: 0,
                borderBottom: '1px solid #666',
                borderRadius: 0,
                fontSize: '3rem',
                fontWeight: 500,
                boxShadow: 'none !important'
            };

            return external__react__default.a.createElement(
                components_Layout,
                { pageTitle: 'Realtime Chat' },
                external__react__default.a.createElement(
                    'main',
                    { className: 'container-fluid position-absolute h-100 bg-dark' },
                    external__react__default.a.createElement(
                        'div',
                        { className: 'row position-absolute w-100 h-100' },
                        external__react__default.a.createElement(
                            'section',
                            { className: 'col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5' },
                            external__react__default.a.createElement(
                                'div',
                                { className: 'px-5 mx-5' },
                                external__react__default.a.createElement(
                                    'span',
                                    { className: 'd-block w-100 h1 text-light', style: { marginTop: -50 } },
                                    user ? external__react__default.a.createElement(
                                        'span',
                                        null,
                                        external__react__default.a.createElement(
                                            'span',
                                            { style: { color: '#999' } },
                                            'Hello! '
                                        ),
                                        user
                                    ) : 'What is your name?'
                                ),
                                !user && external__react__default.a.createElement('input', { type: 'text', className: 'form-control mt-3 px-3 py-2',
                                    onKeyUp: this.handleKeyUp, autoComplete: 'off',
                                    style: nameInputStyles })
                            )
                        ),
                        external__react__default.a.createElement(
                            'section',
                            { className: 'col-md-4 position-relative d-flex flex-wrap h-100 align-items-start  align-content-between bg-white px-0' },
                            user && external__react__default.a.createElement(components_Chat, { activeUser: user })
                        )
                    )
                )
            );
        }
    }]);

    return IndexPage;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
    return external__react__default.a.createElement(pages_IndexPage, null);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ })
/******/ ]);