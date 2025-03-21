


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



//product search//

var procontainer = document.getElementById("procontainer");
var search = document.getElementById("search");
var proList = procontainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for (count=0; count<proList.length; count=count+1){
    var proName = proList[count].querySelector("h2").textContent


    if (proName.toUpperCase().indexOf(enteredValue) <0){
        proList[count].style.display="none";
    
    }

    else{
        proList[count].style.display="block";
    }
    }
});



// Filter shirts based on checked boxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const shirts = document.querySelectorAll('.shirt');

function filterShirts() {
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && ['summer', 'party', 'beach'].includes(checkbox.value))
        .map(checkbox => checkbox.value);

    const selectedColors = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && ['red', 'blue', 'white', 'green'].includes(checkbox.value))
        .map(checkbox => checkbox.value);

    const selectedCondition = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && ['new', 'old'].includes(checkbox.value))
        .map(checkbox => checkbox.value);

    shirts.forEach(shirt => {
        const shirtTags = shirt.getAttribute('data-tags').split(' ');

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(tag => shirtTags.includes(tag));

        const matchesColor = selectedColors.length === 0 || selectedColors.some(tag => shirtTags.includes(tag));

        const matchesCondition = selectedCondition.length === 0 || selectedCondition.some(tag => shirtTags.includes(tag));

        if (matchesCategory && matchesColor && matchesCondition) {
            shirt.style.display = 'block';
        } else {
            shirt.style.display = 'none';
        }
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterShirts);
});

filterShirts()