let navbare=document.querySelector(".navbare");
let Open_nav=document.querySelector(".Open_nav");

Open_nav.onclick=()=>{
    navbare.classList.toggle("new_navbare");
    if(Open_nav.src.includes("images/icon-hamburger.svg")){
        Open_nav.src="images/icon-close.svg"
    }else{
         Open_nav.src="images/icon-hamburger.svg"
    }
}