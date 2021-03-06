// Check if browser is Firefox: http://stackoverflow.com/a/26358856/996114
var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;

if (!isFirefox) {
    // Don't select elements when double-clicking to delete colors.
    // However, can't adjust sliders in Firefox if selection is disabled.
    $('html').disableSelection();
}

var currentColor = $('.controls .selected').css('background-color');

var $sliderInputs = $('.sliders input[type=range]');

if (isFirefox) {
    $sliderInputs.css('float', 'right');
}

resetSlidersAndSwatch();

var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
context.strokeStyle = currentColor;
context.lineWidth = 10;
context.lineJoin = 'round';
context.lineCap = 'round';
context.fillStyle = 'white';

var $clearCanvas = $('#clear');
$clearCanvas.click(function() {
    context.fillRect(0, 0, $canvas.width(), $canvas.height());
});
$clearCanvas.click();

var lastMouseEvent;
var mouseDown = false;
var mouseOnCanvas = false;

$('.controls').on('click', 'li', function() {
    deselectColors();
    selectColor($(this));
});

$('.controls').on('dblclick', 'li', function() {
    var $colorToRemove = $(this);

    if ($colorToRemove.siblings(':first').length > 0) {
        selectColor($colorToRemove.siblings(':first'));
    }
    else {
        selectColor($colorToRemove);
    }

    $colorToRemove.remove();
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
        var oldPos = getXY(lastMouseEvent, $canvas);
        var newPos = getXY(event, $canvas);

        context.beginPath();
        context.moveTo(oldPos.x, oldPos.y);
        context.lineTo(newPos.x, newPos.y);
        context.strokeStyle = currentColor;
        context.stroke();
        lastMouseEvent = event;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    mouseOnCanvas = false;
}).mouseenter(function(event) {
    lastMouseEvent = event;
    mouseOnCanvas = true;
});

$canvas.click(function(event) {
    var clickPos = getXY(event, $canvas);

    context.beginPath();
    context.moveTo(clickPos.x, clickPos.y);
    context.lineTo(clickPos.x + 0.1, clickPos.y);
    context.strokeStyle = currentColor;
    context.stroke();
});

$('html').mouseup(function() {
    mouseDown = false;
});

$('#download').click(function() {
    var dataURL = $canvas[0].toDataURL();
    var filename = 'masterpiece.png';
    var $imgLink = $('<a></a>').attr({
        href: dataURL,
        download: filename,
        target: '_blank',
    });

    if (isFirefox) {
        // http://bugs.jquery.com/ticket/14761
        // http://jsfiddle.net/D572L/
        // For Firefox, we need to manually do a click event

        // Create event
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false,
            false, false, false, 0, null);
        // Fire event
        $imgLink[0].dispatchEvent(event);
    }
    else {
        $imgLink[0].click();
    }
});

var $info = $('#info');

$('.controls').on('mouseenter', 'li', function() {
    if ($(this).hasClass('selected')) {
        $info.text('Double-click color to remove.');
    }
    else {
        $info.text('Click color to choose. Double-click color to remove.');
    }
});

$('.controls').on('click', 'li', function() {
    $info.text('Double-click color to remove.');
});

$('.controls').on('mouseleave', 'li', function() {
    $info.html('&nbsp;');
});

$('#download').hover(function() {
    $info.text('Click to download your masterpiece!');
}, function() {
    $info.html('&nbsp;');
});

$('#clear').hover(function() {
    $info.text('Click to clear the canvas.');
}, function() {
    $info.html('&nbsp;');
});

$('#revealColorSelect').hover(function() {
    $info.text('Click to mix a new color.');
}, function() {
    $info.html('&nbsp;');
});

$('#addNewColor').hover(function() {
    $info.text('Click to add the new color to your palette.');
}, function() {
    $info.html('&nbsp;');
});

function getXY(event, $canvas) {
    if (isFirefox) {
        // this should work for Firefox
        x = event.pageX - $canvas.offset().left;
        y = event.pageY - $canvas.offset().top;
    }
    else {
        x = event.offsetX;
        y = event.offsetY;
    }

    return {
        x: x,
        y: y,
    };
}
