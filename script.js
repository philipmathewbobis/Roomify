const hamburger = document.querySelector('#hamburger')
const navbar = document.querySelector('#mobile-navbar')

hamburger.addEventListener('click', button => {
    const firstLineClasses = ['rotate-[-45deg]', 'translate-y-[12px]']
    const secondLineClasses = ['hidden']
    const thirdLineClasses = ['rotate-[45deg]', 'top-3']
    
    const first = document.querySelector('#hamburger #first')
    const second = document.querySelector('#hamburger #second')
    const third = document.querySelector('#hamburger #third')

    navbar.classList.toggle('absolute')
    navbar.classList.toggle('hidden')

    firstLineClasses.forEach(classes => {
        first.classList.toggle(classes)
    })

    secondLineClasses.forEach(classes => {
        second.classList.toggle(classes)
    })

    thirdLineClasses.forEach(classes => {
        third.classList.toggle(classes)
    })

})

let timeout;
const targetHeight = 5;


window.addEventListener('scroll', scroll => {
    const header = document.querySelector('#header')
    clearTimeout(timeout) // clear the execution from previous scroll

    timeout = setTimeout(() => {
        const scrollY = window.scrollY

        if (scrollY > targetHeight) {
            header.classList.add('bg-blue-200')
        } else {
            header.classList.remove('bg-blue-200')
        }
    },100)
})