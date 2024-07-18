var menuBtn=document.querySelector(".navbar-toggler");
var menu=document.querySelector(".menu-items");
var menuCls=document.querySelector(".menu-items");
menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active")
})
menuCls.addEventListener("click",function(){
    menu.classList.toggle("active")
})