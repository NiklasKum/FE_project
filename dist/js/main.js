
//menu works
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-btn i');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav-item');

const mensBtn = document.querySelector('.mens-btn');
const mensBtnIcon = document.querySelector('.mens-btn i');
const mensSubLink = document.querySelectorAll('.men-nav-item');
const womensBtn = document.querySelector('.womens-btn');
const womensBtnIcon = document.querySelector('.womens-btn i');
const womensSubLink = document.querySelectorAll('.women-nav-item');

let showmenu = false;
let menextended = false;
let womenextended = false;

menuBtn.addEventListener('click', toggleMenu);
mensBtn.addEventListener('click', extendMen);
womensBtn.addEventListener('click', extendWomen);

//Theme works
const lightBtn = document.querySelector('.light-btn');
const lightIcon = document.querySelector('.light-btn i');
const body = document.querySelector('body');
const header = document.querySelector('header');
const cartBtn = document.querySelector('.cart-btn');
const notifBtn = document.querySelector('.notif-btn');
const accoutBtn = document.querySelector('.account-btn');

let darktheme = false;

lightBtn.addEventListener('click', toggleTheme);


function toggleMenu(){
    if(!showmenu){
        menuBtn.classList.add('close');
        menuIcon.className ="fa-solid fa-x fa-2xl";
        menu.classList.add('show');
        menuLinks.forEach(item => item.classList.add('show'));

        showmenu = true;
    }else {
        menuIcon.className ="fa-solid fa-bars fa-2xl";
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuLinks.forEach(item => item.classList.remove('show'));

        //close sublink dropdown
        if(menextended) {extendMen();}
        if(womenextended) {extendWomen();}

        showmenu = false;
    }
}

function extendMen(){
    if(!menextended){
        mensBtnIcon.classList.add('fa-rotate-180')
        mensSubLink.forEach(item => item.classList.add('show'));
        menextended = true;
    }else{
        mensBtnIcon.classList.remove('fa-rotate-180')
        mensSubLink.forEach(item => item.classList.remove('show'));
        menextended = false;
    }
}

function extendWomen(){
    if(!womenextended){
        womensBtnIcon.classList.add('fa-rotate-180')
        womensSubLink.forEach(item => item.classList.add('show'));
        womenextended = true;
    }else{
        womensBtnIcon.classList.remove('fa-rotate-180')
        womensSubLink.forEach(item => item.classList.remove('show'));
        womenextended = false;
    }
}

function toggleTheme(){
    if(!darktheme){
        lightIcon.className="fa-solid fa-eye fa-xl"
        menuBtn.classList.add('dark-mode');
        lightBtn.classList.add('dark-mode');
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        cartBtn.classList.add('dark-mode');
        notifBtn.classList.add('dark-mode');
        accoutBtn.classList.add('dark-mode');
        menu.classList.add('dark-mode');
        darktheme = true;
    } else {
        lightIcon.className="fa-solid fa-eye-slash fa-xl"
        menuBtn.classList.remove('dark-mode');
        lightBtn.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        cartBtn.classList.remove('dark-mode');
        notifBtn.classList.remove('dark-mode');
        accoutBtn.classList.remove('dark-mode');
        menu.classList.remove('dark-mode');
        darktheme = false;
    }
}

