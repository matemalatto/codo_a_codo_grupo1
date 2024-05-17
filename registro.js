document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var contraseña = document.getElementById('contraseña').value.trim();
        var fechaNacimiento = document.getElementById('fecha_de_nacimiento').value;
        var email = document.getElementById('mail').value.trim();

        var errores = [];

        if (nombre === '') {
            errores.push('El campo "Nombre" es obligatorio.');
        }

        if (apellido === '') {
            errores.push('El campo "Apellido" es obligatorio.');
        }

        if (contraseña === '') {
            errores.push('El campo "Contraseña" es obligatorio.');
        }

        if (fechaNacimiento === '') {
            errores.push('El campo "Fecha de Nacimiento" es obligatorio.');
        }

        if (email === '') {
            errores.push('El campo "Correo Electrónico" es obligatorio.');
        } else if (!validarEmail(email)) {
            errores.push('El correo electrónico ingresado no es válido.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
        } else {
            event.target.submit(); 
            alert("Muchas gracias por registrarse, " + nombre)
            window.location.href = 'inicio_sesion.html';

        }
    });
});

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
