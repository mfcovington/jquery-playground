var $overlay = $('<div id="overlay"></div>');
$('body').append($overlay);

$("#imageGallery a").click(function () {
    event.preventDefault();
    var href = $(this).attr("href");
    var alt = $(this).children('img').attr('alt');
    console.log(href);
    console.log(alt);

    $overlay.show();
    $overlay.append('<img src="' + href + '">');
    $overlay.append('<p>' + alt + '</p>');
});
