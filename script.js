let openBtn = document.getElementById("open");
let menu = document.querySelector('.dropmenu');
let closeBtn = document.getElementById('close');

let open = () =>{
    // menu.style.display = 'flex'
    menu.style.right = '0%';
    menu.style.transition = 'all ease-in 0.5s'
    document.querySelector('.menucover').style.display = 'flex'
    document.getElementById('close').style.transitionProperty = 'display'
    document.getElementById('close').style.display = 'flex'
    document.getElementById('open').style.display = 'none'
}

let close = () =>{
    menu.style.right = '-65%';
    menu.style.transition = 'all ease-out 0.5s'
    document.querySelector('.menucover').style.display = 'none'
    // document.getElementById('close').style.display = 'none'
    document.getElementById('open').style.display = 'flex'
    
}

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);