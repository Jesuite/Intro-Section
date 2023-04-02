let primaryNavigation = document.querySelector("#primaryNavigation");
let mobileNavToggle = document.querySelector('.mobileNavToggle');
let featureNavigation = document.querySelector('#featureNav');
let companyNavigation = document.querySelector('#companyNav');
let featureNavToggle = document.querySelector('#feature');
let companyNavToggle = document.querySelector('#company');

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

let toggleF = () =>{
    const featureVisibility = featureNavigation.getAttribute('data-show')

    if(featureVisibility === "false"){
        featureNavigation.setAttribute('data-show', 'true')
        document.querySelector('#f').src = "/images/icon-arrow-up.svg"
    }
    else if(featureVisibility === 'true'){
        featureNavigation.setAttribute('data-show', 'false')
        document.querySelector('#f').src = "/images/icon-arrow-down.svg"
    }
}

let toggleC = () =>{
    const companyVisibility = companyNavigation.getAttribute('data-show')

    if(companyVisibility === "false"){
        companyNavigation.setAttribute('data-show', 'true')
        document.querySelector('#c').src = "/images/icon-arrow-up.svg"
    }
    else if(companyVisibility === 'true'){
        companyNavigation.setAttribute('data-show', 'false')
        document.querySelector('#c').src = "/images/icon-arrow-down.svg"
    }
}

mobileNavToggle.addEventListener("click", toggle);
featureNavToggle.addEventListener("click", toggleF);
companyNavToggle.addEventListener("click", toggleC);