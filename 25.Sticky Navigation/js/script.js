const nav = document.querySelectorAll('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY > nav.offserHeight + 150){
        nav.classList('active')
    } else {
        nav.classList.remove('active')
    }
}