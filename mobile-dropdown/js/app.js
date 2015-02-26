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
        $option.prop('selected', 'selected');
        console.log(text + ' (' + href + ') is selected');
    }

    $select.append($option);
});

var $form = $('<form method="link"></form>');
var $button = $('<button>Go</button>');

var selectedHref = $select.children(":selected").val();
$form.attr('action', selectedHref);

$form.append($button);
$('#menu').append($form);

$select.change(function() {
    var selectedHref = $select.children(":selected").val();
    var selectedLabel = $select.children(":selected").text();

    var message = 'Selection changed to ' + selectedLabel;
    message += ' (' + selectedHref + ')';
    console.log(message);
    $form.attr('action', selectedHref);
});
