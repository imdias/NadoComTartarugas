

$('.carousel').slick({
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    slideToScroll: 3,
    adaptiveHeight: true,
    centerMode: true,
    speed: 500,
    variableWidth: true,
});

// Escrevendo nome no footer da página
var newName = document.querySelector(".name");

newName.textContent = "Igor Morais Dias";