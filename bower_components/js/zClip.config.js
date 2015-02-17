// zClip.config.js
var client = new ZeroClipboard( document.getElementById("btnCopiar") );

/*client.on( "mouseover", function() ){
    this.classList.add("btnCopiar-hover");
};*/

client.on( "ready", function( readyEvent ) {
    // alert( "ZeroClipboard SWF is ready!" );

    client.on( "mouseover", function() ){
        this.classList.add("btnCopiar-hover");
    };

    client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        //event.target.style.display = "none";
        event.target.style.display = "html";
        //alert("Texto copiado al portapapeles: " + event.data["text/html"] );
        //alert("Código copiado al portapapeles");
      } );

} );
