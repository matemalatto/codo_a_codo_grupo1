# Importar SQLAlchemy y la configuración de la base de datos desde app.py
from app import db, app
from usuarios import Usuario
from datetime import datetime

# Configurar la aplicación Flask para que el contexto de la aplicación esté disponible
with app.app_context():
    # Crear un nuevo usuario de prueba
    nuevo_usuario = Usuario(
        nombre='UsuarioPrueba2',
        apellido='ApellidoPrueba',
        contrasenia='password123',
        fecha_nacimiento=datetime.now().date(),
        correo='usuario.prueba@example3.com'
    )

    # Agregar el usuario a la sesión y confirmar la transacción
    db.session.add(nuevo_usuario)
    db.session.commit()

    print("Usuario de prueba agregado correctamente a la base de datos.")
