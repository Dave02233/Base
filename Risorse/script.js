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

        if (firstImg) {
            const firstImgWidth = firstImg.offsetWidth;
            if (gallery.scrollLeft >= firstImgWidth) {
                track.appendChild(firstImg);
                gallery.scrollLeft -= firstImgWidth;
            }
        }

        // Funzione JS nativa per eseguire animazioni (standard 60Hz)
        requestAnimationFrame(move); 
    }
    move();
}

// Avvia l'animazione dopo 4 secondi dal caricamento
setTimeout(manageTrack, 4000);

