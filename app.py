from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from datetime import datetime

# Configuración de Flask
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/mundiviajes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuración de SQLAlchemy
db = SQLAlchemy(app)

# Importar la clase Usuarios desde usuarios.py
from usuarios import Usuarios

# Ruta para el formulario de registro
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        contrasenia = request.form['contraseña']
        fecha_nacimiento = datetime.strptime(request.form['fecha_de_nacimiento'], '%Y-%m-%d').date()
        correo = request.form['mail']

        # Crear una instancia de Usuarios para interactuar con la base de datos
        usuarios = Usuarios()

        # Intentar agregar el usuario
        try:
            if usuarios.agregar_usuario(nombre, apellido, contrasenia, fecha_nacimiento, correo):
                return redirect(url_for('exito_registro'))
            else:
                return "Ya existe un usuario con ese correo electrónico."
        except IntegrityError:
            return "Error: Violación de integridad. Ya existe un usuario con ese correo electrónico."

    return render_template('registro.html')

# Ruta para la página de éxito de registro
@app.route('/exito_registro')
def exito_registro():
    return "Registro exitoso. ¡Bienvenido!"

if __name__ == '__main__':
    app.run(debug=True)
