$('.controls li').click(function() {
    deselectColors();
    selectColor($(this));
});

function deselectColors() {
    $('.controls li').each(function() {
        $(this).removeClass('selected')
    });
}

function selectColor($newColor) {
    $newColor.addClass('selected');
}
