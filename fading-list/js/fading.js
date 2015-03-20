var $fadingList = $('.fading-list');
var $listItems = $fadingList.find('li');
var itemCount = $listItems.length;

fadeListItems($listItems, 0, itemCount);

$fadingList.on('mouseover', 'li', function() {
    var $clickedItem = $(this);

    var clickedOpacity = $clickedItem.css('opacity');
    console.log('Opacity: ' + clickedOpacity);

    $clickedItem.css('opacity', 1);
    fadeListItems($clickedItem.nextAll('li'), 1, itemCount);
    fadeListItems($clickedItem.prevAll('li'), 1, itemCount);
});

function fadeListItems($adjacentItems, itemNumber, itemCount) {
    $adjacentItems.each(function(){
        var $item = $(this);
        $item.css('opacity', 1 - itemNumber / itemCount);
        itemNumber++;
    });
}
