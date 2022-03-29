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
    const navegacaoPags = document.querySelector('.navegacao-pags')
    const caixaFlut = document.querySelector('.caixa-flutuante');
    const sectionTop = mainContent.getBoundingClientRect().top;
    // console.log(sectionTop);
    
    if(sectionTop < 100){
      caixaFlut.classList.add('fixa');
      navegacaoPags.classList.add('fixa');
    } else if (sectionTop > 100) {
      caixaFlut.classList.remove('fixa');
      navegacaoPags.classList.remove('fixa');
    } 
  }

  // const ativaItemFlutuante = () => {
  //   const listaCaixa = document.querySelectorAll('.caixa-flutuante li');
  //   const titlesMain = document.querySelectorAll('.main-content h3.main-title');

  //   const limpaLista = () => {
  //     listaCaixa.forEach(item => item.classList.remove('ativo'));
  //   }

  //   titlesMain.forEach((title, index) => {
  //     const titleTop = title.getBoundingClientRect().top;
  //     console.log('item ' + index + ' ' + titleTop);

  //     if(titleTop < 300){
  //       limpaLista();
  //       listaCaixa[index].classList.add('ativo');
  //     } else if (titleTop < 0){
  //       limpaLista();
  //     }
  //   })

  // }
  
  window.addEventListener('scroll', animaCol);
  // window.addEventListener('scroll', ativaItemFlutuante);
  
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