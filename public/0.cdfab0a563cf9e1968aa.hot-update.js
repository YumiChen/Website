webpackHotUpdate(0,{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(277)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.works p, .contact p {\n  text-align: center;\n  font-size: 1.2em; }\n\n.dotContainer {\n  z-index: 10;\n  width: 1vw;\n  height: 1vw;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.dot:nth-child(1) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(36deg);\n  animation: opa1 1s infinite both; }\n\n@keyframes opa1 {\n  0% {\n    opacity: .5; }\n  0% {\n    opacity: .5; }\n  10% {\n    opacity: 1; }\n  20% {\n    opacity: .5; } }\n\n.dot:nth-child(2) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(72deg);\n  animation: opa2 1s infinite both; }\n\n@keyframes opa2 {\n  0% {\n    opacity: .5; }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: .5; } }\n\n.dot:nth-child(3) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(108deg);\n  animation: opa3 1s infinite both; }\n\n@keyframes opa3 {\n  0% {\n    opacity: .5; }\n  20% {\n    opacity: .5; }\n  30% {\n    opacity: 1; }\n  40% {\n    opacity: .5; } }\n\n.dot:nth-child(4) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(144deg);\n  animation: opa4 1s infinite both; }\n\n@keyframes opa4 {\n  0% {\n    opacity: .5; }\n  30% {\n    opacity: .5; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: .5; } }\n\n.dot:nth-child(5) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(180deg);\n  animation: opa5 1s infinite both; }\n\n@keyframes opa5 {\n  0% {\n    opacity: .5; }\n  40% {\n    opacity: .5; }\n  50% {\n    opacity: 1; }\n  60% {\n    opacity: .5; } }\n\n.dot:nth-child(6) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(216deg);\n  animation: opa6 1s infinite both; }\n\n@keyframes opa6 {\n  0% {\n    opacity: .5; }\n  50% {\n    opacity: .5; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: .5; } }\n\n.dot:nth-child(7) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(252deg);\n  animation: opa7 1s infinite both; }\n\n@keyframes opa7 {\n  0% {\n    opacity: .5; }\n  60% {\n    opacity: .5; }\n  70% {\n    opacity: 1; }\n  80% {\n    opacity: .5; } }\n\n.dot:nth-child(8) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(288deg);\n  animation: opa8 1s infinite both; }\n\n@keyframes opa8 {\n  0% {\n    opacity: .5; }\n  70% {\n    opacity: .5; }\n  80% {\n    opacity: 1; }\n  90% {\n    opacity: .5; } }\n\n.dot:nth-child(9) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(324deg);\n  animation: opa9 1s infinite both; }\n\n@keyframes opa9 {\n  0% {\n    opacity: .5; }\n  80% {\n    opacity: .5; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: .5; } }\n\n.dot:nth-child(10) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: #3368c4;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(360deg);\n  animation: opa10 1s infinite both; }\n\n@keyframes opa10 {\n  0% {\n    opacity: .5; }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 1; }\n  110% {\n    opacity: .5; } }\n\n* {\n  position: relative;\n  font-family: Overpass;\n  font-size: 1em;\n  box-sizing: border-box;\n  font-family: Ubuntu Condensed, 微軟正黑體;\n  font-size: 1.05em;\n  transition: all .2s linear; }\n\nhtml, body {\n  margin: 0;\n  height: 100vh;\n  overflow-x: hidden; }\n\nbody::-webkit-scrollbar-track {\n  border: 1px solid #14b1ce;\n  background-color: #F5F5F5; }\n\nbody::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #14b1ce; }\n\nhtml {\n  overflow: hidden; }\n\n.nav {\n  width: 0px;\n  background-color: #3368c4;\n  z-index: 6;\n  overflow: hidden;\n  height: 100vh;\n  position: fixed;\n  height: 100vh;\n  padding-top: 2em; }\n  .nav i {\n    position: absolute;\n    top: 0;\n    color: #fff;\n    font-size: 2em;\n    right: 0;\n    margin: .5em;\n    cursor: pointer; }\n    .nav i:hover {\n      color: #ffe44c; }\n  .nav .navItem {\n    width: 60%;\n    margin: 3vw;\n    color: white;\n    cursor: pointer;\n    transition: all .5s;\n    font-size: 1.5em; }\n    .nav .navItem:hover {\n      color: #ffe44c; }\n      .nav .navItem:hover::after {\n        content: \"\";\n        animation: underline .5s 1 linear forwards;\n        height: 0;\n        position: absolute;\n        top: 1.4em;\n        left: 0;\n        border: solid 2px; }\n\n@keyframes underline {\n  0% {\n    width: 0; }\n  100% {\n    width: 10vw; } }\n\n.wideNavContainer {\n  position: fixed; }\n\n.about {\n  width: 100%;\n  background-color: #14b1ce;\n  padding: 5vw 0; }\n  .about .avatar {\n    display: inline-block;\n    width: 20vw;\n    height: 20vw;\n    background-image: url(https://s6.postimg.org/iaqdzh37l/avatar.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    border-radius: 10em;\n    border: solid 3px white;\n    margin-left: 4vw; }\n  .about .info {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 2.5em;\n    color: white; }\n    .about .info h3 {\n      font-family: Lobster;\n      margin: 0;\n      font-size: 1.5em; }\n    .about .info p {\n      margin: 0.5em; }\n\n.top .sliderBox {\n  height: 100vh;\n  overflow: hidden; }\n  .top .sliderBox .slick-list {\n    height: 100%;\n    width: 100vw; }\n    .top .sliderBox .slick-list .slick-track {\n      height: 100%;\n      width: 100vw; }\n      .top .sliderBox .slick-list .slick-track .img {\n        width: 100vw;\n        height: 100%;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 40%; }\n  .top .sliderBox .slick-prev {\n    position: absolute;\n    z-index: 5;\n    transform: translateX(7vw); }\n  .top .sliderBox .slick-next {\n    position: absolute;\n    z-index: 5;\n    transform: translateX(-7vw); }\n\n.top h1 {\n  position: absolute;\n  z-index: 2;\n  font-size: 7em;\n  color: white;\n  margin: 0;\n  right: 2vw;\n  bottom: 2vw;\n  font-family: Lora;\n  text-align: right;\n  line-height: 0.9em;\n  mix-blend-mode: overlay; }\n\n.works {\n  display: flex;\n  justify-content: space-between;\n  padding: 4vw;\n  flex-wrap: wrap; }\n  .works p {\n    width: 100%; }\n  .works .piece {\n    cursor: pointer;\n    width: 28vw;\n    height: 20vw;\n    margin: 1vw 0;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    transition: all 1s;\n    background-size: 100%; }\n    .works .piece:hover {\n      background-size: 110%;\n      background-position: 50% 50%; }\n\n.contact {\n  width: 100%; }\n  .contact form {\n    width: 37%;\n    min-width: 300px;\n    margin: 5% auto 10% auto;\n    border: solid 1px;\n    padding: 0.7em;\n    background-color: white;\n    box-sizing: borderBox; }\n    .contact form::before {\n      content: \"\";\n      position: absolute;\n      background: repeating-linear-gradient(45deg, #3368c4, #3368c4 10px, #fdfff7 10px, #fdfff7 20px, #e83758 20px, #e83758 30px, #fdfff7 30px, white 40px);\n      width: 105%;\n      height: 104%;\n      top: -2.5%;\n      left: -2.5%;\n      border: solid 1px;\n      z-index: -1; }\n    .contact form .contactItem {\n      width: 100%; }\n      .contact form .contactItem label {\n        display: block;\n        width: 100%;\n        margin: 3% 0; }\n      .contact form .contactItem input {\n        width: 100%; }\n    .contact form .contactItem:nth-child(4) {\n      width: 100%;\n      height: 50%; }\n      .contact form .contactItem:nth-child(4) textArea {\n        width: 100%;\n        height: 30vh; }\n    .contact form input[type=\"submit\"] {\n      left: 50%;\n      transform: translateX(-50%);\n      background-color: #3368c4;\n      border-radius: 0.5em;\n      color: white;\n      cursor: pointer;\n      border: none;\n      padding: 0.3em 0.8em; }\n      .contact form input[type=\"submit\"]:hover {\n        background-color: #14b1ce; }\n\nfooter {\n  text-align: center;\n  padding: 1em;\n  background-color: #14b1ce;\n  color: white; }\n\n.underlined::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  height: 1px;\n  transform: translateX(-50%);\n  border-bottom: solid 3.5px #ccb847;\n  animation: underline 1s 1 forwards;\n  transition-duration: 2s; }\n\n@keyframes underline {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n@keyframes write {\n  0% {\n    transform: translateX(0em) rotate(0deg); }\n  25% {\n    transform: translateX(0.3em) rotate(-20deg); }\n  50% {\n    transform: translateX(0em) rotate(0deg); }\n  75% {\n    transform: translateX(0.3em) rotate(20deg); }\n  100% {\n    transform: translateX(0em) rotate(0deg); } }\n\n.showNav {\n  width: 40vw; }\n\n.navbtn {\n  position: fixed;\n  top: 0;\n  height: 12vw;\n  margin: .3em;\n  color: white;\n  font-size: 2em;\n  z-index: 3;\n  cursor: pointer; }\n  .navbtn i:hover {\n    color: #ffe44c; }\n\n.navScrolled {\n  color: #3368c4; }\n\n.imgBox {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 7;\n  background-color: rgba(0, 0, 0, 0.8); }\n  .imgBox .slick-slider {\n    transition: all .5s;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100vw;\n    height: 90vh; }\n    .imgBox .slick-slider .slick-list, .imgBox .slick-slider .slick-track {\n      width: 100vw;\n      height: 90vh; }\n    .imgBox .slick-slider .slick-prev {\n      position: absolute;\n      z-index: 5;\n      transform: translateX(7vw) scale(1.7, 1.7); }\n      .imgBox .slick-slider .slick-prev::before {\n        content: \"\\300A\"; }\n    .imgBox .slick-slider .slick-next {\n      position: absolute;\n      z-index: 5;\n      transform: translateX(-7vw) scale(1.7, 1.7); }\n      .imgBox .slick-slider .slick-next::before {\n        content: \"\\300B\"; }\n  .imgBox .closeImgBox {\n    z-index: 8;\n    color: white;\n    position: absolute;\n    right: 0;\n    margin: .5em;\n    margin-right: 1em;\n    font-size: 1.5em;\n    cursor: pointer; }\n    .imgBox .closeImgBox:hover {\n      color: #ffe44c; }\n  .imgBox img {\n    height: 85%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n\n@media only screen and (max-width: 479px) {\n  body {\n    height: 100%; }\n  .top {\n    height: 91vh; }\n    .top .sliderBox .slick-list .slick-track .img:nth-child(2), .top .sliderBox .slick-list .slick-track .slick-slide:nth-child(4) {\n      background-position: 35% 40%; }\n  .nav .navItem {\n    margin: 5vw; }\n  .top h1 {\n    font-size: 4em; }\n  .about {\n    padding: 3em 0; }\n    .about .avatar {\n      margin: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 40vw;\n      height: 40vw; }\n    .about .info {\n      width: 100%;\n      margin: 0;\n      text-align: center; }\n  .works .piece {\n    width: 100%;\n    height: 20vh;\n    background-position: 50% 30%; }\n    .works .piece:hover {\n      background-size: 110%;\n      background-position: 50% 35%; }\n  .contact form {\n    width: 85vw;\n    margin: 5% auto 20% auto; }\n  .showNav {\n    width: 100vw; }\n  .imgBox img {\n    height: unset;\n    width: 90vw; }\n  .imgBox .slick-slider .slick-prev, .imgBox .slick-slider .slick-next {\n    opacity: 0; } }\n", ""]);

// exports


/***/ })

})