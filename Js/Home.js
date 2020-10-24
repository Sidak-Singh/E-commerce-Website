var preTShirt=Data.filter(obj=>obj.key !== "none")

const VueApp =Vue.createApp({
    data(){
        return{

data:Data,
tshirthome:preTShirt
        }
    },

})

VueApp.mount('.app')

  // declare the variables of the dom elements
  const burger=document.querySelector(".burger")
  const navlink=document.querySelector('.nav-links')
    const input=document.querySelector('.srch-input')
  const navlinkli= document .querySelectorAll('.nav-links li')
  const tshirthome=document.querySelectorAll('.tshirthome')
  // navigation responsive functions
  burger.addEventListener("click",()=>{
navlink.style.transition=" all 1s ease-in-out";
navlink.classList.toggle('nav-active')


navlinkli.forEach((item, i) => {
  // checking for the animation on the links and then removing them and adding them again
item.style.animation?item.style.animation="":item.style.animation=`navlianimate 0.8s ease-in forwards ${i/5+1}s`


});

  })

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  tshirthome.forEach((item, i) => {
    item.addEventListener('click',()=>{
      location.href=item.getAttribute('data-key')
    })
  });
  input.addEventListener('focus',()=>{
    location.href="/pages/search.html"
  })
