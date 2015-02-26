var $select = $('<select></select>');

$('#menu').append($select);

$('#menu li').each(function() {
    var $menuLink = $(this).children('a');
    var text = $menuLink.text();
    var href = $menuLink.attr('href');

    var $option = $('<option></option>');
    $option.text(text);
    $option.attr('value', href);
    $select.append($option);
});
