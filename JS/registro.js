document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var contrasenia = document.getElementById('contrasenia').value.trim(); // Ajustado a 'contrasenia'
        var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        var correo = document.getElementById('correo').value.trim(); // Ajustado a 'correo'

        var errores = [];

        if (nombre === '') {
            errores.push('El campo "Nombre" es obligatorio.');
        }

        if (apellido === '') {
            errores.push('El campo "Apellido" es obligatorio.');
        }

        errores = errores.concat(validarContraseña(contrasenia));

        if (fechaNacimiento === '') {
            errores.push('El campo "Fecha de Nacimiento" es obligatorio.');
        }

        if (correo === '') {
            errores.push('El campo "Correo Electrónico" es obligatorio.');
        } else if (!validarEmail(correo)) { // Ajustado a 'correo'
            errores.push('El correo electrónico ingresado no es válido.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
        } else {
            alert("Muchas gracias por registrarse, " + nombre);
            event.target.submit();
            window.location.href = 'inicio_sesion.html';
        }
    });
});

function validarContraseña(contrasenia) {
    const errores = [];

    if (contrasenia === '') {
        errores.push('El campo "Contraseña" es obligatorio.');
    }

    if (contrasenia.length < 8) {
        errores.push('La contraseña debe tener al menos 8 caracteres.');
    }

    if (!/[A-Z]/.test(contrasenia)) {
        errores.push('La contraseña debe contener al menos una letra mayúscula.');
    }

    if (!/[a-z]/.test(contrasenia)) {
        errores.push('La contraseña debe contener al menos una letra minúscula.');
    }

    if (!/[0-9]/.test(contrasenia)) {
        errores.push('La contraseña debe contener al menos un número.');
    }

    return errores;
}

function validarEmail(correo) {
    var re = /\S+@\S+\.\S+/;
    return re.test(correo);
}
