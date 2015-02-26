var $select = $('<select></select>');

$('#menu').append($select);

var menuList = $('#menu li');

for (var i = 0; i < menuList.length; i++) {
    var $menuLink = $(menuList[i]).children('a');
    var text = $menuLink.text();
    var href = $menuLink.attr('href');

    var $option = $('<option></option>');
    $option.text(text);
    $option.attr('value', href);
    $select.append($option);
};
