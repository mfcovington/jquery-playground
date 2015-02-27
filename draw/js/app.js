var currentColor = $('.controls .selected').css('background-color');

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

var $sliderInputs = $('.sliders input');

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
