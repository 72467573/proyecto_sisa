$(document).ready(function() {
    $("#btn-cursos").click(function() {
        $("#compras").removeClass("active");
        setTimeout(function() {
            $("#cursos").addClass("active");
        }, 200);
    });

    $("#btn-compras").click(function() {
        $("#cursos").removeClass("active");
        setTimeout(function() {
            $("#compras").addClass("active");
        }, 200);
    });

    $(".curso-link").click(function(event) {
        event.preventDefault();
        var cursoId = $(this).data("id");

        // Detalles del Curso Js
        var cursoInfo = {
            1: {
                profesor: "Dr. Ana Martínez",
                modalidad: "Presencial",
                sede: "Sede Central",
                sesion: "Lunes, 10 de julio de 2024, 10:00 AM"
            },
            2: {
                profesor: "Lic. Carlos Sánchez",
                modalidad: "Virtual",
                sede: "N/A",
                sesion: "Miércoles, 12 de julio de 2024, 2:00 PM"
            },
            3: {
                profesor: "Dr. Laura Gómez",
                modalidad: "Virtual",
                sede: "N/A",
                sesion: "Viernes, 14 de julio de 2024, 5:00 PM"
            }
        };

        var detalles = cursoInfo[cursoId];
        if (detalles) {
            $("#curso-profesor").text(detalles.profesor);
            $("#curso-modalidad").text(detalles.modalidad);
            $("#curso-sede").text(detalles.sede);
            $("#curso-sesion").text(detalles.sesion);
            $("#curso-detalles").show();
        }
    });
});