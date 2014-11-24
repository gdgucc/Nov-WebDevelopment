
var tabs = document.querySelector('paper-tabs');

/* Add the following code: 5*/
var list = document.querySelector('post-list');

tabs.addEventListener('core-select', function() {
  list.show = tabs.selected;
});