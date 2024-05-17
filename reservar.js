document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flightForm').addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var edad = document.getElementById('edad').value;
    var clase = document.getElementById('clase').value;
    var terminosCondiciones = document.getElementById('terminosCondiciones').checked;

    var errores = [];

    if (nombre === '') {
        errores.push('El nombre es obligatorio');
    }

    if (apellido === '') {
        errores.push('El apellido es obligatorio');
    }

    if (edad === '' || edad < 18) {
        errores.push('Debes ser mayor de edad para reservar un vuelo');
    }

    if (clase === '') {
        errores.push('Selecciona una clase');
    }

    if (!terminosCondiciones) {
        errores.push('Debes aceptar los terminos y condiciones');
    }

    if (errores.length === 0) {
       alert("Reserva completada, disfruta sus vacaciones!")
    } else {
        var mensajeErrores = errores.join('\n');
        alert(mensajeErrores);
    }
    
}
