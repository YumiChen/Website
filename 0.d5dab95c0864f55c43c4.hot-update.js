webpackHotUpdate(0,{

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _LoadingAnimation = __webpack_require__(280);

var _LoadingAnimation2 = _interopRequireDefault(_LoadingAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
  }

  _createClass(Contact, [{
    key: "onSubmit",
    value: function onSubmit() {
      event.preventDefault();
      var title = document.getElementById("title").value,
          name = document.getElementById("name").value,
          email = document.getElementById("email").value,
          msg = document.getElementById("msg").value,
          api = "https://portfolio-email-server.herokuapp.com/email?title=" + encodeURIComponent(title) + "&name=" + name + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&msg=" + encodeURIComponent(msg);

      if (title === "" || name === "" || email === "" || msg === "") {
        sweetAlert('Oops...', 'There are still empty fields!', 'error');
        return;
      }

      fetch(api, {
        method: "POST"
      }).then(function (data) {
        sweetAlert('Success!', 'Email is sent', 'success');
      }).catch(function (err) {
        sweetAlert('Oops...', 'Something went wrong!', 'error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.onSubmit = this.onSubmit.bind(this);
      return React.createElement(
        "div",
        { className: "contact" },
        this.state.loading ? React.createElement(_LoadingAnimation2.default, null) : null,
        React.createElement(
          "p",
          null,
          "Contact"
        ),
        React.createElement(
          "form",
          { onSubmit: this.onSubmit },
          React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement(
              "label",
              null,
              "Title"
            ),
            React.createElement("input", { type: "text", id: "title" })
          ),
          React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement(
              "label",
              null,
              "Name"
            ),
            React.createElement("input", { type: "text", id: "name" })
          ),
          React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement(
              "label",
              null,
              "Email"
            ),
            React.createElement("input", { type: "text", id: "email" })
          ),
          React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement(
              "label",
              null,
              "Message"
            ),
            React.createElement("textArea", { id: "msg" })
          ),
          React.createElement("input", { type: "submit", id: "submit", value: "SEND" })
        )
      );
    }
  }]);

  return Contact;
}(_react.Component);

module.exports = Contact;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ })

})