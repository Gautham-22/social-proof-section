// handles layout when the page loads
if(window.innerWidth >= 800) {   
    desktopLayout();
}

// handles layout when browser window size changes during browsing 
window.addEventListener("resize",() => {
    if(window.innerWidth >= 800) {   
        desktopLayout();
    }else {
        mobileLayout();
    }
})



function desktopLayout() {
    document.getElementById("top-bg").src = "./images/bg-pattern-top-desktop.svg" ;
    document.getElementById("bottom-bg").src = "./images/bg-pattern-bottom-desktop.svg";

}

function mobileLayout() {
    document.getElementById("top-bg").src = "./images/bg-pattern-top-mobile.svg" ;
    document.getElementById("bottom-bg").src = "./images/bg-pattern-bottom-mobile.svg";
}