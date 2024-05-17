document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value.trim();
        var apellido = document.getElementById('apellido').value.trim();
        var contraseña = document.getElementById('contraseña').value.trim();
        var fechaNacimiento = document.getElementById('fecha_de_nacimiento').value;
        var email = document.getElementById('mail').value.trim();


        if (nombre !== '' && apellido !== '' && contraseña !== '' && fechaNacimiento !== '' && email !== '') {
            alert('¡Bienvenido/a, ' + nombre + '!');
            window.location.href = 'index.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
