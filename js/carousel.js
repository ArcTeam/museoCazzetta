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
