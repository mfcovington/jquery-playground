var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $label = $('<p></p>')

$overlay.append($image);
$overlay.append($label);
$('body').append($overlay);

var lightbox = {

    show: function() {
        event.preventDefault();

        var imageLocation = $(this).attr('href');
        var imageText = $(this).children('img').attr('alt');

        $image.attr('src', imageLocation);
        $label.text(imageText);

        $overlay.show();
    },

    hide: function() {
        $overlay.hide()
    },

};

$('#imageGallery a').click( lightbox.show );
$overlay.click( lightbox.hide );
