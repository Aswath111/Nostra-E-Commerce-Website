//offer//

var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)


//side navbar//
var sideNavMenu= document.getElementById("side-navbar-active")
var sidenavbar = document.querySelector(".side-navbar")

sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

//close//


document.getElementById("side-navbar-close").addEventListener("click",()=>{
  document.querySelector(".side-navbar").style.marginLeft = "-60%"

})

//slider//

var sliderleftbutton = document.getElementById("slider-left-active")
var sliderrightbutton = document.getElementById("slider-right-active")
var sliderimage = document.querySelector(".slider-img-con")
var slidermargin=0


sliderrightbutton.addEventListener("click",

  function(){
      slidermargin=slidermargin+100
  
      if(slidermargin>200)
      {
          slidermargin=0
          sliderimage.style.marginLeft=0;
      }
      else{
          sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }
  
  
  
  }
  )
  
  sliderleftbutton.addEventListener("click",
  
  function(){
  
      if(slidermargin==0)
      {
  
          slidermargin=200
          sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }
      else{
  
          slidermargin=slidermargin-100
      sliderimage.style.marginLeft="-"+slidermargin+"vw";
      }
  
  
  }
  )


  var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){


        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/redheart.png"
        }
        else{
            e.target.src="img/blackheart.png"
        }
    })
})
  window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()


     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }

})

})
//Collections-->







