var $fading_list = $('.fading-list');
var $list_items = $fading_list.find('li')
var item_count = $list_items.length;

var item_number = 0;
$list_items.each(function(){
    var $item = $(this);
    $item.css('opacity', 1 - item_number / item_count);
    item_number++;
});
