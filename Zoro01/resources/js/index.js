function handleMarquee(){
    const marquee = document.querySelectorAll('#marquee');
    let speed = 1;
    let lastScrollPos = 0;
    let timer;
  
    marquee.forEach(function(el){
      // stop animation on mouseenter
      mouseEntered = false;
      document.querySelector('.inner').addEventListener('mouseenter', function() {
        mouseEntered = true;
      })
      document.querySelector('.inner').addEventListener('mouseleave', function() {
        mouseEntered = false
      })
  
      const container = el.querySelector('.inner');
      const content = el.querySelector('.inner > *');
      //Get total width
      const  elWidth = content.offsetWidth;
      
      //Duplicate content
      let clone = content.cloneNode(true);
      container.appendChild(clone);
      
      let progress = 1;
      function loop(){
        if (mouseEntered === false) {progress = progress-speed;} 
        if (progress <= elWidth*-1) {progress=0;}
        container.style.transform = 'translateX(' + progress + 'px)';
        window.requestAnimationFrame(loop);
      }
      loop();
    });
    
    function handleSpeedClear(){
      speed = 4;
    }
  };
  
  handleMarquee();
// menu4-active and articles active 

  
  const menuItems4 = document.querySelectorAll('.menu-4 li');
  const articlesItems4 = document.querySelectorAll('section.articles');
 
      menuItems4.forEach((item,index) => {
        
          item.addEventListener('click', function(event) {
              // Prevent the default link behavior
              event.preventDefault();
  
              // Remove the active class from all menu items
              menuItems4.forEach(menuItem => {
                  menuItem.classList.remove('current');
              });
              articlesItems4.forEach(articlesItem => {
                articlesItem.classList.remove('articles-active');
            });
              // Add the active class to the clicked menu item
              item.classList.add('current');
              articlesItems4[index].classList.add('articles-active')
          });
      });


// ---------------------------slider image . click swipper ------------------
var Swipes = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  },
});