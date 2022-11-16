
const navOpen = document.querySelector('#menu-btn');
const navClose = document.querySelector('#close-btn');

const nav = document.querySelector('.nav__items');


const openNav = () => {
    navOpen.style.display = "none";
    navClose.style.display = "inline-block";
    nav.style.display = "flex";
}

navOpen.addEventListener("click", openNav);

const closeNav = () => {
    navOpen.style.display = "inline-block";
    navClose.style.display = "none";
    nav.style.display = "none";
}

navClose.addEventListener("click", closeNav);


//Close navbar onclick 
if (document.body.clientWidth < 1200) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}


//Respond to keyboard events (Global events)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeNav();
    }
});



//SWIPER JS (gallery section)

const swiper = new Swiper(".mySwiper", {

    loop: true,
    freeMode: true,
    freeModeFluid: true,
    // grabCursor: true,
    loopFillGroupWithBlank: false,
    autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    speed: 100000,
    // freeModeMomentum: true,


    // phones
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // tablets
        600: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 2,

        },
        // desktop
        1024: {
            slidesPerView: 8,
            slidesPerGroup: 8,
            spaceBetween: 10
        },

        2030: {
            slidesPerView: 8,
            slidesPerGroup: 8,
            spaceBetween: 60
        }
    },
});



//Show/hide faq

const faqs = document.querySelectorAll('.faq');
console.log(faqs);

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})




//add background style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

