var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $label = $('<p></p>')

$overlay.append($image);
$overlay.append($label);
$('body').append($overlay);

$('#imageGallery a').click(function() {
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    var imageText = $(this).children('img').attr('alt');

    $overlay.show();
    $image.attr('src', imageLocation);
    $label.text(imageText);
});

$overlay.click(function() {
    $(this).hide();
});
