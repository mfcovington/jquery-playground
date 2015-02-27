$('.controls li').click(function() {
    deselectColors();
    selectColor($(this));
});

function deselectColors() {
    $('.controls li').siblings('li').each(function() {
        $(this).removeClass('selected')
    });
}

function selectColor($newColor) {
    $newColor.addClass('selected');
}
