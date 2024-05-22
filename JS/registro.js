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

        errores = errores.concat(validarContraseña(contraseña));

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
            alert("Muchas gracias por registrarse, " + nombre);
            event.target.submit();
            window.location.href = 'inicio_sesion.html';
        }
    });
});

function validarContraseña(contraseña) {
    const errores = [];

    if (contraseña === '') {
        errores.push('El campo "Contraseña" es obligatorio.');
    }

  
    if (contraseña.length < 8) {
        errores.push('La contraseña debe tener al menos 8 caracteres.');
    }

   
    if (!/[A-Z]/.test(contraseña)) {
        errores.push('La contraseña debe contener al menos una letra mayúscula.');
    }

   
    if (!/[a-z]/.test(contraseña)) {
        errores.push('La contraseña debe contener al menos una letra minúscula.');
    }

   
    if (!/[0-9]/.test(contraseña)) {
        errores.push('La contraseña debe contener al menos un número.');
    }

  

    return errores;
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
