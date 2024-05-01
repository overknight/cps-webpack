/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ (() => {

const screenSize_md = "767px";
let swiper = {
  destroyed: true
};
const makeSwiper = function () {
  swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    }
  });
  swiper.destroy = function () {
    for (let s of this) {
      s.destroy();
    }
    swiper = {
      destroyed: true
    };
  };
};
function setFixedHeight(element) {
  let rows = Math.ceil(element.children.length / (window.matchMedia("(min-width: 1366px)").matches ? 4 : 3));
  let rowGap = element.parentElement.classList.contains("brand-list") ? 5 : 0;
  /* Если слайд содержит текст, то промежуток между слайдами по вертикали
                 схлопывается, поэтому у свайпера .device-list rowGap==0 */
  element.style.height = `${(element.children[0].clientHeight + 10) * rows + rowGap * rows}px`;
}
for (let btn of document.querySelectorAll(".swiper .button-resize")) {
  (swiper => {
    swiper.wrapper = swiper.querySelector(".swiper-wrapper");
    swiper.wrapper.collapsedHeight = swiper.wrapper.clientHeight + "px";
    btn.addEventListener("click", () => {
      //console.log(swiper.wrapper.clientHeight)
      //console.log(swiper.wrapper.offsetHeight)
      if (btn.classList.contains("button-resize--collapse")) {
        btn.classList.remove("button-resize--collapse");
        btn.classList.add("button-resize--expand");
        setFixedHeight(swiper.wrapper);
        setTimeout(() => {
          swiper.wrapper.style.height = swiper.wrapper.collapsedHeight;
        }, 1);
        btn.textContent = "Показать все";
      } else {
        btn.classList.remove("button-resize--expand");
        btn.classList.add("button-resize--collapse");
        setFixedHeight(swiper.wrapper);
        swiper.classList.add("expand-y");
        btn.textContent = "Скрыть";
      }
    });
    swiper.wrapper.addEventListener("transitionend", () => {
      if (!swiper.classList.contains("swiper-initialized")) {
        //console.log(btn.className)
        if (btn.classList.contains("button-resize--expand")) {
          swiper.classList.remove("expand-y");
        }
        swiper.wrapper.removeAttribute("style");
      }
    });
  })(btn.parentElement);
}
function maxWidthMedia(s) {
  return window.matchMedia(`(max-width: ${s})`);
}
function minWidthMedia(s) {
  return window.matchMedia(`(min-width: ${s})`);
}
if (maxWidthMedia(screenSize_md).matches) makeSwiper();
window.addEventListener("resize", e => {
  if (minWidthMedia(screenSize_md).matches && !swiper.destroyed) {
    swiper.destroy();
  } else if (maxWidthMedia(screenSize_md).matches && swiper.destroyed) {
    makeSwiper();
  }
});

/***/ }),

/***/ "./scss/blocks/button-resize.scss":
/*!****************************************!*\
  !*** ./scss/blocks/button-resize.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/blocks/menu-button.scss":
/*!**************************************!*\
  !*** ./scss/blocks/menu-button.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/blocks/modal.scss":
/*!********************************!*\
  !*** ./scss/blocks/modal.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/blocks/services-menu.scss":
/*!****************************************!*\
  !*** ./scss/blocks/services-menu.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/blocks/sidebar.scss":
/*!**********************************!*\
  !*** ./scss/blocks/sidebar.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/blocks/swiper-slide.scss":
/*!***************************************!*\
  !*** ./scss/blocks/swiper-slide.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/fonts.scss":
/*!*************************!*\
  !*** ./scss/fonts.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/fonts.scss */ "./scss/fonts.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_blocks_menu_button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/blocks/menu-button.scss */ "./scss/blocks/menu-button.scss");
/* harmony import */ var _scss_blocks_services_menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/blocks/services-menu.scss */ "./scss/blocks/services-menu.scss");
/* harmony import */ var _scss_blocks_sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/blocks/sidebar.scss */ "./scss/blocks/sidebar.scss");
/* harmony import */ var _scss_blocks_swiper_slide_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/blocks/swiper-slide.scss */ "./scss/blocks/swiper-slide.scss");
/* harmony import */ var _scss_blocks_button_resize_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/blocks/button-resize.scss */ "./scss/blocks/button-resize.scss");
/* harmony import */ var _scss_blocks_modal_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/blocks/modal.scss */ "./scss/blocks/modal.scss");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swiper.js */ "./js/swiper.js");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swiper_js__WEBPACK_IMPORTED_MODULE_8__);










// Боковое меню

const btnSidebarToggle = document.querySelector("header .menu-button--burger"),
  pageHeader = document.querySelector("body > header"),
  sidebar = document.querySelector("body > header > .sidebar"),
  sidebarHide = function () {
    btnSidebarToggle.classList.remove("menu-button--close");
    btnSidebarToggle.classList.add("menu-button--burger");
    pageHeader.removeAttribute("class");
    //sidebar.classList.remove("sidebar--visible")
    sidebar.classList.add("sidebar--hiding");
    sidebar.content.style.left = `-${sidebar.content.clientWidth}px`;
  };
sidebar.content = sidebar.querySelector(".sidebar__content");
btnSidebarToggle.addEventListener("click", e => {
  if (btnSidebarToggle.classList.contains("menu-button--burger")) {
    btnSidebarToggle.classList.remove("menu-button--burger");
    btnSidebarToggle.classList.add("menu-button--close");
    sidebar.classList.remove("sidebar--hiding");
    pageHeader.classList.add("sidebar--visible");
    sidebar.classList.add("sidebar--visible");
    sidebar.content.style.left = `-${sidebar.content.clientWidth}px`;
    setTimeout(() => {
      sidebar.content.style.left = "0";
    }, 1);
  } else sidebarHide();
});
sidebar.addEventListener("click", e => {
  if (e.target == sidebar) sidebarHide();
});
sidebar.content.addEventListener("transitionend", () => {
  //if (sidebar.content.offsetLeft<0) {
  if (sidebar.classList.contains("sidebar--hiding")) {
    sidebar.classList.remove("sidebar--visible");
    sidebar.classList.remove("sidebar--hiding");
    sidebar.content.removeAttribute("style");
  }
});

// Кнопки "Обратная связь" и "Заказать звонок"

for (let btn of ["menu-button--call", "menu-button--feedback"]) {
  let sidebarBtn = document.querySelector(".sidebar button." + btn);
  btn = document.querySelector(".btn-group-right button." + btn);
  let modal = btn.dataset.modalTarget;
  modal = document.querySelector(".modal--" + modal);
  modal.content = modal.querySelector(".modal__content");
  modal.querySelector(".menu-button--close").addEventListener("click", () => {
    modal.content.removeAttribute("style");
    setTimeout(() => {
      modal.classList.remove("modal--visible");
    }, 1000);
  });

  //modal.content.addEventListener("transitionend", ()=>{})

  btn.addEventListener("click", () => {
    modal.classList.add("modal--visible");
    setTimeout(() => {
      modal.content.style.transform = "translateX(0)";
    }, 1);
  });
  sidebarBtn.addEventListener("click", () => {
    if (window.innerWidth < 1366) {
      sidebar.content.style.left = `-${sidebar.content.clientWidth}px`;
      sidebar.setAttribute("style", "-webkit-backdrop-filter: none");
      sidebar.style.background = "none";
      sidebar.style.backdropFilter = "none";
      sidebar.style.zIndex = "3";
      pageHeader.removeAttribute("class");
    }
    modal.classList.add("modal--visible");
    setTimeout(() => {
      modal.content.style.transform = "translateX(0)";
      btnSidebarToggle.classList.remove("menu-button--close");
      btnSidebarToggle.classList.add("menu-button--burger");
    }, 1);
    setTimeout(() => {
      sidebar.classList.remove("sidebar--visible");
      sidebar.removeAttribute("style");
      sidebar.content.removeAttribute("style");
    }, 1000);
  });
}

// Отправка данных формы

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map