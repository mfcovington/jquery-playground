var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $label = $('<p></p>')

$overlay.append([$image, $label]);
$('body').append($overlay);

var lightbox = {

    show: function(event, $anchor) {
        event.preventDefault();

        var imageLocation = $anchor.attr('href');
        var imageText = $anchor.children('img').attr('alt');

        $image.attr('src', imageLocation);
        $label.text(imageText);

        lightbox.resizeOverlay();
        $overlay.show();
    },

    hide: function() {
        $overlay.hide()
    },

    resizeOverlay: function() {
        $overlay.height( $(document).height() );
        $overlay.width( $(document).width() );
    }

};

$('#imageGallery a').click(function(event) {
    lightbox.show(event, $(this))
});
$overlay.click( lightbox.hide );

$(window).resize( lightbox.resizeOverlay );
