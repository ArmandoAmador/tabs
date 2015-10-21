$(document).ready(function() {
  var $tabs;
  var default_page;

  var loadPage = function(e) {
    if (e === undefined) {
      $('.tab-content').load(default_page + '.html');
    } else {
      e.preventDefault();
      $('.tab-content').load(e.target.text + '.html');
    }
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  }

  var init = function() {
    default_page = "local";
    $tabs = $('.tabs-container')
    $tabs.on('click','a', loadPage);
    loadPage();
  }

  init();
});


