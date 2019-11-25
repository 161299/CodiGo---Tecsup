from models.usuario import UsuarioModel
# bcrypt para la encriptacion de la contraseña
import bcrypt 

class Usuario(object):
    def __init__(self, id, username):
        self.id = id,
        self.username = username
    def __str__(self):
        return "usuario(id='%s')" % self.id

def autenticacion(username, password):
    if username and password:
        resultado = UsuarioModel.query.filter_by(correo = username).first()
        if resultado:
            password_encriptada = bytes(password, 'utf-8')
            salt = bytes(resultado.saltstr,'utf-8')
            hashed = bcrypt.hashpw(password_encriptada,salt)
            hashed = hashed.decode('utf-8')
            if hashed == resultado.saltstr:
                return Usuario(resultado.id,resultado.correo)
            else:
                return None
        else:
            return None
    else:
        return None

def identificador(payload):
    print(payload)
    if (payload['identity']):
        resultado = UsuarioModel.query.filter_by(id = payload['identity']).first()
        if resultado :
            return (resultado.id, resultado.correo)
        else:
            return None
    else:
        return None
