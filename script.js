const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".hamburgerNav");

hamburger.addEventListener("click",()=>{
    bar1.classList.toggle("baranim1")
    bar2.classList.toggle("baranim2")
    bar3.classList.toggle("baranim3")
    mobileNav.classList.toggle("openSideBar")
})