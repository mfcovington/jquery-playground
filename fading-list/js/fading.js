var $fadingList = $('.fading-list');
var $listItems = $fadingList.find('li');
var itemCount = $listItems.length;
var $html = $('html');

$html.disableSelection();

fadeListItems($listItems, 0, itemCount);

$fadingList.on('mouseover', 'li', function() {
    var $clickedItem = $(this);
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

$html.click(function() {
    $listItems.css('background-color', randomColor());
});

$html.dblclick(function() {
    $listItems.css('background-color', randomColor);
});

function randomColor() {
    var r = Math.floor(256 * Math.random());
    var g = Math.floor(256 * Math.random());
    var b = Math.floor(256 * Math.random());
    return 'rgb(' + r + ', ' + g + ', ' + b + ')' ;
}
