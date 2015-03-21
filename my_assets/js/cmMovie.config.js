//cmMovie.config.js
//Configuraciones de pelicula

/*** Pelicula 1 ***/
var movie = CodeMirror.movie("pnlMovie_1");

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


/*** Pelicula 2 ***/
var movie2 = CodeMirror.movie("pnlMovie_2");

//Create simple UI to interact with movie
var btnPlay2 = document.getElementById("btnPlay2");
var btnIcon2 = document.getElementById("btnIcon2");
var lblPlay2 = document.getElementById("lblPlay2");

btnPlay2.onclick = function() {
    this.blur();
    if (movie2.state() == 'play') {
        movie2.pause();
        //this.innerHTML = 'Play';
        lblPlay2.innerHTML = 'Play';
        btnIcon2.classList.remove('glyphicon-pause');
        btnIcon2.classList.add('glyphicon-play');

        btnPlay2.classList.remove('btn-warning');
        btnPlay2.classList.add('btn-success');

    } else {
        movie2.play();
        //this.innerHTML = 'Pause';
        lblPlay2.innerHTML = 'Pausa';
        btnIcon2.classList.remove('glyphicon-play');
        btnIcon2.classList.add('glyphicon-pause');

        btnPlay2.classList.remove('btn-success');
        btnPlay2.classList.add('btn-warning');
    }
};

// La pelicula termino
movie2.on('stop', function(name) {
    btnIcon2.classList.remove('glyphicon-pause');
    btnPlay2.classList.remove('btn-warning');
    btnIcon2.classList.add('glyphicon-play');
    btnPlay2.classList.add('btn-success');
    lblPlay2.innerHTML = 'Play';
});



/*** Pelicula 3 ***/
var movie3 = CodeMirror.movie("pnlMovie_3");

//Create simple UI to interact with movie
var btnPlay3 = document.getElementById("btnPlay3");
var btnIcon3 = document.getElementById("btnIcon3");
var lblPlay3 = document.getElementById("lblPlay3");

btnPlay3.onclick = function() {
    this.blur();
    if (movie3.state() == 'play') {
        movie3.pause();
        //this.innerHTML = 'Play';
        lblPlay3.innerHTML = 'Play';
        btnIcon3.classList.remove('glyphicon-pause');
        btnIcon3.classList.add('glyphicon-play');

        btnPlay3.classList.remove('btn-warning');
        btnPlay3.classList.add('btn-success');

    } else {
        movie3.play();
        //this.innerHTML = 'Pause';
        lblPlay3.innerHTML = 'Pausa';
        btnIcon3.classList.remove('glyphicon-play');
        btnIcon3.classList.add('glyphicon-pause');

        btnPlay3.classList.remove('btn-success');
        btnPlay3.classList.add('btn-warning');
    }
};

// La pelicula termino
movie3.on('stop', function(name) {
    btnIcon3.classList.remove('glyphicon-pause');
    btnPlay3.classList.remove('btn-warning');
    btnIcon3.classList.add('glyphicon-play');
    btnPlay3.classList.add('btn-success');
    lblPlay3.innerHTML = 'Play';
});
