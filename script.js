const hamburguer = document.querySelector(".hamburguer");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

function abrirHamburguer(){

}
hamburguer.addEventListener("click",function(){
    document.querySelector(".container").classList.toggle("show-menu");
})




/* debounce 
const debounce = function(func,wait,immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate)func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow)func.apply(context. args);
    }
}
const target = document.querySelectorAll(".data-anime");
const animationClass = 'data-anime-animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight*5)/6;
    target.forEach(function(element){
        if((windowTop)> element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();
if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    console.log("arroz");
}, 200));
}
*/
