import "../scss/fonts.scss"
import "../scss/style.scss"
import "../scss/blocks/menu-button.scss"
import "../scss/blocks/services-menu.scss"
import "../scss/blocks/sidebar.scss"
import "../scss/blocks/swiper-slide.scss"
import "../scss/blocks/button-resize.scss"
import "../scss/blocks/modal.scss"
import "./swiper.js"

// Боковое меню

const btnSidebarToggle=document.querySelector("header .menu-button--burger"),
      pageHeader=document.querySelector("body > header"),
      sidebar=document.querySelector("body > header > .sidebar"),
      sidebarHide=function() {
        btnSidebarToggle.classList.remove("menu-button--close")
        btnSidebarToggle.classList.add("menu-button--burger")
        pageHeader.removeAttribute("class")
        //sidebar.classList.remove("sidebar--visible")
        sidebar.classList.add("sidebar--hiding")
        sidebar.content.style.left=`-${sidebar.content.clientWidth}px`
      }
sidebar.content=sidebar.querySelector(".sidebar__content")

btnSidebarToggle.addEventListener("click", e => {
  if (btnSidebarToggle.classList.contains("menu-button--burger")) {
    btnSidebarToggle.classList.remove("menu-button--burger")
    btnSidebarToggle.classList.add("menu-button--close")
    sidebar.classList.remove("sidebar--hiding")
    pageHeader.classList.add("sidebar--visible")
    sidebar.classList.add("sidebar--visible")
    sidebar.content.style.left=`-${sidebar.content.clientWidth}px`
    setTimeout(()=>{
      sidebar.content.style.left="0"
    }, 1)
  } else sidebarHide()
})

sidebar.addEventListener("click", e => {
  if (e.target==sidebar) sidebarHide()
})

sidebar.content.addEventListener("transitionend", ()=>{
  //if (sidebar.content.offsetLeft<0) {
  if (sidebar.classList.contains("sidebar--hiding")) {
    sidebar.classList.remove("sidebar--visible")
    sidebar.classList.remove("sidebar--hiding")
    sidebar.content.removeAttribute("style")
  }
})

// Кнопки "Обратная связь" и "Заказать звонок"

for (let btn of ["menu-button--call", "menu-button--feedback"]) {
  let sidebarBtn=document.querySelector(".sidebar button."+btn)
  btn=document.querySelector(".btn-group-right button."+btn)

  let modal=btn.dataset.modalTarget
  modal=document.querySelector(".modal--"+modal)
  modal.content=modal.querySelector(".modal__content")
  modal.querySelector(".menu-button--close").addEventListener("click",()=>{
  modal.content.removeAttribute("style")
    setTimeout(()=>{
      modal.classList.remove("modal--visible")
    }, 1000)
  })

  //modal.content.addEventListener("transitionend", ()=>{})

  btn.addEventListener("click", ()=>{
    modal.classList.add("modal--visible")
    setTimeout(()=>{
      modal.content.style.transform="translateX(0)"
    }, 1)
  })

  sidebarBtn.addEventListener("click",()=>{
    if (window.innerWidth<1366) {
      sidebar.content.style.left=`-${sidebar.content.clientWidth}px`
      sidebar.setAttribute("style", "-webkit-backdrop-filter: none")
      sidebar.style.background="none"
      sidebar.style.backdropFilter="none"
      sidebar.style.zIndex="3"
      pageHeader.removeAttribute("class")
    }
    modal.classList.add("modal--visible")
    setTimeout(()=>{
      modal.content.style.transform="translateX(0)"
      btnSidebarToggle.classList.remove("menu-button--close")
      btnSidebarToggle.classList.add("menu-button--burger")
    }, 1)
    setTimeout(()=>{
      sidebar.classList.remove("sidebar--visible")
      sidebar.removeAttribute("style")
      sidebar.content.removeAttribute("style")
    }, 1000)
  })
}

// Отправка данных формы

document.querySelector("form").addEventListener("submit",e=>{
  e.preventDefault()
})
