!function(){"use strict";function e(e){const t=window.pageYOffset+e.getBoundingClientRect().top,n=window.pageXOffset+e.getBoundingClientRect().left,o=window.pageXOffset+e.getBoundingClientRect().right,i=window.pageYOffset+e.getBoundingClientRect().bottom,c=window.pageYOffset,l=window.pageXOffset,d=window.pageXOffset+document.documentElement.clientWidth,r=window.pageYOffset+document.documentElement.clientHeight;return i>c&&t<r&&o>l&&n<d}function t(t,n){const o=document.querySelectorAll(".menu-window__link");e(t)&&(o.forEach((e=>{e.classList.remove("menu-window__link--active")})),n.classList.add("menu-window__link--active"))}function n(){const e=document.querySelector(".about"),n=document.querySelector(".skills"),o=document.querySelector(".experience .container"),i=document.querySelector(".menu-window__link-about"),c=document.querySelector(".menu-window__link-skills"),l=document.querySelector(".menu-window__link-experience");t(e,i),t(o,l),t(n,c)}setTimeout((function(){document.querySelector("body").classList.add("body_visible")}),0),function(){const e=document.querySelector(".light-mode-btn"),t=document.querySelector(".main");function n(){e.classList.add("light-mode-btn--active"),t.classList.add("light")}function o(){e.classList.remove("light-mode-btn--active"),t.classList.remove("light")}window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&n(),"dark"===localStorage.getItem("darkMode")?o():"light"===localStorage.getItem("darkMode")&&n(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"dark"==(e.matches?"dark":"light")?(o(),localStorage.setItem("darkMode","dark")):(n(),localStorage.setItem("darkMode","light"))})),e.addEventListener("click",(()=>{e.classList.toggle("light-mode-btn--active"),t.classList.toggle("light")?localStorage.setItem("darkMode","light"):localStorage.setItem("darkMode","dark")}))}(),function(){const e=document.querySelector("body"),t=document.querySelector(".hamburger"),n=document.querySelector(".menu-window"),o=document.querySelector(".menu-window__block"),i=document.querySelectorAll(".menu-window__link"),c=document.querySelector(".menu-window__close");function l(){n.classList.remove("active"),e.classList.remove("stop-scrolling")}o.addEventListener("click",(e=>{e._isClickWithInMenu=!0})),t.addEventListener("click",(e=>{e._isClickWithInMenu=!0})),e.addEventListener("click",(e=>{e._isClickWithInMenu||l()})),t.addEventListener("click",(()=>{n.classList.add("active"),e.classList.add("stop-scrolling")})),c.addEventListener("click",(()=>{l()})),i.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.querySelector("a").href;l(),setTimeout((()=>{window.location.href=n}),300)}))}))}(),function(){const t=document.querySelector(".skills__rating"),n=document.querySelectorAll(".skills__rating-counter"),o=document.querySelectorAll(".skills__rating-line span"),i=document.querySelectorAll(".skills__rating-per");function c(e){e?i.forEach((e=>{e.classList.add("skills__rating-per--animation")})):i.forEach((e=>{e.classList.remove("skills__rating-per--animation")}))}n.forEach(((e,t)=>{o[t].style["max-width"]=e.textContent})),window.addEventListener("scroll",(()=>{c(e(t))})),c(e(t))}(),n(),window.addEventListener("scroll",(()=>{n()}))}();