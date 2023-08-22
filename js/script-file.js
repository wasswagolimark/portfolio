

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".header-text");
    
    // Add a class to start the animation after a delay
    setTimeout(function() {
        textElement.classList.add("animate-fade-in");
    }, 0); // Delay in milliseconds (e.g., 1000ms = 1 second)
    
    // Remove the class after the animation completes
    textElement.addEventListener("animationend", function() {
        textElement.classList.remove("animate-fade-in");
    });
});



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function Opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
    
}

// var navlinks = document.getElementsByClassName('active-nav-tab');

// function ActivatePage() {
//     for(navlink of navlinks){
//         navlink.classList.remove('active-nav-link');
//     }
//     event.currentTarget.classList.add('active-nav-link');
// }



var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}