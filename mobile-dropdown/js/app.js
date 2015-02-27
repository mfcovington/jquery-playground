var $select = $('<select></select>');

$('#menu').append($select);

$('#menu li').each(function() {
    var $menuLink = $(this).children('a');
    var text = $menuLink.text();
    var href = $menuLink.attr('href');

    var $option = $('<option></option>');
    $option.text(text);
    $option.val(href);

    if ($(this).hasClass('selected')) {
        $option.prop('selected', true);
        console.log(text + ' (' + href + ') is selected');
    }

    $select.append($option);
});

var $button = $('<button>Go</button>');
$('#menu').append($button);

$button.click(function() {
    window.location = $select.val();
});
