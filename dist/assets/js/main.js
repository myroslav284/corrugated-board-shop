let headerbottom = document.querySelector('.header-bottom');
let burgerBtn = document.querySelector('#nav-icon1');
const productsBtn = document.querySelector('.products-btn');
const productsLinks = document.querySelector('.products-links');
let orderBtn = document.querySelector('.btn-order');
let order = document.querySelector('.order');
burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('open');
    headerbottom.classList.toggle('active');
})

productsBtn.addEventListener('click', ()=>{
    productsLinks.classList.toggle('products-hidden');
    if(productsLinks.classList.contains('products-hidden')){

        document.querySelector('.arrow').style.transform = 'rotate(90deg)';
    } else{
        document.querySelector('.arrow').style.transform = 'rotate(-90deg)';

    }
})

orderBtn.addEventListener('click', ()=>{
    order.classList.toggle('hide');

})