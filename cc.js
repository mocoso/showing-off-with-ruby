// Replace instances of (CC) with the creative commons logo
jQuery.fn.replaceCcWithLogo = function() {
  this.each(function() {
    $(this).html($(this).html().replace('(CC)', '<img width="25" height="25" class="cc" src="./file/cc.png">'));
  });
  return this;
}