const getNav = document.querySelector('.navbar');
const getHamburger = document.querySelector('.nav_hamburger')
const getMenu = document.querySelector('.menu')
events()
// All evetns function
function events(){
    addEventListener('scroll',scrollNav);
    getHamburger.addEventListener('click',toggle)
}


// scroll 
function scrollNav(){
   if(scrollY > 30){
       getNav.classList.add('stiky')
   }else{
      getNav.classList.remove('stiky')
   }
}

// toggle hamburger icon
function toggle(){
    getMenu.classList.toggle('menu_active')
}
 