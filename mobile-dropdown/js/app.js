var $select = $('<select></select>');

$('#menu').append($select);

var menuLinks = $('#menu a');

for (var i = 0; i < menuLinks.length; i++) {
    var currentLink = menuLinks[i];
    var text = currentLink.text;
    var href = currentLink.href;
};
