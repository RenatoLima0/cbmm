if(document.querySelector('.nav-princ')){
  const ativaMenu = () => {
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const itemsMenu = document.querySelector('.items-menu');
    
    const clickMenu = () => {
      menuHamburger.classList.toggle('ativo');
      itemsMenu.classList.toggle('ativo');
    }
  
    menuHamburger.addEventListener('click', clickMenu);
  }
  
  ativaMenu();  
}

if(document.querySelector('.caixa-flutuante')){

  const animaCol = () => {
    const mainContent = document.querySelector('.main-content');
    const caixaFlut = document.querySelector('.caixa-flutuante');
    const sectionTop = mainContent.getBoundingClientRect().top;
    
    if(sectionTop < 70){
      caixaFlut.classList.add('fixa');
    } else if (sectionTop > 70) {
      caixaFlut.classList.remove('fixa');
    } 
  }

  window.addEventListener('scroll', animaCol);
}

$('.owl-carousel-main').owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0:{
      dots: true,
      items:1,
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
  loop: false,
  nav: false,
  responsive: {
    0:{
      items:1,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
    },
    600:{
      items:3
    },
    1024:{
      margin: 24
    },
    1320:{
      margin: 48,
    }
  }
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})