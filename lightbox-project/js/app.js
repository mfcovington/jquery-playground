$("#imageGallery a").click(function () {
    event.preventDefault();
    var href = $(this).attr("href");
    var alt = $(this).children('img').attr('alt');
    console.log(href);
    console.log(alt);
});