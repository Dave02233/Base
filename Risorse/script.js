// Gestione track infinito di immagini
function manageTrack() {

    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const track = gallery.querySelector('.gallery-track');
    if (!track) return;

    // Movimento lineare infinito
    let speed = 1.3; // pixel per step

    function move() {

        gallery.scrollLeft += speed;
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

manageTrack();

