$('html').disableSelection();

var currentColor = $('.controls .selected').css('background-color');

var $sliderInputs = $('.sliders input[type=range]');
resetSlidersAndSwatch();

var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
context.strokeStyle = currentColor;
context.lineWidth = 10;
context.lineJoin = 'round';
context.lineCap = 'round';

var lastMouseEvent;
var mouseDown = false;
var mouseOnCanvas = false;

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

$canvas.mousedown(function(event) {
    lastMouseEvent = event;
    mouseDown = true;
}).mousemove(function(event) {
    if (mouseDown && mouseOnCanvas) {
        context.beginPath();
        context.moveTo(lastMouseEvent.offsetX, lastMouseEvent.offsetY);
        context.lineTo(event.offsetX, event.offsetY);
        context.strokeStyle = currentColor;
        context.stroke();
        lastMouseEvent = event;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    mouseOnCanvas = false;
}).mouseenter(function() {
    lastMouseEvent = event;
    mouseOnCanvas = true;
});

$('html').mouseup(function() {
    mouseDown = false;
});
