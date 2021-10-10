const section = document.querySelector("section");
const current =  document.querySelectorAll(".current");
const next =  document.querySelectorAll(".next");
let couter = 0;

section.addEventListener("click", () => {

    if(couter > 6){
        couter = -1;
    }
    couter += 1;

    section.classList.toggle("flip");

    if(couter % 2 === 0){
        current.forEach((e) => {
            e.style.backgroundImage = `url(../img/body0${couter + 1}.jpg)`;
        })
    }else if(couter % 2 != 0){
        next.forEach((e) => {
            e.style.backgroundImage = `url(../img/body0${couter + 1}.jpg)`;
        })
    }

});

