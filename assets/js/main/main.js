if(document.querySelector('.nav-princ')){
  const ativaMenu = () => {
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const itemsMenu = document.querySelector('.items-menu');
    
    const clickMenu = () => {
      menuHamburger.classList.toggle('ativo');
      itemsMenu.classList.toggle('ativo');
    }
  
    ['touchstart', 'click'].forEach(userEvent => {
      menuHamburger.addEventListener(userEvent, clickMenu);
    });
  }
  
  ativaMenu();  
}

$('.owl-carousel-main').owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
})

$('.owl-carousel-relat').owlCarousel({
  loop: true,
  margin: 48,
  nav: false,
  responsive: {
    0:{
      items:1
    },
    600:{
      items:3
    }
  }
})