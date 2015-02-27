$('html').disableSelection();

var currentColor = $('.controls .selected').css('background-color');

var $sliderInputs = $('.sliders input[type=range]');
resetSlidersAndSwatch();

$('.controls').on('click', 'li', function() {
    deselectColors();
    selectColor($(this));
});

$('.controls').on('dblclick', 'li', function() {
    selectColor($(this).siblings(':first'));
    $(this).remove();
});

$('#revealColorSelect').click(function() {
    $('#colorSelect').toggle();
});

$('#addNewColor').click(function() {
    $('#colorSelect').hide();

    var newColor = $('#newColor').css('background-color');
    var $newItem = $('<li></li>');

    $newItem.css('background-color', newColor);
    deselectColors();
    selectColor($newItem);
    $('.controls ul').append($newItem);

    resetSlidersAndSwatch();
});

$sliderInputs.on('input', sliderEvent);

function deselectColors() {
    $('.controls li').each(function() {
        $(this).removeClass('selected')
    });
}

function selectColor($newColor) {
    $newColor.addClass('selected');
    currentColor = $newColor.css('background-color');
}

function sliderEvent() {
    var r = $('#red').val();
    var g = $('#green').val();
    var b = $('#blue').val();
    $('#newColor').css('background-color', rgbToString(r, g, b))
}

function resetSlidersAndSwatch() {
    $sliderInputs.each(function() {
        $(this).val(0);
    });
    $('#newColor').css('background-color', 'rgb(0, 0, 0)')
}

function rgbToString(r, g, b) {
    var rgb = 'rgb(';
    rgb += [r, g, b].join();
    rgb += ')';
    return rgb;
}
