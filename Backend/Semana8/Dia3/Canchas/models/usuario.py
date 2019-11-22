from bd import bd
import bcrypt


class UsuarioModel(bd.Model):
    __tablename__ = "t_usuario"

    id = bd.Column("usu_id",bd.Integer, primary_key=True)
    nombre = bd.Column("usu_nomb",bd.String(45))
    apellido = bd.Column("usu_ape",bd.String(45))
    hashedi = bd.Column("usu_hash",bd.Text)
    saltstr = bd.Column("usu_salt",bd.Text)
    tipo = bd.Column("usu_tipo",bd.String(20))
    dni = bd.Column("usu_dni",bd.String(10))
    correo = bd.Column("usu_mail",bd.Text)

    reserva = bd.relationship('ReservaModel',lazy=True, backref='reservas')

    def __init__(self,nombre,apellido,password,tipo,dni,correo):
        self.nombre = nombre
        self.apellido = apellido
        self.tipo = tipo
        # encriptar password -> para ello necesitamos importar bcrypt
        password_encriptada = bytes(password,'utf-8')
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password_encriptada,salt)
        salt = hashed.decode('utf-8')
        hashed = hashed.decode('utf-8')
        # terminando de encriptar el password
        self.saltstr = salt
        self.hasedhi = hashed
        self.dni = dni
        self.correo = correo

    def retornar_yisun_user(self):
        return{
            'id': self.id,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'tipo': self.tipo,
            'dni':self.dni,
            'email': self.correo
            
        }

    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()