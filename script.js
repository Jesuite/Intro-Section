let primaryNavigation = document.querySelector("#primaryNavigation");
let mobileNavToggle = document.querySelector('.mobileNavToggle');
// let closeBtn = document.getElementById('close');

// let open = () =>{
    // menu.style.display = 'flex'
    // primaryNavigation.style.transform = 'translateX(0%)';
    // menu.style.transition = 'all ease-in 0.5s'
    // document.querySelector('.menucover').style.opacity = '0.7'
    // document.querySelector('.menucover').style.transition = 'opacity 0.5s ease-in'
    // document.getElementById('close').style.transitionProperty = 'display'
    // document.getElementById('close').style.display = 'flex'
    // document.getElementById('open').style.display = 'none'
    // document.querySelector('.menucover').style.opacity = '70%'
// }

// let close = () =>{
//     menu.style.right = '-65vw';
//     menu.style.transition = 'all ease-out 0.5s'
//     document.querySelector('.menucover').style.opacity = '0'
//     document.querySelector('.menucover').style.transition = 'opacity 0.5s ease-out'
//     // document.querySelector('.menucover').style.display = 'none'
//     // document.getElementById('close').style.display = 'none'
//     document.getElementById('open').style.display = 'flex'
    
// }

let toggle = () =>{
    const visibility = primaryNavigation.getAttribute('data-visible')

    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible', 'true')
        mobileNavToggle.setAttribute('data-close', 'true')
        document.querySelector('.menucover').style.opacity = '0.7'
        document.querySelector('.menucover').style.transition = 'opacity 0.5s ease-in'
    }
    else if(visibility === 'true'){
        primaryNavigation.setAttribute('data-visible', 'false')
        mobileNavToggle.setAttribute('data-close', 'false')
        document.querySelector('.menucover').style.opacity = '0'
        document.querySelector('.menucover').style.transition = 'opacity 0.5s ease-out'
    }
    // console.log(visibility)
}

mobileNavToggle.addEventListener("click", toggle);
// closeBtn.addEventListener("click", close);