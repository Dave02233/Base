const header = document.querySelector('header');
const menu = document.querySelector('nav');

//Cambio altezza dell'header
let scrollPercentage = window.scrollY / document.documentElement.scrollHeight * 100;
let upHystHeader = scrollPercentage + 2;
let dwHystHeader = scrollPercentage - 2;

function minMax(num, up, down) {
    if(num >= up || num <= down) {
        return true
    }else{
        return false
    }
}

function headerHeightChange() {
    scrollPercentage = window.scrollY / document.documentElement.scrollHeight * 100;
    const shrinkState = header.classList.contains('shrink');

    if(scrollPercentage > 10 && minMax(scrollPercentage, upHystHeader, dwHystHeader) && !shrinkState) {
        header.classList.add('shrink');
        upHystHeader = scrollPercentage + 2;
        dwHystHeader = scrollPercentage - 2;
    }else if(scrollPercentage < 10){
        header.classList.remove('shrink');
    }
    navTopChange();
}
addEventListener('scroll', headerHeightChange);


//Toggle visibilità menù
function toggleMenu() {
    if(!menu) return;
    menu.classList.toggle('hidden');
    navTopChange()
}

//Cambio posizione top del nav
function navTopChange() {
    if(!menu.classList.contains('hidden')) {
        menu.style.top = `${header.getBoundingClientRect().bottom}px`;
    }
}

// Gestione track infinito di immagini
function manageTrack() {

    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const track = gallery.querySelector('.gallery-track');
    if (!track) return;

    // Movimento lineare infinito
    let speed = 0.0; // pixel per step

    function move() {

        gallery.scrollLeft += speed;
        speed < 1.3 ? speed += 0.005 : speed = 1.3;
        //console.log(speed);
        const firstImg = track.firstElementChild;
        const secondImg = track.children[1];

        if (firstImg && secondImg) {
            const firstTwoImgWidth = firstImg.offsetWidth + secondImg.offsetWidth;
            if (gallery.scrollLeft >= firstTwoImgWidth) {
                track.appendChild(firstImg);
                track.appendChild(secondImg);
                gallery.scrollLeft -= firstTwoImgWidth;
            }
        }else{
            throw new Error('Come fa a non esistere?')
        }

        // Funzione JS nativa per eseguire animazioni (standard 60Hz)
        requestAnimationFrame(move); 
    }
    move();
}

// Avvia l'animazione dopo 4 secondi dal caricamento
setTimeout(manageTrack, 4000);


