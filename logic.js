const burger = document.querySelector('.nav__burger')
const nav_lists = document.querySelector('.nav__lists')

burger.addEventListener('click',()=>{
        nav_lists.classList.add('burger-open')
})

nav_lists.addEventListener('click',()=>{
    nav_lists.classList.remove('burger-open')
})
