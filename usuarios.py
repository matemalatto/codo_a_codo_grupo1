from app import db
from sqlalchemy.exc import IntegrityError

# Definición de la clase Usuario
class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(50), nullable=False)
    apellido = db.Column(db.String(50), nullable=False)
    contrasenia = db.Column(db.String(100), nullable=False)
    fecha_nacimiento = db.Column(db.Date, nullable=False)
    correo = db.Column(db.String(100), unique=True, nullable=False)

# Clase Usuarios para manejar operaciones con usuarios
class Usuarios:
    def __init__(self):
        pass

    def agregar_usuario(self, nombre, apellido, contrasenia, fecha_nacimiento, correo):
        nuevo_usuario = Usuario(
            nombre=nombre,
            apellido=apellido,
            contrasenia=contrasenia,
            fecha_nacimiento=fecha_nacimiento,
            correo=correo
        )
        try:
            db.session.add(nuevo_usuario)
            db.session.commit()
            return True
        except IntegrityError:
            db.session.rollback()
            return False
