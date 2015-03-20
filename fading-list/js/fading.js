var $fading_list = $('.fading-list');
var $list_items = $fading_list.find('li')
var item_count = $list_items.length;

var item_number = 0;
$list_items.each(function(){
    var $item = $(this);
    $item.css('opacity', 1 - item_number / item_count);
    item_number++;
});

$fading_list.on('click', 'li', function(event) {
    event.preventDefault();

    var $clicked_item = $(this);
    console.log($clicked_item.css('opacity'));

    $clicked_item.css('opacity', 1);

    var item_number = 1;
    $clicked_item.nextAll('li').each(function(){
        var $item = $(this);
        $item.css('opacity', 1 - item_number / item_count);
        item_number++;
    });

    var item_number = 1;
    $clicked_item.prevAll('li').each(function(){
        var $item = $(this);
        $item.css('opacity', 1 - item_number / item_count);
        item_number++;
    });
});
