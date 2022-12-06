

const navMenuActive = document.querySelector ("#nav-menu-on")
const navMenuDisplay = document.querySelector ("#nav-active-btn")
navMenuActive.addEventListener ("click", e => {
        console.log("click")
        navMenuDisplay.classList.toggle( "nav-active" )
    
})