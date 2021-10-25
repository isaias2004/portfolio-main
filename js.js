const typed = new Typed('.typed', {
    strings: [
        '<i>Desarrollador</i>',
        '<i>Programador</i>',
        '<i>Diseñador</i>'
        ],
        typeSpeed: 75,
        backSpeed: 25,
        startDelay: 300,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
});

var slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelectorAll('.tooltipped');
    let asd = M.Tooltip.init(element,);
});

var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function () {
    $("#bEnviar").click(function () {
        var nombre = $("#itNombre").val();
        var correo = $("#itMail").val();
        var asunto = $("#itAsunto").val();

        if (nombre == "") {
            $("#mensaje1").fadeIn();
            return false;
        } else {
            $("#mensaje1").fadeOut();
            if (correo == "" || !expr.test(correo)) {
                $("#mensaje2").fadeIn();
                return false;
            } else {
                $("#mensaje2").fadeOut();
                if (asunto == "") {
                    $("#mensaje3").fadeIn();
                    return false;
                }
            }
        }

    });
});