const screenSize_md="767px"

let swiper={destroyed: true}

const makeSwiper=function() {
  swiper=new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    }
  })
  swiper.destroy=function() {
    for (let s of this) {
      s.destroy()
    }
    swiper={destroyed: true}
  }
}

function setFixedHeight(element) {
  let rows=Math.ceil(element.children.length
    / (window.matchMedia("(min-width: 1366px)").matches?4:3))
  let rowGap=element.parentElement.classList.contains("brand-list")?5:0
  /* Если слайд содержит текст, то промежуток между слайдами по вертикали
                 схлопывается, поэтому у свайпера .device-list rowGap==0 */
  element.style.height=`${
    (element.children[0].clientHeight+10) * rows + rowGap * rows}px`
}

for (let btn of document.querySelectorAll(".swiper .button-resize")) {
  (swiper=>{
    swiper.wrapper=swiper.querySelector(".swiper-wrapper")
    swiper.wrapper.collapsedHeight=swiper.wrapper.clientHeight+"px"

    btn.addEventListener("click", ()=>{
      //console.log(swiper.wrapper.clientHeight)
      //console.log(swiper.wrapper.offsetHeight)
      if (btn.classList.contains("button-resize--collapse")) {
        btn.classList.remove("button-resize--collapse")
        btn.classList.add("button-resize--expand")
        setFixedHeight(swiper.wrapper)
        setTimeout(()=>{
          swiper.wrapper.style.height=swiper.wrapper.collapsedHeight
        }, 1)
        btn.textContent="Показать все"
      } else {
        btn.classList.remove("button-resize--expand")
        btn.classList.add("button-resize--collapse")
        setFixedHeight(swiper.wrapper)
        swiper.classList.add("expand-y")
        btn.textContent="Скрыть"
      }
    })

    swiper.wrapper.addEventListener("transitionend", ()=>{
      if (!swiper.classList.contains("swiper-initialized")) {
        //console.log(btn.className)
        if (btn.classList.contains("button-resize--expand")) {
          swiper.classList.remove("expand-y")
        }
        swiper.wrapper.removeAttribute("style")
      }
    })
  })(btn.parentElement)
}

function maxWidthMedia(s) {
  return window.matchMedia(`(max-width: ${s})`)
}

function minWidthMedia(s) {
  return window.matchMedia(`(min-width: ${s})`)
}

if (maxWidthMedia(screenSize_md).matches) makeSwiper()

window.addEventListener("resize", e=>{
  if (minWidthMedia(screenSize_md).matches && !swiper.destroyed) {
    swiper.destroy()
  } else if (maxWidthMedia(screenSize_md).matches && swiper.destroyed) {
    makeSwiper()
  }
})
