$("#imageGallery a").click(function () {
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
});
