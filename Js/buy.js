
const VueApp =Vue.createApp({
    data(){
        return{
data:Data,
type:''
        }
    },

})

VueApp.mount('.app')

  // declare the variables of the dom elements
  const burger=document.querySelector(".burger")
  const navlink=document.querySelector('.nav-links')
    const input=document.querySelector('.srch-input')
  const navlinkli= document .querySelectorAll('.nav-links li')
  const modalbtn=document.querySelector('.modal-btn')
    const modal=document.querySelector('.modal-bg')
  // navigation responsive functions
  burger.addEventListener("click",()=>{
navlink.style.transition=" all 1s ease-in-out";
navlink.classList.toggle('nav-active')


navlinkli.forEach((item, i) => {
  // checking for the animation on the links and then removing them and adding them again
item.style.animation?item.style.animation="":item.style.animation=`navlianimate 0.8s ease-in forwards ${i/5+1}s`


});

  })
  input.addEventListener('focus',()=>{
    location.href="/pages/search.html"
  })
  modalbtn.addEventListener('click',()=>{
      modal.style.display="flex"
  })
  modal.addEventListener('click',()=>{
        modal.style.display="none"
  })
