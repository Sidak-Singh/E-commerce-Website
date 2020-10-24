var carts=[]
for (var i = 0; i < 3; i++) {
  var num =Math.floor(Math.random()*Data.length)
carts.push(Data[num])
}
const VueApp =Vue.createApp({
    data(){
        return{
data:Data,
carts:carts
        }
    },

})

VueApp.mount('.app')

  // declare the variables of the dom elements
  const burger=document.querySelector(".burger")
  const navlink=document.querySelector('.nav-links')
    const input=document.querySelector('.srch-input')
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
  input.addEventListener('focus',()=>{
    location.href="/pages/search.html"
  })
