let openBtn = document.getElementById("open");
let menu = document.querySelector('.dropmenu');
let closeBtn = document.getElementById('close');

let open = () =>{
    menu.style.display = 'flex';
    document.querySelector('.menucover').style.display = 'flex'
    document.getElementById('close').style.display = 'flex'
    document.getElementById('close').style.transition = 'ease-in 100ms'
}

let close = () =>{
    menu.style.display = 'none';
    document.querySelector('.menucover').style.display = 'none'
    document.getElementById('close').style.display = 'none'
    document.getElementById('close').style.transition = 'ease-out 100ms'
}

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);