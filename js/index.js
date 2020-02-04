const slides = [
  "001.jpg",
  "002.jpg",
  "003.jpg",
  "004.jpg",
  "005.jpg",
  "006.jpg",
  "007.jpg",
  "008.jpg",
  "009.jpg"
];
slides.forEach(function(v,i){
  let div = $("<div/>", {class:'carousel-item'})
    .css({"background-image":"url('assets/img/carousel/"+v+"')"})
    .appendTo('.carousel-inner');
  if (i == 0) {div.addClass('active');}
})

loadSvg('piano1');
$("[name=switchSvg]").on('click', function(){
  $("[name=switchSvg]").prop("disabled", false);
  $(this).prop("disabled", true);
  loadSvg($(this).val());
})

$("body").on('click', "svg .hoverSvg", function(){
  $(".roomDescription").html('')
  let txt = $(this).data('testo');
  $(".roomDescription").html($.i18n(txt))
  $("svg .hoverSvg").removeClass('activeRoom');
  $(this).addClass('activeRoom');
});
