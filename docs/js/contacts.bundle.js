!function(){"use strict";setTimeout((function(){document.querySelector("body").classList.add("body_visible")}),0),function(){const e=document.querySelector(".light-mode-btn"),t=document.querySelector(".main");function c(){e.classList.add("light-mode-btn--active"),t.classList.add("light")}function o(){e.classList.remove("light-mode-btn--active"),t.classList.remove("light")}window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&c(),"dark"===localStorage.getItem("darkMode")?o():"light"===localStorage.getItem("darkMode")&&c(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"dark"==(e.matches?"dark":"light")?(o(),localStorage.setItem("darkMode","dark")):(c(),localStorage.setItem("darkMode","light"))})),e.addEventListener("click",(()=>{e.classList.toggle("light-mode-btn--active"),t.classList.toggle("light")?localStorage.setItem("darkMode","light"):localStorage.setItem("darkMode","dark")}))}(),function(){const e=document.querySelector("body"),t=document.querySelector(".hamburger"),c=document.querySelector(".menu-window"),o=document.querySelector(".menu-window__block"),i=document.querySelectorAll(".menu-window__link"),n=document.querySelector(".menu-window__close");function d(){c.classList.remove("active"),e.classList.remove("stop-scrolling")}o.addEventListener("click",(e=>{e._isClickWithInMenu=!0})),t.addEventListener("click",(e=>{e._isClickWithInMenu=!0})),e.addEventListener("click",(e=>{e._isClickWithInMenu||d()})),t.addEventListener("click",(()=>{c.classList.add("active"),e.classList.add("stop-scrolling")})),n.addEventListener("click",(()=>{d()})),i.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const c=e.querySelector("a").href;d(),setTimeout((()=>{window.location.href=c}),300)}))}))}(),document.querySelector(".lng-contacts").classList.add("menu__link--active"),document.querySelector(".menu-window__link-contacts").classList.add("menu-window__link--active")}();