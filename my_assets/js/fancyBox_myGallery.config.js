$(document).ready(function() {
    $(".fancybox-thumb").fancybox({
        openEffect  : 'elastic',
        closeEffect  : 'elastic',
        nextEasing  : 'swing',
        helpers	: {
            title	: {
                type: 'over',

            },
            overlay : {
            showEarly : false
        },
            thumbs	: {
                width	: 80,
                height	: 80
            }
        }
    });
});
