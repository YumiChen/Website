"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React;
var Component = _React.Component;

// wait for all images to be loaded

var imgs = ["https://s6.postimg.org/bqh9924xt/p18.jpg", "https://s6.postimg.org/6dseuxh1d/p16.jpg", "https://s6.postimg.org/hd8k9f14x/愛_.jpg", "https://s6.postimg.org/gxxagef7l/satr_vs_the_Xmas.png", "https://s6.postimg.org/7skc8smf5/001.jpg", "https://s6.postimg.org/rfncc5g1t/GE1.jpg", "https://s6.postimg.org/i41af73i9/08.jpg", "https://s6.postimg.org/beuqz6i69/013_.jpg", "https://s6.postimg.org/g69vpkv0h/juan01.jpg"],
    navs = ["Top", "About", "Works", "Contact"];

var totalImgNum = imgs.length;
//let slideChanging = false,
//    imgWidth;

// action creator
var changeImg = function changeImg(event) {
  var img = event.target.getAttribute("data-key");
  return {
    type: "CHANGEIMG",
    payload: img
  };
};

var changeToNull = function changeToNull(event) {
  return {
    type: "CHANGETONULL",
    payload: null
  };
};

// reducer
var reducer = function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  return action.payload === null || action.payload ? action.payload : state;
};

// root reducer
var rootReducer = Redux.combineReducers({
  img: reducer
});

// Components & containers

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.scrollToElement = _this.scrollToElement.bind(_this);
    return _this;
  }

  Nav.prototype.showNav = function showNav(event) {
    var nav = document.querySelector(".nav"),
        page = document.querySelector(".page");
    nav.classList.remove("showNav");
    page.style.filter = "blur(0px)";
  };

  Nav.prototype.scrollToElement = function scrollToElement(event) {
    var name = event.target.innerHTML.toLowerCase();
    document.querySelector('.' + name).scrollIntoView({
      behavior: 'smooth'
    });

    var nav = document.querySelector(".nav"),
        page = document.querySelector(".page");page.style.filter = "blur(0px)";
    nav.classList.remove("showNav");
  };

  Nav.prototype.render = function render() {
    var _this2 = this;

    var nav = navs.map(function (nav) {
      return React.createElement(
        "div",
        { className: "navItem", onClick: _this2.scrollToElement },
        nav
      );
    });
    return React.createElement(
      "div",
      { className: "nav" },
      React.createElement("i", { className: "fa fa-times", "aria-hidden": "true", onClick: this.showNav }),
      nav
    );
  };

  return Nav;
}(Component);

var styles = imgs.map(function (img) {
  return {
    backgroundImage: 'url(' + img + ')'
  };
});

var NavBtn = function (_Component2) {
  _inherits(NavBtn, _Component2);

  function NavBtn(props) {
    _classCallCheck(this, NavBtn);

    return _possibleConstructorReturn(this, _Component2.call(this, props));
  }

  NavBtn.prototype.showNav = function showNav(event) {
    var nav = document.querySelector(".nav"),
        page = document.querySelector(".page");
    page.style.filter = "blur(2px)";
    nav.classList.add("showNav");
  };

  NavBtn.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "navbtn" },
      React.createElement("i", { className: "fa fa-bars ", "aria-hidden": "true", onClick: this.showNav })
    );
  };

  return NavBtn;
}(Component);

var TopSlider = function (_Component3) {
  _inherits(TopSlider, _Component3);

  function TopSlider(props) {
    _classCallCheck(this, TopSlider);

    return _possibleConstructorReturn(this, _Component3.call(this, props));
  }

  TopSlider.prototype.componentWillmount = function componentWillmount() {
    var _this5 = this;

    window.removeEventListener("resize", debounce(function () {
      _this5.forceUpdate();
    }, 1000));
  };

  TopSlider.prototype.componentDidMount = function componentDidMount() {
    var _this6 = this;

    window.addEventListener("resize", debounce(function () {
      _this6.forceUpdate();
    }, 1000));
  };

  TopSlider.prototype.render = function render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return React.createElement(
      "div",
      { className: "top" },
      React.createElement(
        "h1",
        null,
        "Azure ",
        React.createElement("br", null),
        "Seasons"
      ),
      React.createElement(
        Slider,
        _extends({}, settings, { className: " sliderBox" }),
        React.createElement("div", { className: "img", style: styles[0] }),
        React.createElement("div", { className: "img", style: styles[1] })
      )
    );
  };

  return TopSlider;
}(Component);

var About = function About(props) {
  return React.createElement(
    "div",
    { className: "about" },
    React.createElement("div", { className: "avatar" }),
    React.createElement(
      "div",
      { className: "info" },
      React.createElement(
        "h3",
        null,
        "Yumi Chen"
      ),
      React.createElement(
        "p",
        null,
        "Developer who's learning React."
      )
    )
  );
};

var Works = function Works(props) {
  var works = imgs.map(function (img, index) {
    return React.createElement("div", {
      className: "piece",
      style: styles[index],
      onClick: props.changeImg,
      "data-key": index
    });
  });
  return React.createElement(
    "div",
    { className: "works" },
    React.createElement(
      "p",
      null,
      "Illustrations"
    ),
    works
  );
};

var mapDispatchToProps_works = function mapDispatchToProps_works(dispatch) {
  return Redux.bindActionCreators({ changeImg: changeImg }, dispatch);
};

Works = ReactRedux.connect(null, mapDispatchToProps_works)(Works);

var Contact = function Contact(props) {
  return React.createElement(
    "div",
    { className: "contact" },
    React.createElement(
      "p",
      null,
      "Contact"
    ),
    React.createElement(
      "form",
      null,
      React.createElement(
        "div",
        { className: "contactItem" },
        React.createElement(
          "label",
          null,
          "Name"
        ),
        React.createElement("input", { type: "text" })
      ),
      React.createElement(
        "div",
        { className: "contactItem" },
        React.createElement(
          "label",
          null,
          "Email"
        ),
        React.createElement("input", { type: "text" })
      ),
      React.createElement(
        "div",
        { className: "contactItem" },
        React.createElement(
          "label",
          null,
          "Message"
        ),
        React.createElement("textArea", null)
      ),
      React.createElement("input", { type: "submit", id: "submit", value: "SEND" })
    )
  );
};

var ImgBox = function (_Component4) {
  _inherits(ImgBox, _Component4);

  function ImgBox(props) {
    _classCallCheck(this, ImgBox);

    return _possibleConstructorReturn(this, _Component4.call(this, props));
  }

  ImgBox.prototype.componentWillmount = function componentWillmount() {
    var _this8 = this;

    window.removeEventListener("resize", debounce(function () {
      _this8.forceUpdate();
    }, 1000));
  };

  ImgBox.prototype.componentDidMount = function componentDidMount() {
    var _this9 = this;

    window.addEventListener("resize", debounce(function () {
      _this9.forceUpdate();
    }, 1000));
  };

  ImgBox.prototype.render = function render() {
    var img = this.props.img;
    var works = imgs.map(function (img, index) {
      return React.createElement(
        "div",
        null,
        React.createElement("img", {
          src: img,
          "data-key": index
        })
      );
    });
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      initialSlide: img,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return img ? React.createElement(
      "div",
      {
        className: "imgBox"
      },
      React.createElement("i", { className: "fa fa-times closeImgBox",
        onClick: this.props.changeToNull }),
      React.createElement(
        Slider,
        settings,
        works
      )
    ) : null;
  };

  return ImgBox;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return { img: state.img };
};

var mapDispatchToProps_imgbox = function mapDispatchToProps_imgbox(dispatch) {
  return Redux.bindActionCreators({ changeToNull: changeToNull }, dispatch);
};

ImgBox = ReactRedux.connect(mapStateToProps, mapDispatchToProps_imgbox)(ImgBox);

// rendering component
var Provider = ReactRedux.Provider,
    store = Redux.createStore(rootReducer);

var Page = function (_Component5) {
  _inherits(Page, _Component5);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _Component5.call(this, props));
  }

  Page.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(
        "div",
        null,
        React.createElement(ImgBox, null),
        React.createElement(NavBtn, null),
        React.createElement(Nav, null),
        React.createElement(
          "div",
          { className: "page" },
          React.createElement(TopSlider, null),
          React.createElement(About, null),
          React.createElement(Works, null),
          React.createElement(Contact, null),
          React.createElement(
            "footer",
            null,
            "Copyright © 2017 Azure Seasons"
          )
        )
      )
    );
  };

  return Page;
}(Component);

ReactDOM.render(React.createElement(Page, null), document.body);

// TODO

// tool function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};