
const VueApp =Vue.createApp({
    data(){
        return{
data:Data,
search:"",
query:'Please Search for A Product',
results:[],
category:'All',
categories:[
  'T-shirt',
  'Shirt',
  'Smartphones',
  "Men",
  "Woman"
]

}},
methods:{
  filterit:function(){
if (this.category!=='All') {
  var arr=Data.filter(el=>el.name.toLowerCase().includes(this.search.toLowerCase())&&el.category.includes(this.category))
  this.results=arr
} else {
  var arr=Data.filter(el=>el.name.toLowerCase().includes(this.search.toLowerCase()))
  this.results=arr
}


if (arr.length==0) {
  this.query="No results Try Searching with better Keywords"
}else{
  this.query=`You searched for ${this.search}`
}
},
redir:function (key) {
if (key!=='none') {
  location.href=key
}
},
},
watch:{
  category:function () {
    if (this.category!=='All') {
      var arr=Data.filter(el=>el.category.includes(this.category))
       this.results=arr
         this.query=`You searched for ${this.category}`
         this.search=this.category
    }else{
      this.results=Data
      this.query='';
      this.search=''
    }
  }
}
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
