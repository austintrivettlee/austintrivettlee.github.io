document.getElementById('mode-switcher').addEventListener('click', function () {
    var body = document.body;
    var img = document.getElementById('parallax-img-dark');
    var img2 = document.getElementById('parallax-img2-dark');
    var img3 = document.getElementById('background-projects');
    var hl = document.querySelectorAll('.hl');
    var text = document.querySelectorAll('.text');
    var nav = document.querySelectorAll('.navbarid')
    var back = document.querySelectorAll('.backgroundid')
    var butt = document.querySelector('.buttonid')
    var navbutt = document.querySelectorAll('.nav-item')

    if (body.classList.contains('light')) {
        this.innerText = 'Switch to Light Mode';
        this.classList.remove('mode-switcher-light');
        this.classList.add('mode-switcher-dark');
        body.classList.remove('light');
        body.classList.add('dark');
        img.classList.remove('parallax-img-light');
        img.classList.add('parallax-img-dark');
        img2.classList.remove('parallax-img2-light');
        img2.classList.add('parallax-img2-dark');
        img3.classList.remove('background-projects-light');
        img3.classList.add('background-projects-dark');
        butt.classList.remove('button-dark');
        butt.classList.add('button-light');
        for (var i = 0; i < navbutt.length; i++) {
            navbutt[i].classList.remove('hover-light')
        }
        for (var i = 0; i < navbutt.length; i++) {
            navbutt[i].classList.add('hover-dark')
        }
        for (var i = 0; i < hl.length; i++) {
            hl[i].classList.remove('light-hl');
        }
        for (var i = 0; i < hl.length; i++) {
            hl[i].classList.add('dark-hl');
        }
        for (var i = 0; i < text.length; i++) {
            text[i].classList.remove('black');
        }
        for (var i = 0; i < text.length; i++) {
            text[i].classList.add('white');
        }
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.remove('navbar-light');
        }
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.add('navbar-dark');
        }
        for (var i = 0; i < back.length; i++) {
            back[i].classList.remove('background-light');
        }
        for (var i = 0; i < back.length; i++) {
            back[i].classList.add('background-dark');
        }

    } else {
        this.innerText = 'Switch to Dark Mode';
        this.classList.remove('mode-switcher-dark');
        this.classList.add('mode-switcher-light');
        body.classList.remove('dark');
        body.classList.add('light');
        img.classList.remove('parallax-img-dark');
        img.classList.add('parallax-img-light');
        img2.classList.remove('parallax-img2-dark');
        img2.classList.add('parallax-img2-light');
        img3.classList.remove('background-projects-dark');
        img3.classList.add('background-projects-light');
        butt.classList.remove('button-light');
        butt.classList.add('button-dark');
        for (var i = 0; i < navbutt.length; i++) {
            navbutt[i].classList.remove('hover-dark')
        }
        for (var i = 0; i < navbutt.length; i++) {
            navbutt[i].classList.add('hover-light')
        }
        for (var i = 0; i < hl.length; i++) {
            hl[i].classList.remove('dark-hl');
        }
        for (var i = 0; i < hl.length; i++) {
            hl[i].classList.add('light-hl');
        }
        for (var i = 0; i < text.length; i++) {
            text[i].classList.remove('white');
        }
        for (var i = 0; i < text.length; i++) {
            text[i].classList.add('black');
        }
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.remove('navbar-dark');
        }
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.add('navbar-light');
        }
        for (var i = 0; i < back.length; i++) {
            back[i].classList.remove('background-dark');
        }
        for (var i = 0; i < back.length; i++) {
            back[i].classList.add('background-light');
        }
    }
});



function isElementInViewport(ele) {
    var rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScroll1);
window.addEventListener('scroll', handleScroll2);
window.addEventListener('scroll', handleScroll3);

function handleScroll() {
    var cardLeft1 = document.querySelector('.card-left1');
    if (isElementInViewport(cardLeft1)) {
        cardLeft1.classList.add('slide-in1');
        window.removeEventListener('scroll', handleScroll);
    }
}
function handleScroll1() {
    var cardLeft2 = document.querySelector('.card-left2');
    if (isElementInViewport(cardLeft2)) {
        cardLeft2.classList.add('slide-in1');
        window.removeEventListener('scroll', handleScroll1);
    }
}


function handleScroll2() {
    var cardRight1 = document.querySelector('.card-right1');
    if (isElementInViewport(cardRight1)) {
        cardRight1.classList.add('slide-in2');
        window.removeEventListener('scroll', handleScroll2);
    }
}


function handleScroll3() {
    var cardRight2 = document.querySelector('.card-right2');
    if (isElementInViewport(cardRight2)) {
        cardRight2.classList.add('slide-in2');
        window.removeEventListener('scroll', handleScroll3);
    }
}
