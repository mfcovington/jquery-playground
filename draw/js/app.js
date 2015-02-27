$('body').disableSelection();

var currentColor = $('.controls .selected').css('background-color');

var $sliderInputs = $('.sliders input');
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

$sliderInputs.change(sliderEvent);

function deselectColors() {
    $('.controls li').siblings('li').each(function() {
        $(this).removeClass('selected')
    });
}

function selectColor($newColor) {
    $newColor.addClass('selected');
    currentColor = $newColor.css('background-color');
}

function sliderEvent() {
    var rgbObject = {};
    $sliderInputs.each(function() {
        var color = $(this).attr('id');
        var value = $(this).val();
        rgbObject[color] = value;
    });
    updateNewColor(rgbObject);
}

function resetSlidersAndSwatch() {
    $sliderInputs.each(function() {
        $(this).val(0);
    });
    $('#newColor').css('background-color', 'rgb(0, 0, 0)')
}

function updateNewColor(rgbObject) {
    var rgb = rgbObjectToString(rgbObject);
    console.log(rgb);
    $('#newColor').css('background-color', rgb);
}

function rgbObjectToString(rgbObject) {
    var rgb = 'rgb(';
    rgb += [rgbObject['red'], rgbObject['green'], rgbObject['blue']].join();
    rgb += ')';
    return rgb;
}
