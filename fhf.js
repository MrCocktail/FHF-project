const toggler = document.querySelector("#toggler")

toggler.addEventListener('click', () => {
    const nav = document.querySelector("nav")
    const getNav = nav.getBoundingClientRect()  
    const carousel = document.querySelector("#carousel")
    carousel.setAttribute('style', `margin-top: ${getNav.height + 10}px`)
})