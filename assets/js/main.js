"use strict";var ativaMenu;document.querySelector(".nav-princ")&&(ativaMenu=function(){function t(){o.classList.toggle("ativo"),e.classList.toggle("ativo")}var o=document.querySelector(".menu-hamburguer"),e=document.querySelector(".items-menu");["touchstart","click"].forEach(function(e){o.addEventListener(e,t)})})(),$(".owl-carousel-main").owlCarousel({loop:!1,margin:24,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:4}}}),$(".owl-carousel-relat").owlCarousel({loop:!0,margin:48,nav:!1,responsive:{0:{items:1},600:{items:3}}});