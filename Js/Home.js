var logedin=false;
const VueApp =Vue.createApp({
    data(){
        return{
logurl:logedin?'Account':'Login'
        }
    },

})

VueApp.mount('.app')

  // declare the variables of the dom elements
  const burger=document.querySelector(".burger")
  const navlink=document.querySelector('.nav-links')
  const navlinkli= document .querySelectorAll('.nav-links li')
  // navigation responsive functions
  burger.addEventListener("click",()=>{
navlink.style.transition=" all 1s ease-in-out";
navlink.classList.toggle('nav-active')
navlinkli.forEach((item, i) => {
  // checking for the animation on the links and then removing them and adding them again
  item.style.animation?item.style.animation="":item.style.animation=`navlianimate 0.8s ease-in forwards ${i/5+1}s`


});

  })
