let primaryNavigation = document.querySelector("#primaryNavigation");
let mobileNavToggle = document.querySelector('.mobileNavToggle');

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