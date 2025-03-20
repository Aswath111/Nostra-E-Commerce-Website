


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