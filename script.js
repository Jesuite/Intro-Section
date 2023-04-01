let menuBtn = document.querySelector(".dropdown")
let menu = document.querySelector('.dropmenu');

let myFunction = () =>{
    menu.style.display = 'flex';
    document.querySelector('.menucover').style.display = 'flex'
}

menuBtn.addEventListener("click", myFunction);
