//coe
var movie = CodeMirror.movie("blqCod_1.4.1");

// Create simple UI to interact with movie
var btnPlay = document.getElementById("btnPlay");
var btnIcon = document.getElementById("btnIcon");
var lblPlay = document.getElementById("lblPlay");

btnPlay.onclick = function() {
    this.blur();
    if (movie.state() == 'play') {
        movie.pause();
        //this.innerHTML = 'Play';
        lblPlay.innerHTML = 'Play';
        btnIcon.classList.remove('glyphicon-pause');
        btnIcon.classList.add('glyphicon-play');

        btnPlay.classList.remove('btn-warning');
        btnPlay.classList.add('btn-success');

    } else {
        movie.play();
        //this.innerHTML = 'Pause';
        lblPlay.innerHTML = 'Pausa';
        btnIcon.classList.remove('glyphicon-play');
        btnIcon.classList.add('glyphicon-pause');

        btnPlay.classList.remove('btn-success');
        btnPlay.classList.add('btn-warning');
    }
};

// La pelicula termino
movie.on('stop', function(name) {
    btnIcon.classList.remove('glyphicon-pause');
    btnPlay.classList.remove('btn-warning');
    btnIcon.classList.add('glyphicon-play');
    btnPlay.classList.add('btn-success');
    lblPlay.innerHTML = 'Play';
});
