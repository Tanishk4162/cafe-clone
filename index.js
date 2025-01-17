let search = document.getElementById('search-btn');
let searchDiv = document.getElementsByClassName('search-form');
let cart = document.getElementById('cart-btn');
let cartDiv = document.getElementsByClassName('cart-items-container');
let nav = document.getElementById('menu-btn');
let navlist = document.getElementsByClassName('nav-links');

search.addEventListener('click', ()=>{
    searchDiv[0].classList.toggle('active')
    // console.log(searchDiv);
})

cart.addEventListener('click', ()=>{
    cartDiv[0].classList.toggle('active')
    // console.log(searchDiv);
})

nav.addEventListener('click', ()=>{
    navlist[0].classList.toggle('active')
    // console.log(searchDiv);
})
