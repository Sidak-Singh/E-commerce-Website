
var suggest=[]
for (var i = 0; i < 3; i++) {
  var num =Math.floor(Math.random()*Data.length)
  suggest.push(Data[num])
}
var date=()=>{
  var d=new Date();
var day=d.getDay();
var days=[
  'Sunday',
  'Monday',
'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
var date=d.getDate();

return(`${days[day]} ${date}`);
}
date()
const VueApp =Vue.createApp({
    data(){
        return{

product:13,
data:Data,
productname:Data[13].name,
suggestions:suggest,
date:date()

}
}}
)

VueApp.mount('.app')
  // declare the variables of the dom elements
  const burger=document.querySelector(".burger")
  const navlink=document.querySelector('.nav-links')
  const navlinkli= document .querySelectorAll('.nav-links li')
  const modal=document.querySelector('.modal-bg')
  const img=document.querySelector('.main-img')
      const input=document.querySelector('.srch-input')
    // navigation responsive functions
    burger.addEventListener("click",()=>{
  navlink.style.transition=" all 1s ease-in-out";
  navlink.classList.toggle('nav-active')


  navlinkli.forEach((item, i) => {
    // checking for the animation on the links and then removing them and adding them again
  item.style.animation?item.style.animation="":item.style.animation=`navlianimate 0.8s ease-in forwards ${i/5+1}s`


  });

    })
    img.addEventListener('click',()=>{
      modal.style.display="flex"
    })
    modal.addEventListener('click',()=>{
          modal.style.display="none"
    })
    input.addEventListener('focus',()=>{
      location.href="/pages/search.html"
    })
