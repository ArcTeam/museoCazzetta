const url = window.location.pathname.split("/").pop().split(".")[0];
loadSvg(url);


$("body").on('click', "svg .hoverSvg", function(){
  // $(".pianoTitle").html('')
  // let txt = $(this).data('testo');
  // $(".pianoTitle").html($.i18n(txt))
  $("svg .hoverSvg").removeClass('activeRoom');
  $(this).addClass('activeRoom');
});
