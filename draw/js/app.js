$('.controls li').click(function() {
    deselectColors();
    selectColor($(this));
});

$('#revealColorSelect').click(function() {
    $('#colorSelect').toggle();
});

$('#addNewColor').click(function() {
    $('#colorSelect').hide();
});

function deselectColors() {
    $('.controls li').siblings('li').each(function() {
        $(this).removeClass('selected')
    });
}

function selectColor($newColor) {
    $newColor.addClass('selected');
}
