$(document).ready(function() {
  if (!localStorage.getItem('lang')) { localStorage.setItem('lang','it'); }
  $.i18n().load({
    'en': 'assets/i18n/en.json',
    'it': 'assets/i18n/it.json'
  }).done(function(){
    set_locale_to(localStorage.getItem('lang'))
    $('.switch-locale').on('click', 'a', function(e) {
      e.preventDefault();
      set_locale_to($(this).data('locale'));
      localStorage.setItem('lang',$(this).data('locale'));
    });
  });
  $("nav").load('assets/inc/nav.html', function(){
    $(".load").on('click', function(e) {
      e.preventDefault();
      loadContent($(this).data("load"));
    })
  });

});

function set_locale_to(locale) {
  if (locale){$.i18n().locale = locale;}
  $('body').i18n();
};

function loadContent(page){
  $("main").load("assets/inc/"+page+".html");
  $('body').i18n();
}